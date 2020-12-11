<template>
  <footer>
    <footer-category />
    <footer-bottom />
  </footer>
</template>

<script>
import FooterCategory from "./FooterCategory/FooterCategory";
import FooterBottom from "./FooterBottom/FooterBottom";
export default {
  components: {
    "footer-category": FooterCategory,
    "footer-bottom": FooterBottom
  }
};
</script>

<style lang="scss" scoped></style>
