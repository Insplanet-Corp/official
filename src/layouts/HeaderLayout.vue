<template>
  <header>
    <h1 class="logo">
      <RouterLink to="/"> insplanet </RouterLink>
    </h1>
    <nav>
      <RouterLink to="/work">Work</RouterLink>
      <button @click="dialogVisible = true">About</button>
    </nav>
  </header>

  <div class="popupAbout" :class="{ show: dialogVisible }">
    <div class="about-bg" @click="dialogVisible = false"></div>
    <div class="about-inner">
      <div class="about-header">
        <i class="ico-round"></i>
        <h2 class="about-title">in's planet</h2>
        <p class="about-desc">OPEN COLLABORATION CREATIVE COMPANY</p>
        <button class="btn-close" @click="dialogVisible = false">Close</button>
      </div>
      <div class="about-content">
        <div class="about-text">
          호기심이 가득한 오늘, <br />
          무한한 가능성의 내일.  <br /><br />

          우리는 조금 더 즐겁고<br />
          진화된 디지털 경험을<br />
          만들기 위한 새로움을 고민합니다. <br /><br />

          본질에 대한 이해와 넓은 시야로 <br />
          누구나 공감할 수 있는<br />
          가치를 만듭니다.
        </div>
        <a href="#" class="btn-download"
          >회사 브로셔 다운로드
          <span class="ico-download-wrap"><i class="ico-download"></i></span
        ></a>
        <dl class="contact-list">
          <dt>contact</dt>
          <dd>서울특별시 중구 퇴계로27길 49, 2층 (저동2가, 센트럴에스빌딩)</dd>
          <dt>Email</dt>
          <dd>hello@insplanet.co.kr</dd>
          <dt>Tel</dt>
          <dd>02-2088-5084</dd>
        </dl>
        <p class="copylight">insplanet ©2018—2024</p>
      </div>
    </div>
  </div>

  <!-- <el-dialog v-model="dialogVisible" width="30%" :show-close="false">
    <template #header="{ close }">
      <div class="my-header">
        <button @click="close" class="btn-close">Close</button>
      </div>
    </template>
    <div class="about-inner">
      <div class="about-header">
        <i class="ico-round"></i>
        <h2 class="about-title">in's planet</h2>
        <p class="about-desc">OPEN COLLABORATION CREATIVE COMPANY</p>
      </div>
      <div class="about-content">
        <div class="about-text">
          호기심이 가득한 오늘, <br />
          무한한 가능성의 내일.  <br /><br />

          우리는 조금 더 즐겁고<br />
          진화된 디지털 경험을<br />
          만들기 위한 새로움을 고민합니다. <br /><br />

          본질에 대한 이해와 넓은 시야로 <br />
          누구나 공감할 수 있는<br />
          가치를 만듭니다.
        </div>
        <a href="#" class="btn-download"
          >회사 브로셔 다운로드
          <span class="ico-download-wrap"><i class="ico-download"></i></span
        ></a>
        <dl class="contact-list">
          <dt>contact</dt>
          <dd>서울특별시 중구 퇴계로27길 49, 2층 (저동2가, 센트럴에스빌딩)</dd>
          <dt>Email</dt>
          <dd>hello@insplanet.co.kr</dd>
          <dt>Tel</dt>
          <dd>02-2088-5084</dd>
        </dl>
        <p class="copylight">insplanet ©2018—2024</p>
      </div>
    </div>
  </el-dialog> -->
</template>
<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import { ElButton, ElDialog } from "element-plus";

const dialogVisible = ref(false);

const handleClose = () => {
  dialogVisible.value = false;
  // ElMessageBox.confirm("Are you sure to close this dialog?")
  //   .then(() => {
  //     done();
  //   })
  //   .catch(() => {
  //     // catch error
  //   });
};
</script>
<style lang="scss"></style>
