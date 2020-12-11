<template>
  <ul class="navbar-shop__top--right">
    <li class="navbar-shop__link">
      <div class="navbar-shop__link--notification">
        <a href="#/">
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <span>{{ data.notification }}</span>
        </a>
        <div class="navbar-shop__notification">
          <div class="navbar-shop__notification--content">
            <div class="noti__wrap">
              <img src="/assets/images/icons/icon-noti.png" alt="" />
              <p>{{ data.titleNotification }}</p>
            </div>
            <div class="navbar-shop__notification--button">
              <button>{{ data.register }}</button>
              <button>{{ data.login }}</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="navbar-shop__link">
      <div class="navbar-shop__link--tappable">
        <a href="#/">
          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
          <span>Trợ giúp</span></a
        >
      </div>
    </li>
    <router-link class="navbar-shop__link--register" tag="a" to="/register"
      >Đăng Ký</router-link
    >
    <router-link class="navbar-shop__link--login" tag="a" to="/login"
      >Đăng Nhập</router-link
    >
  </ul>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped></style>
