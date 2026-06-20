import worksSetting from "@/works-setting";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useOfficialStore } from "@/stores/official.js";
import { useAdminStore } from "@/stores/admin.js";

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
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/admin/login",
      name: "adminLogin",
      component: () => import("../views/admin/AdminLogin.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/admin/AdminLayout.vue"),
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "adminContacts",
          component: () => import("../views/admin/AdminContacts.vue"),
        },
        {
          path: "brochure",
          name: "adminBrochure",
          component: () => import("../views/admin/AdminBrochure.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

// 어드민 라우트는 공개 사이트의 페이지 전환 애니메이션을 타지 않고
// 인증만 확인한다.
router.beforeEach(async (to) => {
  if (!to.path.startsWith("/admin")) return true;

  const adminStore = useAdminStore();
  await adminStore.init();

  if (to.name === "adminLogin") {
    return adminStore.isLoggedIn() ? { name: "adminContacts" } : true;
  }
  if (to.meta.requiresAuth && !adminStore.isLoggedIn()) {
    return { name: "adminLogin", query: { redirect: to.fullPath } };
  }
  return true;
});

router.beforeEach((to, from, next) => {
  if (to.path.startsWith("/admin")) return next();
  const { params } = to;
  officialStore = officialStore || useOfficialStore();

  // init all
  officialStore.pageTransitionHandler("");
  officialStore.pageLoaderClassHandler("");

  // loading 처리
  officialStore.pageLoaderColorHandler("#000");
  officialStore.pageLoaderZindexHandler("2");
  // officialStore.updateLoadingType(params.workId);

  // scroll top
  window.scrollTo({ top: 0, behavior: "smooth" });

  // clear intervals
  if (window.autoScrollInterval) clearInterval(window.autoScrollInterval);
  if (window.scrollTimer) clearTimeout(window.scrollTimer);

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
  if (to.path.startsWith("/admin")) return;

  const { params } = to;
  officialStore = officialStore || useOfficialStore();

  const latoutType = to.name === "home" ? "fixed-layout" : "relative-layout";
  officialStore.updatePageType(latoutType);

  window.scrollTo({ top: 0 });

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

        if (params.workId) {
          setTimeout(() => {
            officialStore.pageLoaderClassHandler(null);
          }, 500);
        }
      },
      params.workId ? 600 : 300
    );
  }, 400);
});

export default router;
