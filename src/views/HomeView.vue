<template>
  <!-- {{ breakpointCardCount }}
  {{ currentBreakpoint }} -->
  <div class="work-wp" @wheel="onScrollHandler">
    <!-- <div class="work-wp-gradient" v-if="false">
      <div
        v-for="(background, index) in Object.keys(workGradientType)"
        :style="{ backgroundImage: workGradientType[background] }"
        :class="{ onShow: backgroundGradientCheck(background) }"
      ></div>
    </div> -->

    <div class="work-area">
      <div
        v-for="(group, groupIndex) in groupedItems"
        class="work-group"
        :key="groupIndex"
      >
        <div class="work-group-inner">
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
                transition: `all ${Math.random() * 0.6 + 0.6}s cubic-bezier(.58,.45,.31,1) ${Math.random() * 0.2 + 0.2}s`,
                backgroundBack: `${workGradientType[work.gradient]}`,
              }"
            >
              <div
                class="work-link-image"
                :style="{
                  backgroundImage: `url(${getFullImagePath(work.image)})`,
                }"
              >
                <!-- {{ index }} -->
                <!-- {{ work.name }} -->
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <!-- 카드 형태의 버튼 영역 -->
    <div class="work-area" v-if="false">
      <button
        class="work-card"
        v-for="(work, index) in workList"
        :key="work.id"
        :class="{
          [!(index % 2 === 0) ? 'odd' : 'even']: true,
          onShow: isVisible[index],
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
            transition: `all ${Math.random() * 0.6 + 0.6}s cubic-bezier(.58,.45,.31,1) ${Math.random() * 0.2 + 0.2}s`,
            backgroundBack: `${workGradientType[work.gradient]}`,
          }"
        >
          <div
            class="work-link-image"
            :style="{ backgroundImage: `url(${getFullImagePath(work.image)})` }"
          >
            <!-- {{ index }} -->
            <!-- {{ work.name }} -->
          </div>
        </div>
      </button>
      <!-- <button></button> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import worksSetting from "@/works-setting";
import workGradient from "@/works-gradient";
import router from "@/router";
// import responseStyle from "../assets/scss/response.scss";
// import { useRoute } from "vue-router";

// const router = useRoute();
// import AOS from "aos";
// import gsap from "gsap";

const { worksSettingList } = worksSetting;
const { workGradientType } = workGradient;
const workList = ref(worksSettingList);
const workCards = ref([]);
const isVisible = ref(workList.value.map(() => false));
const onShowCount = computed(() => isVisible.value.filter((v) => v).length);
const hoverIndex = ref(null);

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
  // console.log(router);
  // console.log(work.link);
  if (work.link) {
    router.push({ path: work.link });
  }
};

const onMouseEnterWorkCard = (work, index) => {
  // backgroundTypeSelect.value = work.gradient;
  // hoverIndex.value = index;
};

const onMouseLeaveWorkCard = () => {
  backgroundTypeSelect.value = null;
  hoverIndex.value = null;
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
  // console.log(newBreakpoint);
  changeCardLayout(newBreakpoint);
});

// computed
const groupedItems = computed(() => {
  let groups = Array.from({ length: breakpointCardCount.value }, () => []);

  workList.value.forEach((item, index) => {
    groups[index % breakpointCardCount.value].push(item);
  });
  console.log(groups);
  return groups;
});

const changeCardLayout = (newBreakpoint) => {
  const breakpoint = newBreakpoint || currentBreakpoint.value;
  // console.log(breakpoint);
  breakpointCardCount.value = breakpointSetting[breakpoint].cardCount;
  // console.log(breakpointCardCount);
  // const { cardCount } = breakpointSetting[breakpoint];

  // workCards.value.forEach((card, index) => {
  //   card.style.display = index < cardCount ? "block" : "none";
  // });
};

const onScrollHandler = (e) => {
  console.log(e.deltaY);
};

onMounted(() => {
  // console.log(responseStyle);
  const breakpointNames = Object.keys(breakpointSetting);
  breakpoints = breakpointNames.reduce((acc, name) => {
    acc[name] = getCssVariable(name);
    return acc;
  }, {});

  window.addEventListener("resize", checkBreakpoint);

  workList.value.forEach((work, index) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.value[index] = entry.isIntersecting;
      },
      {
        threshold: 0.1,
      }
    );

    if (workCards.value[index]) {
      observer.observe(workCards.value[index]);
    }
  });
  checkBreakpoint();
  changeCardLayout();
});

onUnmounted(() => {
  window.removeEventListener("resize", checkBreakpoint);
});
</script>

<style scoped></style>
