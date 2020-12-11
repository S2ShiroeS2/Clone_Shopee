<template>
  <div class="row shop-item-result__items">
    <product-category-item
      v-for="product in listProduct"
      :key="product.item_id"
      :data="product"
    />
  </div>
</template>

<script>
import ProductCategoryItem from "./ProductCategoryItem";
import data from "../../../data/ProductCategoryData.json";
export default {
  components: {
    "product-category-item": ProductCategoryItem
  },
  data: function() {
    return {
      listProduct: data.listProduct
    };
  }
};
</script>

<style lang="scss" scoped>
.column,
.row {
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-flex: 0;
  -webkit-box-direction: normal;
}

.row {
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-box-orient: horizontal;
  -webkit-flex-direction: row;
  -moz-box-orient: horizontal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -0.3125rem;
  margin-left: -0.3125rem;
}

.shop-item-result__items {
  margin: 0.5rem 0 0;
}
</style>
