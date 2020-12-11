<template>
  <div class="page-product__content--left">
    <div class="product-detail page-product__detail">
      <!-- Render product details -->
      <product-details :data="listDetail" />
      <product-description :data="listDescription" />
      <!-- sliders -->
      <!-- shopproduct -->
    </div>
    <!-- Render product Assessment -->
    <product-assessment />
    <more-product :data="shopproductData" />
    <more-product :data="similar" />
    <more-product :data="maybeyoulike" />
  </div>
</template>

<script>
// data
import ShopProductData from "../../../data/shopproductData.json";
import SimilarData from "../../../data/similarData.json";
import ProductDetailsData from "../../../data/ProductDetailsData.json";
import MaybeYouLikeData from "../../../data/maybeyoulikeData.json";
// components
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductDescription from "./ProductDetails/ProductDescription";
import ProductAssessment from "./ProductAssessment/ProductAssessment";
import MoreProduct from "./MoreProduct/MoreProduct.vue";
export default {
  components: {
    "product-details": ProductDetails,
    "product-description": ProductDescription,
    "product-assessment": ProductAssessment,
    "more-product": MoreProduct
  },
  data() {
    return {
      listDetail: ProductDetailsData.item.productDetails,
      listDescription: ProductDetailsData.item.productDescription,
      shopproductData: ShopProductData.shopproduct,
      similar: SimilarData.similar,
      maybeyoulike: MaybeYouLikeData.maybeyoulike
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductContentLeft.scss";
</style>
