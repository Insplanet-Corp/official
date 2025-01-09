<template>
  <!-- <div v-html="externalHtml" class="externalHtml"></div> -->
  <nav
    class="works-controller"
    :class="{ goingUp: goingUp && !isElementInView }"
  >
    <button
      class="prev-button"
      @click="
        onLinkHandler(
          `${useWorkSettingList[slideCountPrev].link}`,
          slideCountPrev
        )
      "
    >
      <img src="/icons/icon_chevron_left.svg" />
      PREV
    </button>
    <RouterLink to="/" @click="handleHamburgerClick">
      <button class="hamberger-button">
        <img src="/icons/icon_hamburger.svg" aria-hidden="true" />
      </button>
    </RouterLink>
    <button
      class="next-button"
      @click="
        onLinkHandler(
          `${useWorkSettingList[slideCountNext].link}`,
          slideCountNext
        )
      "
    >
      NEXT
      <img src="/icons/icon_chevron_right.svg" />
    </button>
  </nav>
  <div class="page-wp" :class="{ loaded }">
    <component :is="dynamicComponent" />
    <!-- <component :is="dynamicComponent" :class="{ goingUp }" /> -->
    <section class="work-together-area">
      <div class="work-together-content">
        <h2>Let's work together</h2>
        <div class="work-together-more">
          <div>
            <b>프로젝트 문의</b>
            <a href="mailto:hello@insplanet.co.kr">Let's Talk</a>
          </div>
          <div>
            <b>회사 브로슈어 다운로드</b>
            <a href="/brochure/insplanet_brief.pdf" target="_blank">Download</a>
          </div>
        </div>
      </div>
      <!-- 내용 추가 -->
    </section>

    <!-- "More project" 슬라이드 영역 -->
    <section class="more-project-area" ref="moreProjects">
      <div class="more-project-content">
        <div class="more-project-title-area">
          <h2>More Projects</h2>
          <p class="title-desc">
            인스플래닛은 고객이 생각하는 그 이상을 연구하고 고민합니다. 고객의
            가치실현을 위한<br />
            신뢰할 수 있는 파트너로 함께 성장하고 있습니다.
          </p>
          <RouterLink to="/work" class="button default">
            All Projects
          </RouterLink>
        </div>
        <div class="more-project-slide-wp">
          <div
            class="more-project-slide-area"
            :class="{ preSlide, afterSlide }"
          >
            <div class="prev-area">
              <p
                @click="
                  onLinkHandler(
                    `${useWorkSettingList[slideCountPrev].link}`,
                    slideCountPrev
                  )
                "
              >
                <img
                  :src="`/worksCards/${useWorkSettingList[slideCountPrev].image}`"
                />
              </p>
              <button @click="onPrevClickHandler()">
                <span class="arrow"></span>
                <b>Prev {{ isPotable ? "" : "project" }}</b>
              </button>
            </div>
            <div class="next-area">
              <p
                @click="
                  onLinkHandler(
                    `${useWorkSettingList[slideCountNext].link}`,
                    slideCountNext
                  )
                "
              >
                <img
                  :src="`/worksCards/${useWorkSettingList[slideCountNext].image}`"
                />
              </p>
              <button @click="onNextClickHandler()">
                <b>Next {{ isPotable ? "" : "project" }}</b>
                <span class="arrow right"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  onBeforeUnmount,
} from "vue";
import { useOfficialStore } from "@/stores/official";
import { useRoute } from "vue-router";
import MobileDetect from "mobile-detect";
import worksSetting from "@/works-setting";
import route from "@/router";
const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();
const isTablet = mobileDetect.tablet();
const isPotable = isMobile || isTablet;

const officialStore = useOfficialStore();
const { worksSettingList } = worksSetting;
const useWorkSettingList = worksSettingList.filter(
  (item) => item.use && item.link && item.link !== ""
);
const router = useRoute();
const loaded = ref(false);
const workId = ref(router.params.workId);
let newWorkData = useWorkSettingList.find(
  (e) => e.link === `/work/${workId.value}`
);

const initSlideCount = useWorkSettingList.findIndex(
  (item) => item.name === newWorkData.name
);

const handleHamburgerClick = () => {
  officialStore.updateLastActionToHome("hamburger");
};

officialStore.updateWorkPageDetail(newWorkData);

