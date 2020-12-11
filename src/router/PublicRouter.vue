<template>
  <div>
    <header-home />
    <router-view />
    <footer-home />
  </div>
</template>

<script>
import Header from "../layouts/Header/HeaderHome";
import Footer from "../layouts/Footer/FooterHome";
export default {
  name: "PublicRouter",
  components: {
    "header-home": Header,
    "footer-home": Footer
  }
};
</script>

<style lang="scss" scoped></style>
