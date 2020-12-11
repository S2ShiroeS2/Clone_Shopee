<template>
  <nav class="header-verification">
    <div class="container-fluid">
      <div class="header-verification__left">
        <router-link to="/" tag="a" class="logo">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <span>Shopee</span>
        </router-link>
        <div class="header-verification__left--title">
          {{ $route.fullPath === "/login" ? "Đăng nhập" : "Đăng ký" }}
        </div>
      </div>
      <a href="" class="header-verification__left--help">Cần trợ giúp?</a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-HeaderVerification.scss";
</style>
