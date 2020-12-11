<template>
  <div class="wrapper">
    <shoppe-mall />
    <top-sales />
    <sale-from-restaurant />
    <brand-recommended />
    <one-day-one-style />
    <div class="contain">
      <category-left />
      <div class="contain-product-right">
        <div class="shop-item-result">
          <category-right />
          <list-product-category />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//components
import TopSales from "../TopSales/TopSales.vue";
import ShoppeMall from "./ShopeeMall/ShopeeMall.vue";
import CategoryLeft from "./CategoryLeft/CategoryLeft";
import CategoryRight from "./CategoryRight";
import SaleFromRestaurant from "../SaleFromRestaurant/SaleFromRestaurant";
import ListProductCategory from "../../components/Product/Category/ListProductCategory";
import BrandRecommended from "../BrandRecommended/BrandRecommended.vue";
import OneDayOneStyle from "../OneDayOneStyle/OneDayOneStyle.vue";
export default {
  components: {
    "shoppe-mall": ShoppeMall,
    "category-left": CategoryLeft,
    "category-right": CategoryRight,
    "sale-from-restaurant": SaleFromRestaurant,
    "list-product-category": ListProductCategory,
    "top-sales": TopSales,
    "brand-recommended": BrandRecommended,
    "one-day-one-style": OneDayOneStyle
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.mycontainer {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
}
.contain {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 1.875rem;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.contain-product-right {
  width: 100%;
  height: 1000px;
}
</style>
