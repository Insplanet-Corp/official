<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useAdminStore } from "@/stores/admin";

const router = useRouter();
const route = useRoute();
const adminStore = useAdminStore();

const email = ref("");
const password = ref("");
const loading = ref(false);

const handleLogin = async () => {
  if (!email.value || !password.value) {
    ElMessage.warning("이메일과 비밀번호를 입력하세요.");
    return;
  }
  loading.value = true;
  try {
    await adminStore.signIn(email.value, password.value);
    const redirect = route.query.redirect || { name: "adminDashboard" };
    router.replace(redirect);
  } catch (err) {
    ElMessage.error(err.message || "로그인에 실패했습니다.");
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <div class="login-wrap">
    <div class="login-card">
      <h1 class="login-title">INSPLANET Admin</h1>
      <el-form @submit.prevent="handleLogin">
        <el-form-item>
          <el-input
            v-model="email"
            type="email"
            placeholder="이메일"
            size="large"
            autocomplete="username"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="password"
            type="password"
            placeholder="비밀번호"
            size="large"
            show-password
            autocomplete="current-password"
            @keyup.enter="handleLogin"
          />
        </el-form-item>
        <el-button
          type="primary"
          size="large"
          class="login-btn"
          :loading="loading"
          @click="handleLogin"
        >
          로그인
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login-wrap {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f7;
}
.login-card {
  width: 360px;
  padding: 48px 36px;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
}
.login-title {
  font-family: "SF Pro Display", system-ui, -apple-system, sans-serif;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-align: center;
  margin: 0 0 32px;
  color: #1d1d1f;
}
.login-btn {
  width: 100%;
}
</style>
