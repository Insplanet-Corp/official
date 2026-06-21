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

// ?internal=1 등 분석 opt-out 처리
initAnalytics();

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus);

app.mount("#app");
