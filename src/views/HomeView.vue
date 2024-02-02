<template>
  <!-- {{ breakpointCardCount }}
  {{ currentBreakpoint }} -->
  <div
    class="work-wp"
    @wheel="onScrollHandler"
    @touchstart="onTouchstartHandler"
    @touchend="onTouchendHandler"
  >
    <!-- <div class="work-wp-gradient" v-if="false">
      <div
        v-for="(background, index) in Object.keys(workGradientType)"
        :style="{ backgroundImage: workGradientType[background] }"
        :class="{ onShow: backgroundGradientCheck(background) }"
      ></div>
    </div> -->

    <div class="work-area" :class="{ inited: isInited }">
      <div
        v-for="(group, groupIndex) in groupedItems"
        class="work-group"
        :class="[!(groupIndex % 2 === 0) ? 'odd' : 'even']"
        :key="groupIndex"
      >
        <div
          ref="workGroupInner"
          class="work-group-inner"
          :style="{
            // transform: `translateY(${isOdd(groupIndex) ? 100 : 0}px)`,
            transform: `translateY(${getScrollPosition(groupIndex)}px)`,
          }"
        >
          <button
            v-for="(work, index) in group"
            :key="index"
            class="work-card"
            :class="{
              [!(index % 2 === 0) ? 'odd' : 'even']: true,
              // onShow: isVisible[index],
              onHover: isHover(index),
              offHover: hoverIndex !== null && !isHover(index),
            }"
            @mouseenter="onMouseEnterWorkCard(work, index)"
            @mouseleave="onMouseLeaveWorkCard()"
            @click="onClickWorkCard(work, index)"
            ref="workCards"
          >
            <div
              class="work-link-content"
              :style="{
                // transition: `all ${Math.random() * 0.6 + 0.6}s cubic-bezier(.58,.45,.31,1) ${Math.random() * 0.2 + 0.2}s`,
                // backgroundBack: `${workGradientType[work.gradient]}`,
              }"
            >
              <div
                class="work-link-image"
                :style="{
                  // backgroundImage: `url(${getFullImagePath(work.image)})`,
                }"
              >
                <img
                  ref="workCardImages"
                  :src="getFullImagePath(work.image)"
                  alt=""
                />
                <!-- {{ index }} -->
                <!-- {{ work.name }} -->
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch, nextTick } from "vue";
import MobileDetect from "mobile-detect";

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
const isTablet = mobileDetect.tablet();
const isPotable = isMobile || isTablet;
import worksSetting from "@/works-setting";
import router from "@/router";
// import responseStyle from "../assets/scss/response.scss";
// import { useRoute } from "vue-router";

// const router = useRoute();
// import AOS from "aos";
// import gsap from "gsap";
// console.log(isMobile, isTablet);
const { worksSettingList } = worksSetting;
const workList = ref(worksSettingList);
const workCards = ref([]);
const isVisible = ref(workList.value.map(() => false));
const onShowCount = computed(() => isVisible.value.filter((v) => v).length);
const hoverIndex = ref(null);
const cardColumnCount = ref(0);
const isInited = ref(false);
const mobile = ref(false);

const scrollPosition = ref(0);
let scrollTimer = null;
let autoScrollInterval = null;

// workGroupInner

const workGroupInner = ref(null);
const workCardImages = ref(null);
const maxWorkGroupInnerHeight = ref(0);

// breakpoint for responsive
const breakpointCardCount = ref(1);
const breakpointSetting = {
  "extra-small": { cardCount: 1 },
  small: { cardCount: 2 },
  medium: { cardCount: 3 },
  large: { cardCount: 3 },
  xlarge: { cardCount: 4 },
  xxlarge: { cardCount: 4 },
  xxxlarge: { cardCount: 5 },
};
let breakpoints;

const currentBreakpoint = ref("");

const backgroundTypeSelect = ref(null);

const getFullImagePath = (imageName) => {
  return new URL(`../works/images/${imageName}`, import.meta.url).href;
};

// backgroundTypeSelect 값이 변경되면 실행
const onClickWorkCard = (work, index) => {
  if (work.link) {
    router.push({ path: work.link });
  }
};

const onMouseEnterWorkCard = (work, index) => {
  scrollCheckerAndStop();
};

const onMouseLeaveWorkCard = () => {
  backgroundTypeSelect.value = null;
  hoverIndex.value = null;
  scrollCheckerAndStart();
};

const backgroundGradientCheck = (gradient) => {
  return backgroundTypeSelect.value === gradient;
};

const isHover = (index) => {
  return index === hoverIndex.value;
};

const getCssVariable = (varName) => {
  return parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(`--${varName}`),
    10
  );
};

