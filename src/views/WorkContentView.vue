<template>
  <!-- <div v-html="externalHtml" class="externalHtml"></div> -->
  <div class="page-wp" :class="{ loaded }">
    <component :is="dynamicComponent" :workData="workData" />
    <!-- "Let's work together" 내용의 영역 -->
    <div class="work-together-area">
      <div class="work-together-content">
        <h2>Let's work together</h2>
        <div class="work-together-more">
          <div class="project-inquery">
            <!-- mail to link -->
            <strong>프로젝트 문의</strong>
            <a>Let's Talk</a>
          </div>
          <div class="broshour-download">
            <strong>회사 브로슈어 다운로드</strong>
            <a href="">Download</a>
          </div>
        </div>
      </div>

      <!-- 내용 추가 -->
    </div>

    <!-- "More project" 슬라이드 영역 -->
    <div class="more-project-area">
      <div class="more-project-content">
        <div class="more-project-title-area">
          <h2>More Projects</h2>
          <p class="title-desc">
            인스플래닛은 고객이 생각하는 그 이상을 연구하고 고민합니다. 고객의
            가치실현을 위한<br />
            신뢰할 수 있는 파트너로 함께 성장하고 있습니다.
          </p>
          <RouterLink to="/" class="button default"> All Projects </RouterLink>
        </div>
        <div class="more-project-slide-wp">
          <div
            class="more-project-slide-area"
            :class="{ preSlide, afterSlide }"
          >
            <div class="prev-area">
              <p
                @click="onLinkHandler(`${useWorkSettingList[slideCount].link}`)"
              >
                <img
                  :src="`/worksCards/${useWorkSettingList[slideCount].image}`"
                />
              </p>
              <button @click="onPrevClickHandler()">
                <span class="arrow"></span> <b>Prev project</b>
              </button>
            </div>
            <div class="next-area">
              <p
                @click="
                  onLinkHandler(`${useWorkSettingList[slideCountNext].link}`)
                "
              >
                <img
                  :src="`/worksCards/${useWorkSettingList[slideCountNext].image}`"
                />
              </p>
              <button @click="onNextClickHandler()">
                <b>Next project</b> <span class="arrow right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  watch,
  watchEffect,
  computed,
  defineAsyncComponent,
} from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import worksSetting from "@/works-setting";
import route from "@/router";

const { worksSettingList } = worksSetting;
const useWorkSettingList = worksSettingList.filter(
  (e) => e.use && e.link && e.link !== ""
);
// console.log(useWorkSettingList);

const router = useRoute();
const externalHtml = ref("work");
// const dynamicComponent = ref(null);
const loaded = ref(false);
const workId = ref(router.params.workId);
const workData = useWorkSettingList.find(
  (e) => e.link === `/work/${workId.value}`
);

const dynamicComponent = defineAsyncComponent(() =>
  import(`../works/${workId.value}.vue`).then((module) => {
    // console.log(router.params.workId);
    return module.default;
  })
);

const preSlide = ref(false);
const afterSlide = ref(false);
const slideCount = ref(0);
const slideCountNext = computed(() => {
  if (slideCount.value + 1 >= useWorkSettingList.length) {
    return 0;
  } else {
    return slideCount.value + 1;
  }
});
const onPrevClickHandler = () => {
  console.log("onPrevClickHandler");
  slideProject(-1);
};
const onNextClickHandler = () => {
  console.log("onNextClickHandler");
  slideProject(1);
};

const onLinkHandler = (path) => {
  route.push(path);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const slideProject = (count) => {
  // console.log("slideProject");
  preSlide.value = true;
  setTimeout(() => {
    slideCount.value += count;
    if (slideCount.value < 0) {
      slideCount.value = useWorkSettingList.length - 1;
    } else if (slideCount.value >= useWorkSettingList.length) {
      slideCount.value = 0;
    }
    preSlide.value = false;
  }, 500);
};

// const getFullImagePath = (imageName) => {
//   console.log(imageName);
//   console.log(import.meta.url);
//   return new URL(`../works/images/${imageName}`, import.meta.url).href;
// };

onMounted(() => {
  setTimeout(() => {
    // console.log("loaded");
    loaded.value = true;
  }, 300);
  // loaded.value = true;
});
onUnmounted(() => {
  loaded.value = false;
});
</script>

<style lang="scss" scoped></style>
