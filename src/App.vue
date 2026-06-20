<template>
  <!-- 어드민 영역: 공개 사이트의 헤더/푸터/로더 없이 렌더링 -->
  <router-view v-if="isAdmin" />

  <template v-else>
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
</template>

<script setup>
import { watch, ref, computed, onMounted, onUnmounted } from "vue";
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

const route = useRoute();
const isAdmin = computed(() => route.path.startsWith("/admin"));
</script>

<style lang="scss" scoped></style>
