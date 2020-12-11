<template>
  <div class="wrapper">
    <show-product />
    <list-buy-more />
    <div>
      <shop-info />
      <div class="page-product__content">
        <product-content-left />
        <product-content-right />
      </div>
    </div>
  </div>
</template>

<script>
import BuyMore from "../components/BuyMore/ListBuyMore";
import ShowProduct from "../components/ShowProduct/ShowProduct.vue";
import ShopInfo from "../components/ShopInfo/ShopInfo";
import ProductContentLeft from "../components/ProductContentDetails/ProductContentLeft/ProductContentLeft";
import ProductContentRight from "../components/ProductContentDetails/ProductContentRight/ProductContentRight";
export default {
  components: {
    "show-product": ShowProduct,
    "list-buy-more": BuyMore,
    "shop-info": ShopInfo,
    "product-content-left": ProductContentLeft,
    "product-content-right": ProductContentRight
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  margin: auto;
  margin-top: 140px;
  margin-bottom: 15px;
}

.page-product__content {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
</style>
