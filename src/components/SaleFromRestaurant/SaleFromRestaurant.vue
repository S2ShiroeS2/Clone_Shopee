<template>
  <div class="shop-endow">
    <div class="shop-endow__header">
      <div class="shop-endow__header--title">ƯU ĐÃI TỪ NHÀ BÁN HÀNG</div>
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
import SaleItem from "./SaleItem";
import SaleFromRestaurantData from "../../data/SaleFromRestaurantData.json";
export default {
  components: {
    "sale-item": SaleItem
  },
  data: function() {
    return {
      data: SaleFromRestaurantData.listSale
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-SaleFromRestaurant.scss";
</style>
