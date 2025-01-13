<template>
  <div class="work-container t4k">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <img src="/works/t4k/image_pc_01.jpg" />
    </div>
    <div class="works-content section02">
      <img src="/works/t4k/image_pc_02.jpg" />
    </div>
    <div class="works-content section03">
      <img src="/works/t4k/image_pc_03.png" />
    </div>
    <div class="works-content section04">
      <div class="only-pc">
        <img src="/works/t4k/image_pc_04.png" />
        <div class="imagebox-container">
          <div class="imagebox">
            <img src="/works/t4k/image_pc_04_02.png" />
          </div>
        </div>
      </div>
      <div class="only-mobile">
        <img src="/works/t4k/image_mobile_04.png" />
        <div class="imagebox-container">
          <div class="imagebox">
            <img src="/works/t4k/image_pc_04_02.png" />
          </div>
        </div>
      </div>
    </div>
    <div class="works-content section05">
      <img src="/works/t4k/image_pc_05.png" />
    </div>
    <div class="works-content section06">
      <img src="/works/t4k/image_pc_06.png" class="only-pc" />
      <img src="/works/t4k/image_mobile_06.png" class="only-mobile" />
    </div>
    <div class="works-content section07">
      <div class="imagebox">
        <img src="/works/t4k/image_pc_07.png" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, defineProps } from "vue";
import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss">
@import "../assets/scss/response.scss";
img {
  display: block;
}
.t4k {
  .section02 {
    padding: 160px;
    background-color: rgba(29, 31, 35, 1);
    img {
      width: 100%;
      max-width: 1230px;
      margin: 0 auto;
    }
  }
  .section03 {
    background-color: transparent;
  }
  .section04 {
    padding: 160px;
    background-color: rgba(25, 37, 76, 1);
    overflow: hidden;
    div {
      img {
        width: 100%;
        max-width: 1230px;
        margin: 0 auto;
        border-radius: 0;
      }
      .imagebox-container {
        height: 752px;
        margin-top: 240px;
        position: relative;
        .imagebox {
          width: 1866px;
          height: 752px;
          overflow: hidden;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
          img {
            max-width: 100%;
          }
        }
      }
    }
  }
  .section06 {
    padding: 160px;
    background-color: rgba(25, 37, 76, 1);
    img {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;
      border-radius: 0;
    }
  }
  .section07 {
    height: 652px;
    background-color: #fff;
    overflow: hidden;
    position: relative;
    .imagebox {
      width: 2136px;
      height: 332px;
      overflow: hidden;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@include for-size-max("small") {
  .t4k {
    .section02 {
      padding: 40px 20px;
    }
    .section04 {
      padding: 40px 20px;
      div {
        .imagebox-container {
          margin-top: 48px;
          .imagebox {
            // width: 500px;
          }
        }
      }
    }
    .section06 {
      padding: 40px 20px;
    }
    .section07 {
      height: 150px;
      .imagebox {
        width: 446px;
        height: auto;
      }
    }
  }
}
</style>
