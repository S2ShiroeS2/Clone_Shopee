<template>
  <div class="navbar-shop__top">
    <div class="container__nav navbar-shop__range navbar-shop__display">
      <header-top-left :data="data.left" />
      <div class="navbar-shop__space"></div>
      <header-top-right :data="data.right" />
    </div>
  </div>
</template>

<script>
import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRight from "./HeaderTopRight";

export default {
  components: {
    "header-top-left": HeaderTopLeft,
    "header-top-right": HeaderTopRight
  },
  props: ["data"]
};
</script>

<style lang="scss" scoped></style>
