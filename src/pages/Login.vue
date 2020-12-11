<template>
  <div class="wrapper">
    <main-login />
  </div>
</template>

<script>
import MainLogin from "../components/Login/MainLogin";
export default {
  components: {
    "main-login": MainLogin
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  min-width: 75rem;
}
</style>
