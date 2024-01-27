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
  if (params.workId) {
    const toWorkData = worksSettingList.find(
      (e) => e.link.split("work/")[1] === params.workId
    );
    // console.log(toWorkData);
    officialStore = officialStore || useOfficialStore();
    officialStore.pageChangerHandler("show");
    officialStore.pageLoaderColorHandler(toWorkData.gradient);
    setTimeout(() => {
      next();
    }, 1000);
  } else {
    next(); // next()를 호출해야 다음 라우트로 이동합니다.
  }
});

router.afterEach((to, from) => {
  // console.log(from);
  // debugger;

  // const officialStore = useOfficialStore();
  // officialStore.pageLoaderColorHandler("green");
  officialStore = officialStore || useOfficialStore();
  setTimeout(() => {
    officialStore.pageChangerHandler("show hide");
    setTimeout(() => {
      officialStore.pageChangerHandler("hide");
    }, 600);
  }, 600);

  // officialStore.pageChangerHandler(false);
  // 화면 전환 후에 호출할 코드
});

export default router;
