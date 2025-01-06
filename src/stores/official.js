import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOfficialStore = defineStore("official", () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  const pageTransitionClass = ref(null);
  const pageLoaderClass = ref(null);
  const pageLoaderColor = ref("#000");
  const pageLoaderZIndex = ref("0");
  const pageType = ref("");

  const pageLoaderClassHandler = (value) => {
    pageLoaderClass.value = value;
  };
  const pageLoaderColorHandler = (value) => {
    pageLoaderColor.value = value;
  };

  const pageTransitionHandler = (value) => {
    pageTransitionClass.value = value;
  };

  const pageLoaderZindexHandler = (value) => {
    pageLoaderZIndex.value = value;
  };

  const routePageStyle = ref({});
  const updateRoutePageStyle = (value) => {
    routePageStyle.value = value;
  };

  const updatePageType = (value) => {
    pageType.value = value;
  };

  const workPageDetail = ref({
    name: null,
    image: null,
    projectType: null,
    gradient: null,
    use: null,
    detail: {
      coverPc: null,
      coverMobile: null,
      title: null,
      subtitle: null,
      overview: null,
      launch: null,
      client: null,
      device: null,
      uiux: null,
      viewplatform: null,
    },
  });

  const updateWorkPageDetail = (newValue) => {
    workPageDetail.value = { ...newValue };
  };

  const aboutShow = ref(false);
  const updateAboutShow = (value) => {
    aboutShow.value = value;
  };

  const homeScrollPosition = ref(0);
  const updateHomeScrollPosition = (value) => {
    homeScrollPosition.value = value;
  };

  const pageLoaderHeight = ref(0);
  const updatePageLoaderHeight = (value) => {
    pageLoaderHeight.value = value;
  };

  return {
    pageTransitionClass,
    pageLoaderClass,
    pageLoaderColor,
    pageLoaderZIndex,
    routePageStyle,
    pageType,
    workPageDetail,
    aboutShow,
    homeScrollPosition,
    pageLoaderHeight,
    pageTransitionHandler,
    pageLoaderClassHandler,
    pageLoaderColorHandler,
    pageLoaderZindexHandler,
    updateRoutePageStyle,
    updatePageType,
    updateWorkPageDetail,
    updateAboutShow,
    updateHomeScrollPosition,
    updatePageLoaderHeight,
  };
});
