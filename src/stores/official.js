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
    coverPc: null,
    coverMobile: null,
    title: null,
    subtitle: null,
    viewplatform: null,
    overview: null,
    launch: null,
    client: null,
    device: null,
    uiux: null,
  });

  const updateWorkPageDetail = (newValue) => {
    // console.log(newValue);
    // debugger;
    workPageDetail.value = { ...newValue };
  };

  const aboutShow = ref(false);
  const updateAboutShow = (value) => {
    aboutShow.value = value;
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
    pageTransitionHandler,
    pageLoaderClassHandler,
    pageLoaderColorHandler,
    pageLoaderZindexHandler,
    updateRoutePageStyle,
    updatePageType,
    updateWorkPageDetail,
    updateAboutShow,
  };
});
