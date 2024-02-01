<template>
  <div class="page-wp work">
    <div class="page-hero-title">
      <p>
        All projects
        <span>{{ workList.length }}</span>
      </p>
    </div>
    <div class="page-content" ref="pageContent">
      <ul>
        <li v-for="(work, index) in workListPerCount">
          <div class="projectName">{{ work.projectName }}</div>
          <div class="projectClient">{{ work.projectName }}</div>
          <div class="projectType">{{ work.projectType }}</div>
          <div class="projectYear">{{ work.projectYear }}</div>
          <div class="projectLink">
            <RouterLink :to="work.link" class="btn-projectLink" v-if="work.link"
              >상세보기
              <span><img src="/assets/images/project_arrow.svg" /></span
            ></RouterLink>
          </div>
        </li>
        <!-- <li><RouterLink to="/work/shinhan">shinhan</RouterLink></li>
        <li><RouterLink to="/work/kb">kb</RouterLink></li>
        <li><RouterLink to="/work/woori">woori</RouterLink></li> -->
      </ul>
    </div>
    <div class="content-footer">
      <button @click="moreProjects" class="more-projects">
        more ({{ workList.length - workListPerCount.length }})
      </button>
    </div>

    <!-- infiniti scroll 더보기 기능 추가 -->
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from "vue";
import worksSetting from "@/works-setting";
const { worksSettingList } = worksSetting;
const perCount = 10;
const nowCount = ref(perCount);
const workList = ref(worksSettingList);
const pageContent = ref(null);
// const workListPerCount = ref(worksSettingList.slice(0, 21));
const workListPerCount = computed(() =>
  workList.value.slice(0, nowCount.value)
);

const moreProjects = () => {
  nowCount.value += perCount;
  nextTick(() => {
    window.scrollTo({ top: 9999, behavior: "smooth" });
  });
};
</script>

<style lang="scss" scoped>
.page-content {
  ul {
    li {
      padding: 10px 20px;
      display: flex;
      border-bottom: 1px solid #fff;
      // & + li {
      //   border-top: 1px solid #fff;
      // }
      &:hover {
        background: #fff;
        color: #000;
        a {
          color: #000;
        }
        .btn-projectLink {
          img {
            filter: brightness(0);
          }
        }
      }
      .projectName {
        flex-basis: 28%;
      }
      .projectClient {
        flex-basis: 28%;
      }
      .projectType {
        flex-basis: 27%;
      }
      .projectYear {
        flex-basis: 10%;
      }
      .projectLink {
        flex-basis: 7%;
      }
    }
  }
}

.content-footer {
  display: flex;
  justify-content: center;
}
.more-projects {
  /* Button */
  cursor: pointer;
  margin: 20px auto;
  padding: 10px 19px;

  border: 1px solid #ffffff;
  border-radius: 32px;

  /* Desktop/Chillax/D-Label */
  font-family: "chillax-variable";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  color: #ffffff;
}

.btn-projectLink {
  display: flex;
  span {
    margin: 0 0 0 10px;
  }
  // border: 1px solid red;
  // padding-right: 30px;
}
</style>
