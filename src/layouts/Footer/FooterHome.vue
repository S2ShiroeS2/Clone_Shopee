<template>
  <footer class="Footer">
    <div class="mycontainer">
      <footer-top />
      <footer-nav />
    </div>
    <div class="bg-footercategory">
      <footer-category />
    </div>
    <footer-bottom />
  </footer>
</template>

<script>
import FooterTop from "./FooterTop/FooterTop.vue";
import FooterNav from "./FooterNav/FooterNav.vue";
import FooterCategory from "./FooterCategory/FooterCategory.vue";
import FooterBottom from "./FooterBottom/FooterBottom.vue";
export default {
  components: {
    "footer-top": FooterTop,
    "footer-nav": FooterNav,
    "footer-category": FooterCategory,
    "footer-bottom": FooterBottom
  }
};
</script>

<style lang="scss" scoped>
@import "./Footer.scss";
</style>
