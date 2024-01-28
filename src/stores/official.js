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

  return {
    pageTransitionClass,
    pageLoaderClass,
    pageLoaderColor,
    pageLoaderZIndex,
    routePageStyle,
    pageTransitionHandler,
    pageLoaderClassHandler,
    pageLoaderColorHandler,
    pageLoaderZindexHandler,
    updateRoutePageStyle,
  };
});
