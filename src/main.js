import "./assets/main.css";
import "./assets/common.css";
import "./assets/scss/index.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(ElementPlus);

app.mount("#app");
