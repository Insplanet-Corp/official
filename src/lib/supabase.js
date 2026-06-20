import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

if (!isSupabaseConfigured) {
  // env 누락 시 경고만 남기고, 앱이 죽지 않도록 placeholder 로 생성한다.
  // (어드민/문의 기능은 동작하지 않지만 공개 사이트는 정상 렌더링됨)
  console.warn(
    "[supabase] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 환경변수가 설정되지 않았습니다. 어드민·문의 기능이 비활성화됩니다."
  );
}

// createClient 는 빈 값에 에러를 던지므로 placeholder 로 폴백한다.
export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseAnonKey || "placeholder-anon-key"
);
