import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";
import { setOptOut } from "@/lib/analytics";

export const useAdminStore = defineStore("admin", () => {
  const session = ref(null);
  const ready = ref(false);

  // 앱 시작 시 1회 호출: 기존 세션 복원 + 변경 구독
  const init = async () => {
    if (ready.value) return;
    const { data } = await supabase.auth.getSession();
    session.value = data.session;
    // 어드민 세션이 있는 브라우저는 방문자 분석에서 제외(내부자)
    if (data.session) setOptOut(true);
    supabase.auth.onAuthStateChange((_event, newSession) => {
      session.value = newSession;
      if (newSession) setOptOut(true);
    });
    ready.value = true;
  };

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    session.value = data.session;
    // 로그인한 어드민의 브라우저는 이후 방문이 집계되지 않도록 제외
    setOptOut(true);
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    session.value = null;
  };

  const isLoggedIn = () => !!session.value;

  return { session, ready, init, signIn, signOut, isLoggedIn };
});
