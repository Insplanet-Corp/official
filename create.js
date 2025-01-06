import { promises as fs, writeFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import chalk from "chalk";

// 현재 파일의 디렉토리를 얻기 위한 준비
const __dirname = dirname(fileURLToPath(import.meta.url));

// 프로젝트 이름을 커맨드라인 인자에서 받아옵니다.
const projectName = process.argv[2];
if (!projectName) {
  console.error("Project name is required");
  process.exit(1);
} else {
  console.log(chalk.blue("insplanet"));
}

/**
 * 1. works/[projectName].vue 파일을 생성합니다.
 */

// 파일의 경로와 이름을 설정합니다.
const filePath = join(__dirname, "src/works", `${projectName}.vue`);

// 파일에 쓸 내용을 설정합니다.
const fileContent = `<template>
  <div class="work-container">
    <!-- 공통 상단 영역 시작 -->
    <WorkContentCommon />
    <!-- 공통 상단 영역 종료 -->
    <div class="works-content">
      <!--
      <img src="/works/${projectName}/image_pc_01.jpg" class="only-pc" />
      <img src="/works/${projectName}/image_mobile_01.jpg" class="only-mobile" />
      -->
    </div>
  </div>
</template>
<script setup>
import WorkContentCommon from "@/views/WorkContentCommon.vue";
</script>
<style lang="scss"></style>
`;

// 파일을 생성
writeFile(filePath, fileContent, "utf8", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(
    `${chalk.bold.underline.yellow(projectName + ".vue")} file has been created successfully!`
  );
});

/**
 * 2. works-setting.js 파일을 읽고 수정 합니다.
 */
async function addProjectToFile() {
  const filePath = join(__dirname, "src/works-setting.js");
  try {
    // 파일의 내용을 읽습니다.
    let fileContent = await fs.readFile(filePath, "utf8");

    // 새로운 프로젝트 객체를 정의합니다.
    const newProject = `{
        name: "${projectName}",
        image: "card_${projectName}.jpg",
        projectNameColor: "dark",
        projectClient: "${projectName} 클라이언트",
        projectType: "프로젝트 타입",
        gradient: "#f5f5f5",
        detail: {
            coverPc: "/works/${projectName}/cover.jpg",
            coverMobile: "/works/${projectName}/cover_m.jpg",
            title: "${projectName} title",
            subtitle:
            "${projectName} subtitle",
            overview:
            "${projectName} overview",
            launch: "-",
            client: "-",
            device: "-",
            uiux: "-",
            viewplatform: "-",
        },
    },`;

    // worksSettingList 배열 시작 부분에 새 프로젝트 객체를 추가합니다.
    fileContent = fileContent.replace(
      "const worksSettingList = [",
      `const worksSettingList = [\n  ${newProject}`
    );

    // 변경된 내용을 파일에 다시 씁니다.
    await fs.writeFile(filePath, fileContent, "utf8");
    console.log(
      `${chalk.bold.underline.yellow("works-setting.js")} file has been updated successfully!`
    );
    console.log(chalk.green("create project: ") + chalk.yellow(projectName));
  } catch (error) {
    console.error("Error modifying the file:", error);
  }
}

addProjectToFile();
