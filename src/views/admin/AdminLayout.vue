<script setup>
import { useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin";

const router = useRouter();
const adminStore = useAdminStore();

const handleLogout = async () => {
  await adminStore.signOut();
  router.replace({ name: "adminLogin" });
};

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
</script>

<template>
  <div class="admin-wrap">
    <header class="admin-header">
      <h1 class="admin-logo">INSPLANET Admin</h1>
      <nav class="admin-nav">
        <a href="#contacts" @click.prevent="scrollTo('contacts')">문의 내역</a>
        <a href="#analytics" @click.prevent="scrollTo('analytics')">방문자 분석</a>
        <a href="#brochure" @click.prevent="scrollTo('brochure')">브로셔 교체</a>
      </nav>
      <div class="admin-account">
        <span class="admin-email">{{ adminStore.session?.user?.email }}</span>
        <el-button size="small" @click="handleLogout">로그아웃</el-button>
      </div>
    </header>
    <main class="admin-main">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.admin-wrap {
  min-height: 100vh;
  color: #1d1d1f;
}
/* Apple global-nav: 슬림한 블랙 바 */
.admin-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 0 24px;
  height: 52px;
  background: #000;
  color: #fff;
}
.admin-logo {
  font-family: "SF Pro Display", system-ui, -apple-system, sans-serif;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.2px;
  margin: 0;
  color: #fff;
}
.admin-nav {
  flex: 1;
  display: flex;
  gap: 24px;
}
.admin-nav a {
  color: #cccccc;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: -0.12px;
  transition: color 0.2s ease;
}
.admin-nav a:hover {
  color: #fff;
}
.admin-account {
  display: flex;
  align-items: center;
  gap: 14px;
}
.admin-email {
  font-size: 12px;
  letter-spacing: -0.12px;
  color: #7a7a7a;
}
/* 헤더의 로그아웃 버튼: 다크 유틸 그래머 */
.admin-account :deep(.el-button) {
  background: #1d1d1f;
  border-color: #333;
  color: #fff;
  border-radius: 8px;
}
.admin-main {
  padding: 48px 24px;
}
</style>
