<template>
  <header :class="{ show: showHeader }">
    <div>
      <h1 class="logo">
        <RouterLink to="/" @click="handleClick">
          <img src="../assets/images/Logo.svg" />
        </RouterLink>
      </h1>
      <nav>
        <RouterLink to="/work">Work</RouterLink>
        <button @click="clickDialogVisible(true)">About</button>
      </nav>
    </div>
  </header>

  <div class="popupAbout" :class="{ show: dialogVisible }">
    <div class="about-bg" @click="clickDialogVisible(false)"></div>
    <div class="about-inner">
      <div class="about-header">
        <i class="ico-round"></i>
        <!-- <h2 class="about-title">in's planet</h2>
        <p class="about-desc">OPEN COLLABORATION CREATIVE COMPANY</p> -->
        <button class="btn-close" @click="dialogVisible = false">Close</button>
      </div>
      <div class="about-content">
        <div class="about-text">
          인스플래닛은 조금 더 즐겁고 진화된<br />
          디지털 경험을 만들기 위한 새로움을 고민합니다. <br /><br />

          본질에 대한 이해와 넓은 시야로 <br />
          누구나 공감할 수 있는 가치를 만듭니다.
        </div>
        <a
          href="/brochure/insplanet_brief.pdf"
          class="btn-download"
          target="_blank"
        >
          회사 브로슈어 다운로드
          <span class="ico-download-wrap">
            <i class="ico-download"></i>
          </span>
        </a>
        <dl class="contact-list">
          <dt>contact</dt>
          <dd>서울특별시 중구 퇴계로27길 49, 2층 (저동2가, 센트럴에스빌딩)</dd>
          <dt>Email</dt>
          <dd>
            <a href="mailto:hello@insplanet.co.kr">hello@insplanet.co.kr</a>
          </dd>
          <dt>Tel</dt>
          <dd><a href="tel:02-2088-5084">02-2088-5084</a></dd>
        </dl>
        <p class="copylight">Ⓒ 2024. Insplanet all right reserved.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import { useOfficialStore } from "@/stores/official";

const officialStore = useOfficialStore();
const dialogVisible = ref(false);

const showHeader = ref(true);
let lastScrollPosition = 0;

const handleClick = () => {
  officialStore.updateLastActionToHome("logo");
};

const handleScroll = () => {
  const currentScrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollPosition < lastScrollPosition) {
    // 스크롤이 위로 이동할 때
    showHeader.value = true;
  } else {
    // 스크롤이 아래로 이동할 때
    if (currentScrollPosition > 100) {
      showHeader.value = false;
    }
  }

  lastScrollPosition = currentScrollPosition;
};

const clickDialogVisible = (value) => {
  dialogVisible.value = value;
  officialStore.updateAboutShow(value);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
<style lang="scss"></style>
