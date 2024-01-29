<template>
  <div class="page-wp work">
    <div class="page-hero-title">
      <p>
        All projects
        <span>{{ workList.length }}</span>
      </p>
    </div>
    <div class="page-content">
      <ul>
        <li v-for="(work, index) in workListPerCount">
          <div class="projectName">{{ work.projectName }}</div>
          <div class="projectClient">{{ work.projectName }}</div>
          <div class="projectType">{{ work.projectType }}</div>
          <div class="projectYear">{{ work.projectYear }}</div>
          <div class="projectLink">
            <RouterLink :to="work.link" v-if="work.link">상세보기</RouterLink>
          </div>
        </li>
        <!-- <li><RouterLink to="/work/shinhan">shinhan</RouterLink></li>
        <li><RouterLink to="/work/kb">kb</RouterLink></li>
        <li><RouterLink to="/work/woori">woori</RouterLink></li> -->
      </ul>
    </div>
    <button @click="moreProjects">
      + 더보기 ({{ workList.length - workListPerCount.length }})
    </button>
    <!-- infiniti scroll 더보기 기능 추가 -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import worksSetting from "@/works-setting";
const { worksSettingList } = worksSetting;
const perCount = 10;
const nowCount = ref(perCount);
const workList = ref(worksSettingList);
// const workListPerCount = ref(worksSettingList.slice(0, 21));
const workListPerCount = computed(() =>
  workList.value.slice(0, nowCount.value)
);

const moreProjects = () => {
  console.log("moreProjects");
  nowCount.value += perCount;
};
</script>

<style lang="scss" scoped>
.page-content {
  ul {
    li {
      padding: 10px 20px;
      display: flex;
      & + li {
        border-top: 1px solid #fff;
      }
      .projectName {
        flex-basis: 20%;
      }
      .projectClient {
        flex-basis: 20%;
      }
      .projectType {
        flex-basis: 20%;
      }
      .projectYear {
        flex-basis: 20%;
      }
      .projectLink {
        flex-basis: 20%;
      }
    }
  }
}
</style>
