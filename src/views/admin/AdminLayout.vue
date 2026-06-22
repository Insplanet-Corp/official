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
  background: #f5f6f8;
  color: #1f2329;
}
.admin-header {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 24px;
  height: 60px;
  background: #fff;
  border-bottom: 1px solid #e5e6eb;
}
.admin-logo {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}
.admin-nav {
  flex: 1;
  display: flex;
  gap: 16px;
}
.admin-nav a {
  color: #4e5969;
  text-decoration: none;
  font-size: 14px;
}
.admin-nav a.router-link-exact-active {
  color: #2454ff;
  font-weight: 600;
}
.admin-account {
  display: flex;
  align-items: center;
  gap: 12px;
}
.admin-email {
  font-size: 13px;
  color: #86909c;
}
.admin-main {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
