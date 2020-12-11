<template>
  <div class="navbar-shop navbar-shop__sticky">
    <header-top :data="dataTop" />
    <header-bottom :data="dataBottom" />
  </div>
</template>

<script>
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import headerData from "../../data/headerData.json";
export default {
  components: {
    "header-top": HeaderTop,
    "header-bottom": HeaderBottom
  },
  data: function() {
    return {
      dataTop: headerData.vn.top,
      dataBottom: headerData.vn.bottom
    };
  }
};
</script>

<style lang="scss">
@import "./style-Header.scss";
</style>
