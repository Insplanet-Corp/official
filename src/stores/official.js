import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOfficialStore = defineStore("official", () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  const pageTransitionClass = ref(null);
  const pageChangerClass = ref(null);
  const pageLoaderColor = ref("#000");
  const pageLoaderZIndex = ref("0");
  const pageChangerHandler = (value) => {
    pageChangerClass.value = value;
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

  return {
    pageTransitionClass,
    pageChangerClass,
    pageLoaderColor,
    pageLoaderZIndex,
    pageTransitionHandler,
    pageChangerHandler,
    pageLoaderColorHandler,
    pageLoaderZindexHandler,
  };
});
