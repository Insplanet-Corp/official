import { supabase } from "@/lib/supabase";

// Supabase Storage 설정
export const BROCHURE_BUCKET = "assets";
export const BROCHURE_PATH = "brochure/insplanet_brief.pdf";

// 스토리지 용량 관리 설정 (Supabase Free 플랜 기준 1GB)
export const STORAGE_QUOTA_BYTES = 1024 * 1024 * 1024; // 1GB
export const STORAGE_WARN_RATIO = 0.8; // 80% 초과 시 경고

// Storage에 브로셔가 없을 때 사용할 번들 기본 파일
export const FALLBACK_BROCHURE_URL = "/brochure/insplanet_brief.pdf";

const folderOf = (path) => path.split("/").slice(0, -1).join("/");
const nameOf = (path) => path.split("/").pop();

// 버킷 내 브로셔 파일 메타 조회 (없으면 null)
export const getBrochureFile = async () => {
  const { data, error } = await supabase.storage
    .from(BROCHURE_BUCKET)
    .list(folderOf(BROCHURE_PATH), { search: nameOf(BROCHURE_PATH) });
  if (error || !data?.length) return null;
  return data.find((f) => f.name === nameOf(BROCHURE_PATH)) || null;
};

// 버킷 전체 사용량(바이트) 재귀 합산. 폴더는 id가 null로 내려온다.
export const getBucketUsage = async (bucket = BROCHURE_BUCKET) => {
  let total = 0;
  const walk = async (prefix) => {
    const { data, error } = await supabase.storage
      .from(bucket)
      .list(prefix, { limit: 1000, sortBy: { column: "name", order: "asc" } });
    if (error || !data) return;
    for (const item of data) {
      const path = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.id === null) {
        await walk(path); // 폴더 → 재귀
      } else {
        total += item.metadata?.size ?? 0; // 파일 → 크기 합산
      }
    }
  };
  await walk("");
  return total;
};

// ── 교체 이력 (DB) ── 실제 파일은 1개만 유지하고 메타만 기록 ──
export const getBrochureHistory = async () => {
  const { data, error } = await supabase
    .from("brochure_history")
    .select("*")
    .order("uploaded_at", { ascending: false });
  if (error) return [];
  return data || [];
};

export const addBrochureHistory = async ({ file_name, size, uploaded_at }) => {
  const row = { file_name, size };
  if (uploaded_at) row.uploaded_at = uploaded_at;
  return supabase.from("brochure_history").insert(row);
};

export const getBrochurePublicUrl = () => {
  const { data } = supabase.storage
    .from(BROCHURE_BUCKET)
    .getPublicUrl(BROCHURE_PATH);
  return data?.publicUrl || FALLBACK_BROCHURE_URL;
};

// 공개 사이트용: Storage에 파일이 있으면 캐시버스팅 버전 URL,
// 없거나 실패하면 번들 기본 파일로 폴백한다.
export const resolveBrochureUrl = async () => {
  try {
    const file = await getBrochureFile();
    if (!file) return FALLBACK_BROCHURE_URL;
    const version = file.updated_at || file.created_at || "";
    return `${getBrochurePublicUrl()}?v=${encodeURIComponent(version)}`;
  } catch {
    return FALLBACK_BROCHURE_URL;
  }
};