let lastVisibleIndex = 0;
const refreshImageInteraction = () => {
  const images = document.querySelectorAll(
    ".works-content, .works-content-item"
  );
  const observer = new IntersectionObserver(
    (entries, index) => {
      // 화면에 보이는 요소의 인덱스를 저장하는 배열
      let visibleIndexes = [];

      // entries를 처리하여 화면에 보이는 요소의 인덱스를 찾음
      entries.forEach((entry) => {
        const index = Array.from(images).indexOf(entry.target);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          visibleIndexes.push(index);
          lastVisibleIndex = index;
        } else {
          entry.target.classList.remove("show");
        }
      });

      // 모든 요소에 대해 'prev'와 'next' 클래스 처리
      images.forEach((img, index) => {
        if (visibleIndexes.length > 0) {
          const firstVisibleIndex = visibleIndexes[0];
          const lastVisibleIndex = visibleIndexes[visibleIndexes.length - 1];

          // 현재 인덱스가 보이는 인덱스의 범위 밖에 있는 경우 클래스 조정
          if (index < firstVisibleIndex) {
            img.classList.add("prev");
            img.classList.remove("next");
          } else if (index > lastVisibleIndex) {
            img.classList.add("next");
            img.classList.remove("prev");
          } else {
            // img.classList.remove("prev", "next");
          }
        } else {
          if (window.scrollY < images[0].offsetTop) {
            images[0].classList.add("next");
          }
          if (window.scrollY > images[images.length - 1].offsetTop) {
            images[images.length - 1].classList.add("prev");
          }
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1, // 10%의 요소가 보일 때 콜백 함수 실행
    }
  );
  images.forEach((img) => {
    observer.observe(img);
  });
};

let dynamicComponent = defineAsyncComponent(() =>
  import(`../works/${workId.value}.vue`)
    .then((module) => {
      return module.default;
    })
    .finally(() => {
      setTimeout(() => {
        refreshImageInteraction();
      }, 500);
    })
);

watch(
  () => router.params.workId,
  (newWorkId, oldWorkId) => {
    newWorkData = useWorkSettingList.find(
      (e) => e.link === `/work/${newWorkId}`
    );
    const newSlideCount = useWorkSettingList.findIndex(
      (item) => item.name === newWorkData.name
    );
    slideCount.value = newSlideCount;

    dynamicComponent = defineAsyncComponent(() =>
      import(`../works/${newWorkId}.vue`)
        .then((module) => {
          return module.default;
        })
        .finally(() => {
          setTimeout(() => {
            refreshImageInteraction();
          }, 500);
        })
    );

    officialStore.updateWorkPageDetail({ ...newWorkData });
  }
);

const goingUp = ref(false);
const preSlide = ref(false);
const afterSlide = ref(false);
const slideCount = ref(initSlideCount);
const slideCountNext = computed(() => {
  if (slideCount.value + 1 >= useWorkSettingList.length) {
    return 0;
  } else {
    return slideCount.value + 1;
  }
});

const slideCountPrev = computed(() => {
  if (slideCount.value - 1 < 0) {
    return useWorkSettingList.length - 1;
  } else {
    return slideCount.value - 1;
  }
});

const onPrevClickHandler = () => {
  slideProject(-1);
};
const onNextClickHandler = () => {
  slideProject(1);
};

const onLinkHandler = (path, newIndex) => {
  route.push(path);
  slideCount.value = newIndex;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const slideProject = (count) => {
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

let lastScrollPosition = 0;
const currentScrollPosition = ref(0);

const handleScroll = () => {
  currentScrollPosition.value =
    window.pageYOffset || document.documentElement.scrollTop;

  goingUp.value = currentScrollPosition.value < lastScrollPosition;
  lastScrollPosition = currentScrollPosition.value;
};

// morePorjects element가 뷰포트에 들어왔ㅇ르 대 체크
const moreProjects = ref(null);
const isElementInView = ref(false);

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    isElementInView.value = entry.isIntersecting;
  });
};

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  if (moreProjects.value) {
    observer.observe(moreProjects.value);
  }
});

onBeforeUnmount(() => {
  if (observer && moreProjects.value) {
    observer.unobserve(moreProjects.value);
  }
});

// watchEffect(() => {
//   console.log(`isElementInView? ${isElementInView.value}`);
// });

onMounted(() => {
  setTimeout(() => {
    loaded.value = true;
  }, 300);

  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  loaded.value = false;

  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.works-controller {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 8px;
  padding: 0 12px;
  border: 1px solid rgba(35, 35, 35, 1);
  border-radius: 100px;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  position: fixed;
  left: 50%;
  bottom: 24px;
  z-index: 1000;
  transform: translate(-50%, 100px);
  transition: all ease 0.5s;
  &.goingUp {
    transform: translate(-50%, 0);
  }
  button:hover {
    opacity: 0.75;
    cursor: pointer;
  }
  .prev-button,
  .next-button {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 4px;
    gap: 8px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(35, 35, 35, 1);
    img {
      width: 16px;
    }
  }
  .hamberger-button {
    width: 48px;
    height: 48px;
  }
}
</style>