const checkBreakpoint = () => {
  const breakpointsArrays = Object.entries(breakpoints);
  const width = window.innerWidth;
  let matchedBreakpoint = breakpointsArrays[breakpointsArrays.length - 1][0];

  for (const [breakpoint, maxWidth] of breakpointsArrays) {
    if (width <= maxWidth) {
      matchedBreakpoint = breakpoint;
      break; // 첫 번째로 매치되는 브레이크포인트에서 반복 종료
    }
  }
  currentBreakpoint.value = matchedBreakpoint;
};

// watch
watch(currentBreakpoint, (newBreakpoint, oldBreakpoint) => {
  changeCardLayout(newBreakpoint);
});

// computed
const groupedItems = computed(() => {
  let groups = Array.from({ length: breakpointCardCount.value }, () => []);

  workList.value.forEach((item, index) => {
    groups[index % breakpointCardCount.value].push(item);
  });

  const maxCardCount = groups.reduce(
    (max, arr) => Math.max(max, arr.length),
    0
  );
  cardColumnCount.value = (maxCardCount / window.innerHeight).toFixed(2);
  return groups;
});

const changeCardLayout = (newBreakpoint, dbg) => {
  const breakpoint = newBreakpoint || currentBreakpoint.value;

  // if (isMobile || isTablet) {
  // }

  breakpointCardCount.value = breakpointSetting[breakpoint].cardCount;
  maxWorkGroupInnerHeight.value =
    workGroupInner.value[0].offsetHeight - window.innerHeight + 80;
};

const isOdd = (num) => {
  return num % 2 === 0;
};

const getScrollPosition = (groupIndex) => {
  return Math.max(
    Math.min(0, scrollPosition.value * (isOdd(groupIndex) ? 1.2 : 1)),
    -maxWorkGroupInnerHeight.value
  );
};

const scrollCheckerAndStop = () => {
  clearInterval(autoScrollInterval);
};
const scrollCheckerAndStart = () => {
  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }

  scrollTimer = setTimeout(() => {
    startAutoScroll();
  }, 3000);
};

const onTouchstartHandler = (e) => {
  console.log("onTouchstartHandler");
  scrollCheckerAndStop();
};
const onTouchendHandler = (e) => {
  console.log("onTouchendHandler");
  scrollCheckerAndStart();
};

const onScrollHandler = (e) => {
  const { deltaY } = e;

  scrollPosition.value = Math.max(
    Math.min(0, scrollPosition.value - deltaY / 5),
    -maxWorkGroupInnerHeight.value
  );

  clearInterval(autoScrollInterval);
  scrollCheckerAndStart();
};

const onHomeKeyAtHomeView = () => {
  let scrollTopInterval;
  scrollTopInterval = setInterval(() => {
    if (scrollPosition.value < 0) {
      scrollPosition.value -= Math.floor(scrollPosition.value / 10);
    } else {
      clearInterval(scrollTopInterval);
    }
  }, 10);
};

function startAutoScroll() {
  if (autoScrollInterval) {
    clearInterval(autoScrollInterval);
  }

  if (!isPotable) {
    autoScrollInterval = setInterval(() => {
      scrollPosition.value -= 0.05;
      // }, 1);
    }, 1000);
  } else {
    autoScrollInterval = setInterval(() => {
      console.log("autoScrollInterval");
      scrollTo({ top: scrollY + 1 });
      // }, 10);
    }, 40000);
  }
}

// const onMobileScrollHandler = () => {
//   console.log("onMobileScroll");
// };

onMounted(() => {
  window.addEventListener("keydown", onHomeKeyAtHomeView);

  setTimeout(() => {
    isInited.value = true;
  }, 100);

  const breakpointNames = Object.keys(breakpointSetting);
  breakpoints = breakpointNames.reduce((acc, name) => {
    acc[name] = getCssVariable(name);
    return acc;
  }, {});

  // if (isPotable) {
  //   window.addEventListener("scroll", onMobileScrollHandler);
  // }

  window.addEventListener("resize", checkBreakpoint);

  const imageElements = workCardImages.value;
  const promises = imageElements.map(
    (img) =>
      new Promise((resolve) => {
        img.onload = resolve;
      })
  );

  Promise.all(promises).then(() => {
    checkBreakpoint();
    nextTick(() => {
      changeCardLayout(null, 1);
      scrollCheckerAndStart();
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", checkBreakpoint);
  window.removeEventListener("keydown", onHomeKeyAtHomeView);
  clearInterval(autoScrollInterval);
  clearTimeout(scrollTimer);
  // if (isPotable) {
  //   window.removeEventListener("scroll", onMobileScrollHandler);
  // }
});
</script>

<style scoped>
.work-wp {
  &.mobile {
  }
}
</style>
