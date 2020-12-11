<template>
  <div class="navbar-shop__top--left">
    <a href="#">{{ data.chanelSale }}</a>
    <div class="navbar-shop__top--shop">
      <div class="navbar-shop__top--download">{{ data.downloadApp }}</div>
      <div class="qr__code">
        <div class="qr__code-wrap">
          <img src="/assets/images/qr-code-shoppe.png" alt="" />
        </div>
      </div>
    </div>
    <div class="navbar-shop__connect">{{ data.connect }}</div>
    <div class="navbar-shop__connect--app">
      <a href="#" class="facebook">
        <i class="fa fa-facebook-square" aria--hidden="true"></i>
      </a>
      <a href="#" class="instagram">
        <i class="fa fa-instagram" aria--hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped></style>
