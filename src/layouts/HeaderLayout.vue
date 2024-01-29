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

  <el-dialog v-model="dialogVisible" width="30%" :show-close="false">
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
  </el-dialog>
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
<style lang="scss">
.el-dialog {
  width: 328px !important;
  background: transparent !important;
  header {
    display: flex;
    justify-content: flex-end;
    padding: 0 !important;
    margin-right: 0;
    position: absolute;
    right: 0;
    top: 0;
    & + div {
      padding: 0 !important;
    }
    .btn-close {
      color: #0c0c0c;
      font-weight: 700;
      font-size: 18px;
      padding: 10px;
      span {
        font-size: 16px;
        font-weight: 700;
      }
      &:hover {
        color: #0c0c0c;
        background: transparent;
      }
    }
  }
}

.about-inner {
  padding: 0;
  .ico-round {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #0c0c0c;
    position: relative;
    display: inline-block;
    &:after {
      content: "";
      display: block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .about-header {
    padding: 46px 16px 32px 24px;
    background: white;
    border-radius: 15px;
    color: #0c0c0c;
    .about-title {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 8px;
      margin-top: 16px;
      line-height: 34px;
      font-family: "Chillax-Variable";
    }
    .about-desc {
      font-family: "Pretendard";
      font-size: 14px;
      color: #999;
      margin-top: 8px;
      line-height: 22px;
      font-family: "Chillax-Variable";
      font-weight: 400;
    }
  }
  .about-content {
    padding: 0 16px 16px 24px;
    background: white;
    border-radius: 15px;
    color: #0c0c0c;
    margin-top: 10px;
    padding: 32px 24px 32px 24px;
    .about-text {
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #0c0c0c;
    }
    .btn-download {
      display: inline-flex;
      align-items: center;
      width: 100%;
      margin-top: 48px;
      height: 56px;
      font-family: "Pretendard";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #0c0c0c;
      justify-content: space-between;
      border-bottom: 1px solid #0c0c0c;
    }
    .ico-download-wrap {
      width: 40px;
      height: 32px;
      line-height: 32px;
      background: #0c0c0c;
      border-radius: 20px;
      text-align: center;
      .ico-download {
        margin-top: 3px;
        display: inline-block;
        width: 24px;
        height: 24px;
        background: url("../assets/images/ico/ico-download-white.png") no-repeat;
      }
      &:hover {
        background: #fff;
        border: 1px solid #0c0c0c;
        .ico-download {
          background: url("../assets/images/ico/ico-download.png") no-repeat;
        }
      }
    }
    .contact-list {
      margin-top: 48px;
      dt {
        font-size: 13px;
        font-weight: 700;
        line-height: 18px;
        font-family: "Chillax-Variable";
      }
      dd {
        font-size: 14px;
        font-weight: 400;
        margin-top: 8px;
        margin-bottom: 16px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .copylight {
      font-size: 13px;
      font-weight: 400;
      line-height: 18px;
      color: #0c0c0c;
      margin-top: 24px;
    }
  }
}
</style>
