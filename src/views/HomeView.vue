<template>
  <div class="work-wp">
    <!-- 카드 형태의 버튼 영역 -->
    <div class="work-area">
      <button
        class="work-card"
        v-for="(button, index) in workList"
        :key="button.id"
        :class="{
          [!(index % 2 === 0) ? 'odd' : 'even']: true,
          onShow: isVisible[index],
        }"
        :style="{
          transition: `all ${Math.random() * 0.5 + 0.5}s cubic-bezier(.58,.45,.31,1) ${Math.random() * 0.25 + 0.25}s`,
        }"
        ref="workCards"
      >
        {{ button.name }}
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
// import AOS from "aos";
// import gsap from "gsap";

const workList = ref(
  new Array(20).fill({}).map((e, i) => ({ name: `name-${i}` }))
);
const workCards = ref([]);
const isVisible = ref(workList.value.map(() => false));
const onShowCount = computed(() => isVisible.value.filter((v) => v).length);

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

<style scoped>
.work-card.onShow {
  /* 화면에 보일 때 적용할 스타일 */
  transition: all 0.5s ease;
}
</style>
