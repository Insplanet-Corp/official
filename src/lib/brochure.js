import { supabase } from "@/lib/supabase";

// Supabase Storage 설정
export const BROCHURE_BUCKET = "assets";
export const BROCHURE_PATH = "brochure/insplanet_brief.pdf";

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
