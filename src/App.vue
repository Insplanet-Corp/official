<template>
  <HeaderLayout />
  <div class="router-wp" :class="{ mobile }">
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
import { watch, ref, onMounted, onUnmounted } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import MobileDetect from "mobile-detect";
import HeaderLayout from "./layouts/HeaderLayout.vue";
import ContentLayout from "./layouts/ContentLayout.vue";

import { useOfficialStore } from "@/stores/official";

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
const isTablet = mobileDetect.tablet();
const mobile = ref(isMobile || isTablet);
const officialStore = useOfficialStore();
</script>

<style lang="scss" scoped></style>
