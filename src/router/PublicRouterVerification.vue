<template>
  <div>
    <header-verification />
    <router-view />
    <footer-verification />
  </div>
</template>

<script>
import HeaderVerification from "../layouts/Header/HeaderVerification/HeaderVerification";
import FooterVerification from "../layouts/Footer/FooterVerification";
export default {
  name: "PublicRouter",
  components: {
    "header-verification": HeaderVerification,
    "footer-verification": FooterVerification
  }
};
</script>

<style lang="scss" scoped></style>
