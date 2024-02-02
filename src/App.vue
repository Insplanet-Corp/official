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
// import router from "./router";

import { useOfficialStore } from "@/stores/official";
import { useRippleStore } from "@/stores/ripple";

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
const isTablet = mobileDetect.tablet();
const mobile = ref(isMobile || isTablet);
const rippleStore = useRippleStore();
// const { createRipple } = useRippleEffect();

// const componentChangeClassName = ref("");
const transitionName = ref("none");
const transitionClass = ref("transition-wp");
let isGoBack = false;

const route = useRoute();
const officialStore = useOfficialStore();
const componentData = ref(null);

const createRipple = (event) => {
  console.log(event);
  // const container = event.currentTarget; // currentTarget을 사용하여 정확한 요소를 참조
  const container = event.target; // currentTarget을 사용하여 정확한 요소를 참조
  const circle = document.createElement("span");
  const diameter = Math.max(container.clientWidth, container.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - container.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - container.offsetTop - radius}px`;
  circle.classList.add("ripple");

  container.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 600); // 애니메이션 지속 시간과 일치
};
</script>

<style lang="scss" scoped>
.ripple {
  position: fixed;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0);
  animation: ripple-animation 600ms linear;
  pointer-events: none;
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
