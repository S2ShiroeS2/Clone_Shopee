<template>
  <div class="shop-endow">
    <div class="shop-endow__header">
      <div class="shop-endow__header--title">THƯƠNG HIỆU SHOPEE GỢI Ý</div>
    </div>
    <div class="shop-endow__content">
      <div class="shop-endow__content--image-list">
        <div class="shop-endow__content--image-carousel">
          <ul
            class="shop-endow__content--carousel-wrapper"
            style="width: 100%; transform: translate(0px, 0px);"
          >
            <sale-item
              v-for="item in data"
              :key="item.collection_id"
              :data="item"
            />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// component
import SaleItem from "../SaleFromRestaurant/SaleItem.vue";
// data
import BrandRecommendedData from "../../data/brandrecommendedData.json";
export default {
  components: {
    "sale-item": SaleItem
  },
  data: function() {
    return {
      data: BrandRecommendedData.listSale
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-BrandRecommended.scss";
</style>
