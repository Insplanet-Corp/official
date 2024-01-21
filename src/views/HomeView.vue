<template>
  <div class="work-wp">
    <div class="work-wp-gradient">
      <div
        v-for="(background, index) in Object.keys(workGradientType)"
        :style="{ backgroundImage: workGradientType[background] }"
        :class="{ onShow: backgroundGradientCheck(background) }"
      ></div>
    </div>
    <!-- 카드 형태의 버튼 영역 -->
    <div class="work-area">
      <button
        class="work-card"
        v-for="(work, index) in workList"
        :key="work.id"
        :class="{
          [!(index % 2 === 0) ? 'odd' : 'even']: true,
          onShow: isVisible[index],
        }"
        @mouseenter="onMouseEnterWorkCard(work)"
        @mouseleave="onMouseLeaveWorkCard()"
        ref="workCards"
      >
        <div
          class="work-link-content"
          :style="{
            transition: `all ${Math.random() * 0.6 + 0.6}s cubic-bezier(.58,.45,.31,1) ${Math.random() * 0.2 + 0.2}s`,
            background: `${workGradientType[work.gradient]}`,
          }"
        >
          <div
            class="work-link-image"
            :style="{ backgroundImage: `url(${getFullImagePath(work.image)})` }"
          >
            <!-- {{ work.name }} -->
          </div>
        </div>
      </button>
      <!-- <button></button> -->
    </div>

    <!-- "Let's work together" 내용의 영역 -->
    <div class="work-together-area">
      <div class="work-together-content">
        <h2>Let's work together</h2>
      </div>

      <!-- 내용 추가 -->
    </div>

    <!-- "More project" 슬라이드 영역 -->
    <div class="more-project-area">
      <div class="more-project-content">more-project-content</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import worksSetting from "@/works-setting";
import workGradient from "@/works-gradient";
// import AOS from "aos";
// import gsap from "gsap";

const { worksSettingList } = worksSetting;
const { workGradientType } = workGradient;
const workList = ref(worksSettingList);
const workCards = ref([]);
const isVisible = ref(workList.value.map(() => false));
const onShowCount = computed(() => isVisible.value.filter((v) => v).length);

const backgroundTypeSelect = ref(null);

const getFullImagePath = (imageName) => {
  return new URL(`../works/images/${imageName}`, import.meta.url).href;
};

// backgroundTypeSelect 값이 변경되면 실행

const onMouseEnterWorkCard = (work) => {
  backgroundTypeSelect.value = work.gradient;
};

const onMouseLeaveWorkCard = () => {
  backgroundTypeSelect.value = null;
};

const backgroundGradientCheck = (gradient) => {
  return backgroundTypeSelect.value === gradient;
};

onMounted(() => {
  // AOS.init({
  //   delay: 100, // values from 0 to 3000, with step 50ms
  //   duration: 3000, // values from 0 to 3000, with step 50ms
  //   // easing: "ease", // default easing for AOS animations
  //   once: false, // whether animation should happen only once - while scrolling down
  //   mirror: true, // whether elements should animate out while scrolling past them
  // });

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
});
</script>

<style scoped></style>
