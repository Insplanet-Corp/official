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

  // officialStore.pageLoaderZindexHandler("2");

  // loading 처리
  officialStore.pageLoaderColorHandler("#000");
  officialStore.pageLoaderZindexHandler("2");

  if (params.workId) {
    const toWorkData = worksSettingList.find(
      (e) => e.link.split("work/")[1] === params.workId
    );
    officialStore.pageLoaderColorHandler(toWorkData.gradient);
  }

  officialStore.pageLoaderClassHandler("show");

  // setTimeout(() => {
  //   officialStore.pageLoaderClassHandler("show");
  // }, 600);

  setTimeout(() => {
    // next();

    officialStore.updateRoutePageStyle({ transform: "translateY(100vh)" });
    setTimeout(() => {
      officialStore.pageTransitionHandler("active");
      next();
    }, 10);

    // next();

    // setTimeout(() => {
    //   next();
    //   // officialStore.updateRoutePageStyle({ transform: "translateY(0)" });
    // }, 200);
  }, 200);
  // next();
});

router.afterEach((to, from) => {
  officialStore = officialStore || useOfficialStore();
  officialStore.pageLoaderZindexHandler("0");
  setTimeout(() => {
    // debugger;
    officialStore.updateRoutePageStyle({ transform: "translateY(0)" });
  }, 10);
  setTimeout(() => {
    officialStore.pageLoaderClassHandler("show hide");
    setTimeout(() => {
      officialStore.pageLoaderClassHandler(null);
    }, 300);
  }, 300);
});

export default router;
