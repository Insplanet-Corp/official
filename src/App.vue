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

import { useOfficialStore } from "@/stores/official";

// const componentChangeClassName = ref("");
const transitionName = ref("none");
const transitionClass = ref("transition-wp");
let isGoBack = false;

const route = useRoute();
const officialStore = useOfficialStore();

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

<style lang="scss" scoped>
.router-wp {
  position: relative;
  z-index: 1;
}
.pageLoader {
  z-index: 2;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  // background: pink;
  // transition:
  //   height ease 0.3s,
  //   opacity ease 0.3s 0.3s;
  // height 0.6s cubic-bezier(0.58, 0.45, 0.31, 1),
  // opacity 0.6s cubic-bezier(0.58, 0.45, 0.31, 1) 0.6s;
  &.show {
    transition: height cubic-bezier(0.47, 0, 0, 1) 0.4s;
    height: 100vh;
    opacity: 1;
  }
  &.hide {
    transition: opacity ease 0.4s;
    height: 100vh;
    opacity: 0;
  }
}

.page-component {
  &.active {
    transition: all cubic-bezier(0.47, 0, 0, 1) 0.6s;
  }
  &.show {
    opacity: 0;
    transform: translate3d(0, 101vh, 0);
  }
  &.hide {
    transition: all ease 3s;
    // transition:
    //   transform cubic-bezier(0.645, 0.045, 0.355, 1) 3s,
    //   opacity cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    opacity: 1 !important;
    transform: translate3d(0, 0, 0) !important;
  }
}
.route-change-start {
  // transition: all ease-out 0.2s 0.1s;
  // transform: translateY(100vh);
  // opacity: 0;
}
.route-change-end {
  // transition: all ease-out 0.2s 0.1s;
  // transform: translateY(0);
  // opacity: 1;
}
</style>
