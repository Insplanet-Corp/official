import worksSetting from "@/works-setting";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useOfficialStore } from "@/stores/official.js";

// const officialStore = useOfficialStore();
const { worksSettingList } = worksSetting;
let officialStore;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/portfolio",
    //   name: "portfolio",
    //   component: () => import("../views/PortfolioView.vue"),
    // },
    {
      path: "/work/:workId",
      name: "workContent",
      component: () => import("../views/WorkContentView.vue"),
    },
    {
      path: "/work",
      name: "work",
      component: () => import("../views/WorkView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const { params } = to;

  officialStore = officialStore || useOfficialStore();
  // loading
  officialStore.pageLoaderColorHandler("#000");
  officialStore.pageLoaderZindexHandler("2");
  // // page
  // officialStore.pageTransitionHandler("before-transition");

  if (params.workId) {
    const toWorkData = worksSettingList.find(
      (e) => e.link.split("work/")[1] === params.workId
    );
    officialStore.pageLoaderColorHandler(toWorkData.gradient);
  }

  officialStore.pageChangerHandler("show");
  setTimeout(() => {
    officialStore.pageTransitionHandler("show");
    // officialStore.pageLoaderZindexHandler("0");
    next();
  }, 350);
});

router.afterEach((to, from) => {
  officialStore = officialStore || useOfficialStore();
  officialStore.pageLoaderZindexHandler("0");
  setTimeout(() => {
    // page
    officialStore.pageTransitionHandler("show hide");
  }, 10);

  setTimeout(() => {
    // loading
    officialStore.pageChangerHandler("show hide");
    setTimeout(() => {
      officialStore.pageChangerHandler(null);
      officialStore.pageTransitionHandler(null);
    }, 200);
  }, 200);
});

export default router;
