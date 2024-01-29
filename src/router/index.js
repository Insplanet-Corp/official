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
  // console.log(to);
  officialStore = officialStore || useOfficialStore();

  // init all
  officialStore.pageTransitionHandler("");
  officialStore.pageLoaderClassHandler("");

  // loading 처리
  officialStore.pageLoaderColorHandler("#000");
  officialStore.pageLoaderZindexHandler("2");
  // officialStore.updateLoadingType(params.workId);

  if (params.workId) {
    const toWorkData = worksSettingList.find(
      (e) => e.link.split("work/")[1] === params.workId
    );
    officialStore.pageLoaderColorHandler(toWorkData.gradient);
  }

  officialStore.pageLoaderClassHandler("show");

  setTimeout(() => {
    officialStore.updateRoutePageStyle({
      transform: "translateY(30vh)",
      opacity: 0,
    });
    setTimeout(() => {
      officialStore.pageTransitionHandler("active");
      next();
    }, 10);
  }, 200);
});

router.afterEach((to, from) => {
  const { params } = to;
  officialStore = officialStore || useOfficialStore();
  // officialStore.pageLoaderZindexHandler("0");

  const latoutType = to.name === "home" ? "fixed-layout" : "relative-layout";
  officialStore.updatePageType(latoutType);

  setTimeout(() => {
    officialStore.updateRoutePageStyle({
      transform: "translateY(0)",
      opacity: 1,
    });
  }, 10);
  setTimeout(() => {
    officialStore.pageLoaderClassHandler(
      `show hide ${params.workId ? "workTransition" : ""}`
    );
    setTimeout(
      () => {
        officialStore.pageLoaderClassHandler(
          params.workId ? "workTransition" : null
        );
      },
      params.workId ? 600 : 300
    );
  }, 400);
});

export default router;
