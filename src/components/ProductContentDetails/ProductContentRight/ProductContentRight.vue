<template>
  <div class="page-product__content--right">
    <discount-code />
    <top-selling />
  </div>
</template>

<script>
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct.vue";
import DiscountCode from "./DiscountCode/DiscountCode.vue";
export default {
  components: {
    "top-selling": TopSellingProduct,
    "discount-code": DiscountCode
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentRight.scss";
</style>
