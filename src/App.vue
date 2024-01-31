<template>
  <HeaderLayout />
  <div class="router-wp">
    <ContentLayout>
      <router-view v-slot="{ Component }">
        <component
          :is="Component"
          class="page-component"
          :class="`${officialStore.pageTransitionClass}`"
          :style="officialStore.routePageStyle"
        />
      </router-view>
    </ContentLayout>
  </div>
  <div
    class="pageLoader"
    :class="`${officialStore.pageLoaderClass}`"
    :style="{
      background: officialStore.pageLoaderColor,
      zIndex: officialStore.pageLoaderZIndex,
    }"
  ></div>
</template>

<script setup>
import { watch, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import HeaderLayout from "./layouts/HeaderLayout.vue";
import ContentLayout from "./layouts/ContentLayout.vue";
// import router from "./router";

import { useOfficialStore } from "@/stores/official";

// const componentChangeClassName = ref("");
const transitionName = ref("none");
const transitionClass = ref("transition-wp");
let isGoBack = false;

const route = useRoute();
const officialStore = useOfficialStore();
const componentData = ref(null);

// watch(
//   () => route.name,
//   (to, from) => {
//     transitionName.value = "slide-fade";
//     if (isGoBack) {
//       transitionName.value = "slide-fade";
//       isGoBack = false;
//     } else {
//       if (from === undefined) return;
//       transitionName.value = "slide-fade";
//     }
//   }
// );

const onBeforeEnter = () => {
  console.log("onBeforeEnter");
  componentChangeClassName.value = "route-change-start";

  // componentData.value = route.meta.componentData;
  // console.log(router);
  // debugger;
  // debugger;
  // componentChangeClassName.value = "route-change-start";
  // setTimeout(() => {
  // componentChangeClassName.value = "route-change-start";
  // }, 100);
};

const onAfterEnter = () => {
  console.log("onAfterEnter");
  // componentChangeClassName.value = "route-change-start";
  // setTimeout(() => {
  //   componentChangeClassName.value = "route-change-end";
  // }, 400);
  // setTimeout(() => {
  // componentChangeClassName.value = "route-change-start";
  // componentChangeClassName.value = "route-change-end";
  // }, 300);

  // debugger;
  // transitionClass.value = "transition-wp";
};
</script>

<style lang="scss" scoped></style>
