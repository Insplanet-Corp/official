import { supabase, isSupabaseConfigured } from "@/lib/supabase";

const OPTOUT_KEY = "insp_analytics_optout";
const VISITOR_KEY = "insp_visitor_id";

// ── 내부자 제외(opt-out) ──────────────────────────────
export const isOptedOut = () => {
  try {
    return localStorage.getItem(OPTOUT_KEY) === "1";
  } catch {
    return false;
  }
};

export const setOptOut = (value = true) => {
  try {
    if (value) localStorage.setItem(OPTOUT_KEY, "1");
    else localStorage.removeItem(OPTOUT_KEY);
  } catch {
    /* localStorage 비활성 환경 무시 */
  }
};

const getVisitorId = () => {
  try {
    let id = localStorage.getItem(VISITOR_KEY);
    if (!id) {
      id =
        (window.crypto && crypto.randomUUID && crypto.randomUUID()) ||
        `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem(VISITOR_KEY, id);
    }
    return id;
  } catch {
    return null;
  }
};

// 앱 시작 시 1회: URL 의 ?internal=1 / ?internal=0 로 opt-out 토글
// (어드민 로그인 시에도 자동으로 opt-out 처리됨 → stores/admin.js)
export const initAnalytics = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("internal")) {
      const v = params.get("internal");
      setOptOut(v !== "0" && v !== "false");
    }
  } catch {
    /* no-op */
  }
};

// 어드민에서 "현재 내 공인 IP" 조회 (track 함수가 서버에서 본 IP 를 반환)
export const getMyIp = async () => {
  const { data, error } = await supabase.functions.invoke("track", {
    body: { whoami: true },
  });
  if (error) throw error;
  return data?.ip || null;
};

const hostOf = (url) => {
  try {
    return url ? new URL(url).hostname : null;
  } catch {
    return null;
  }
};

// 페이지뷰 기록 (실패해도 사용자 경험에 영향 없도록 무시)
export const trackPageview = async (path) => {
  if (!isSupabaseConfigured) return;
  if (isOptedOut()) return; // 내부자 제외
  if (typeof path === "string" && path.startsWith("/admin")) return;

  const ref = document.referrer || "";
  const refHost = hostOf(ref);
  // 같은 사이트 내 이동은 외부 유입이 아니므로 referrer 에서 제외
  const isSameHost = refHost && refHost === window.location.hostname;

  let params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch {
    params = new URLSearchParams();
  }

  try {
    // 기록은 Edge Function('track')을 통해서만 이뤄진다.
    // 서버가 요청 IP 를 보고 사무실(내부) IP 면 기록하지 않는다.
    await supabase.functions.invoke("track", {
      body: {
        path,
        referrer: isSameHost ? null : ref || null,
        referrer_host: isSameHost ? null : refHost,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        visitor_id: getVisitorId(),
      },
    });
  } catch {
    /* 분석 실패 무시 */
  }
};

// 다운로드 클릭 기록 (페이지뷰와 동일하게 내부 IP 는 서버에서 제외)
export const trackDownload = async (item, path) => {
  if (!isSupabaseConfigured) return;
  if (isOptedOut()) return;

  const ref = document.referrer || "";
  const refHost = hostOf(ref);
  const isSameHost = refHost && refHost === window.location.hostname;

  try {
    await supabase.functions.invoke("track", {
      body: {
        event: "download",
        item,
        path: path || window.location.pathname,
        referrer_host: isSameHost ? null : refHost,
        visitor_id: getVisitorId(),
      },
    });
  } catch {
    /* 분석 실패 무시 */
  }
};
