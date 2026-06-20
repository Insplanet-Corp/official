import { ref } from "vue";
import { defineStore } from "pinia";
import { supabase } from "@/lib/supabase";

export const useAdminStore = defineStore("admin", () => {
  const session = ref(null);
  const ready = ref(false);

  // 앱 시작 시 1회 호출: 기존 세션 복원 + 변경 구독
  const init = async () => {
    if (ready.value) return;
    const { data } = await supabase.auth.getSession();
    session.value = data.session;
    supabase.auth.onAuthStateChange((_event, newSession) => {
      session.value = newSession;
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
    return data;
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    session.value = null;
  };

  const isLoggedIn = () => !!session.value;

  return { session, ready, init, signIn, signOut, isLoggedIn };
});
