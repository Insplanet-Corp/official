<template>
  <div>
    <img src="../assets/images/portfolio.png" />
    <div class="works-section">
      <div class="works-inner">
        <div class="works-box">
          <h3 class="project-title">
            신한 슈퍼SOL 유지<span class="br_pc"></span>운영 2024
          </h3>
          <div class="project-text">
            신한금융그룹의 새로운 여정,<span class="br_pc"></span>
            신한 슈퍼 SoL
          </div>
          <div class="btn-wrap">
            <a href="#" class="btn-view"
              >View Platform<i class="ico-view"></i
            ></a>
          </div>
          <div class="btn-wrap">
            <a href="#" class="btn-copy">Copy URL <i class="ico-link"></i></a>
          </div>
        </div>
        <div class="works-box">
          <strong class="sub-title">Overview</strong>
          <div class="sub-text">
            신한금융그룹의 모든 금융 네트워크를 한 곳에서 해결할 수 있는 신한
            슈퍼 SoL이 출시되면서 신한플러스에서 제공하던 서비스가 신한 슈퍼
            SoL로 이전되었습니다. 인스플래닛은 신한플러스 서비스에서 안정적인
            유지운영을 진행해 왔으며, 서비스 이관 후 2024년에도 유지운영 업무를
            수행하고 있습니다.
          </div>
          <div class="sub-wrap">
            <div class="sub-box">
              <em class="sub-title">Launch</em>
              <div class="sub-text">Jan, 2024</div>
            </div>
            <div class="sub-box">
              <em class="sub-title">Client</em>
              <div clas="sub-text">신한금융그룹</div>
            </div>
            <div class="sub-box">
              <em class="sub-title">Device</em>
              <div class="sub-text">Mobile Application</div>
            </div>
          </div>
          <div class="mt-30">
            <em class="sub-title">UIUX</em>
            <div class="sub-text">
              Prototyping, Wireframing, UI Design, Maintenance
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
.works-section {
  background: #fff;
  margin-top: 32px;
  border-radius: 16px;
  padding: 176px 24px;
  color: #0c0c0c;
  .works-inner {
    display: flex;
    justify-content: center;
    max-width: 1120px;
    margin: auto;
  }
  .works-box {
    width: 50%;
  }
  .project-title {
    font-family: "Pretendard";
    font-size: 64px;
    font-style: normal;
    font-weight: 900;
    line-height: 78px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .project-text {
    margin-top: 32px;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px;
  }
  .btn-wrap {
    margin-top: 46px;
    & + .btn-wrap {
      margin-top: 16px;
    }
    .btn-view {
      display: inline-block;
      border: 1px solid #0c0c0c;
      background: #0c0c0c;
      border-radius: 32px;
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      height: 40px;
      line-height: 40px;
      width: 175px;
      font-family: "Chillax-Variable";
      padding-left: 19px;
    }
    .btn-copy {
      display: inline-block;
      border: 1px solid #0c0c0c;
      background: #fff;
      border-radius: 32px;
      font-size: 14px;
      font-weight: 700;
      color: #0c0c0c;
      height: 40px;
      line-height: 40px;
      width: 140px;
      font-family: "Chillax-Variable";
      padding-left: 19px;
    }
    .ico-view {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url("../assets/images/ico/ico-view.png") no-repeat 0 0;
      vertical-align: -8px;
      margin-left: 10px;
    }
    .ico-link {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: url("../assets/images/ico/ico-link.png") no-repeat 0 0;
      vertical-align: -6px;
      margin-left: 10px;
    }
  }
  .sub-wrap {
    display: flex;
    margin-top: 104px;
    .sub-box {
      flex: 1;
    }
  }
  .sub-title {
    display: block;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
  }
  .sub-text {
    display: block;
    margin-top: 8px;
    font-family: "Pretendard";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .mt-30 {
    margin-top: 30px;
  }
  .br_pc {
    display: block;
  }
  @media (max-width: 768px) {
    .works-box {
      width: 100%;
    }
    .br_pc {
      display: block;
    }
  }
}
</style>
