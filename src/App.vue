<template>
  <div class="router-wp">
    <ContentLayout>
      <RouterView v-slot="{ Component }">
        <div :class="transitionClass">
          <Transition
            :name="transitionName"
            @before-enter="onBeforeEnter"
            @after-enter="onAfterEnter"
          >
            <component :is="Component" class="container" />
          </Transition>
        </div>
      </RouterView>
    </ContentLayout>
    {{ officialStore.pageChangerClass }}
    <div
      class="pageChangeLoader"
      :class="`${officialStore.pageChangerClass}`"
      :style="{ background: officialStore.pageLoaderColor }"
    ></div>
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import ContentLayout from "./layouts/ContentLayout.vue";

import { useOfficialStore } from "@/stores/official";

const transitionName = ref("none");
const transitionClass = ref("transition-wp");
let isGoBack = false;

const route = useRoute();
const officialStore = useOfficialStore();

watch(
  () => route.name,
  (to, from) => {
    transitionName.value = "fade";
    if (isGoBack) {
      transitionName.value = "fade";
      isGoBack = false;
    } else {
      if (from === undefined) return;
      transitionName.value = "fade";
    }
  }
);

const onBeforeEnter = () => {
  // console.log("onBeforeEnter");
  // debugger;
  // transitionClass.value = "transition-wp onShow";
};

const onAfterEnter = () => {
  // console.log("onAfterEnter");
  // debugger;
  // transitionClass.value = "transition-wp";
};
</script>

<style lang="scss" scoped>
.pageChangeLoader {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0;
  // background: pink;
  transition: all 0.6s cubic-bezier(0.58, 0.45, 0.31, 1) 0.2s;
  &.show {
    height: 100vh;
  }
  &.hide {
    opacity: 0;
  }
}
</style>
