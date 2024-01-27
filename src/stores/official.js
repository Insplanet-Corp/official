import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useOfficialStore = defineStore("official", () => {
  // const count = ref(0);
  // const doubleCount = computed(() => count.value * 2);
  // function increment() {
  //   count.value++;
  // }

  const pageChangerClass = ref(null);
  const pageLoaderColor = ref("#000");
  const pageChangerHandler = (value) => {
    pageChangerClass.value = value;
  };
  const pageLoaderColorHandler = (value) => {
    pageLoaderColor.value = value;
  };

  return {
    pageChangerClass,
    pageLoaderColor,
    pageChangerHandler,
    pageLoaderColorHandler,
  };
});
