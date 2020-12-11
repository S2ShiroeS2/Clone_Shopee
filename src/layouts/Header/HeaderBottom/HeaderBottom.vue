<template>
  <div class="navbar-shop__bottom">
    <div class="container__nav navbar-shop__range">
      <div class="navbar-shop__search--wrapper">
        <router-link class="navbar-shop__logo" tag="a" to="/">
          <i class="fa fa-shopping-bag" aria-hidden="true"></i>
          <span>Shopee</span>
        </router-link>
        <header-search :data="data" />
        <div class="navbar-shop__cart">
          <div class="navbar-shop__cart--position">
            <div class="navbar-shop__cart--icon">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </div>
          </div>
          <div class="navbar-shop__cart--position isdisplay">
            <div class="navbar-shop__cart--icon">
              <i class="fa fa-user-o" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSearch from "./HeaderSearch";
export default {
  components: {
    "header-search": HeaderSearch
  },
  props: ["data"],
  methods: {
    handleRouter: function() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
