<template>
  <header>
    <h1 class="logo">
      <RouterLink to="/">
        <img src="../assets/images/logo.png" alt="insplanet" />
      </RouterLink>
    </h1>
    <nav>
      <RouterLink to="/work">Work</RouterLink>
      <button @click="dialogVisible = true">About</button>
    </nav>
  </header>

  <el-dialog v-model="dialogVisible" width="30%" :before-close="handleClose">
    <!-- <img src="../assets/images/temp_about_popup.svg" /> -->
    <img src="../assets/images/temp_about_popup.png" />
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";

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
  header {
    display: none;
    & + div {
      padding: 0 !important;
    }
  }
}
</style>
