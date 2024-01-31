<template>
  <!-- <div v-html="externalHtml" class="externalHtml"></div> -->
  <div class="work-wp" :class="{ loaded }">
    <component :is="dynamicComponent" />
    <!-- "Let's work together" 내용의 영역 -->
    <div class="work-together-area">
      <div class="work-together-content">
        <h2><img src="../assets/images/title-letsworktogether.svg" /></h2>
        <div class="work-together-more">
          <div class="project-inquery">
            <!-- mail to link -->
            <strong>프로젝트 문의</strong>
            <a>let's Talk</a>
          </div>
          <div class="broshour-download">
            <strong>회사브로셔 다운로드</strong>
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
        </div>
        <div class="more-project-slide-wp">
          <div
            class="more-project-slide-area"
            :class="{ preSlide, afterSlide }"
          >
            <div class="prev-area">
              <p @click="onLinkHandler(`${worksSettingList[slideCount].link}`)">
                <img
                  :src="`/works/images/${worksSettingList[slideCount].image}`"
                />
              </p>
              <button @click="onPrevClickHandler()">
                <span class="arrow"></span> <b>Prev project</b>
              </button>
            </div>
            <div class="next-area">
              <p
                @click="
                  onLinkHandler(`${worksSettingList[slideCountNext].link}`)
                "
              >
                <img
                  :src="`/works/images/${worksSettingList[slideCountNext].image}`"
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

const router = useRoute();
const externalHtml = ref("work");
// const dynamicComponent = ref(null);
const loaded = ref(false);
const workId = ref(router.params.workId);

const dynamicComponent = defineAsyncComponent({
  loader: () => import(`../works/${workId.value}.vue`),
  // loadingComponent: LoaderComponent, // 로딩 컴포넌트
  // errorComponent: ErrorComponent, // 에러 발생 시 보여줄 컴포넌트
  delay: 200, // 로딩 컴포넌트 표시 전 지연 시간 (ms)
  timeout: 3000, // 타임아웃 시간 (ms)
});

const preSlide = ref(false);
const afterSlide = ref(false);
const slideCount = ref(0);
const slideCountNext = computed(() => {
  if (slideCount.value + 1 >= worksSettingList.length) {
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
      slideCount.value = worksSettingList.length - 1;
    } else if (slideCount.value >= worksSettingList.length) {
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
    console.log("loaded");
    loaded.value = true;
  }, 300);
  // loaded.value = true;
});
onUnmounted(() => {
  loaded.value = false;
});
</script>

<style lang="scss" scoped>
img {
  max-width: 100%;
}
/* .externalHtml {
  min-height: 500px;
  background: rgb(255, 228, 232);
} */

.work-together-more {
  display: flex;
  > div {
    width: 300px;
    height: 224px;
    border-radius: 16px;
    border: 1px solid #000;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      margin-top: 20px;
      background: #0c0c0c;
      border-radius: 20px;
      width: 108px;
      height: 40px;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .project-inquery {
  }
}

.work-wp {
  overflow: hidden;
  .work-together-area {
    transition:
      margin ease-out 0.5s 0.6s,
      opacity ease-out 0.8s 0.6s;
    margin-top: 10vh;
    opacity: 0;
  }
  .more-project-slide-wp {
    .more-project-slide-area {
      > div {
        p {
          transition: all ease-out 0.5s;
          transform: translateX(0);
          opacity: 1;
          img {
            height: 100%;
            width: auto !important;
            max-width: inherit !important;
          }
        }
      }
      &.preSlide {
        .prev-area {
          p {
            transform: translateX(-50px);
            opacity: 0;
          }
        }
        .next-area {
          p {
            transform: translateX(50px);
            opacity: 0;
          }
        }
      }
    }
  }

  &.loaded {
    .work-together-area {
      margin-top: 0;
      opacity: 1;
    }
  }
}
</style>
