import "./assets/main.css";
import "./assets/common.css";
import "./assets/scss/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { initAnalytics } from "@/lib/analytics";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// Apple 스타일 어드민 테마 (element-plus 이후에 로드해 토큰을 덮어씀)
import "./assets/admin-theme.css";

// ?internal=1 등 분석 opt-out 처리
initAnalytics();

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus);

app.mount("#app");
