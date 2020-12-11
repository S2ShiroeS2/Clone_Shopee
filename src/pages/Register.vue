<template>
  <div class="wrapper">
    <main-register />
  </div>
</template>

<script>
import MainRegister from "../components/Register/MainRegister";
export default {
  components: {
    "main-register": MainRegister
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  min-width: 75rem;
}
</style>
