<template>
  <div class="top-selling-product" v-if="items.length != 0">
    <div class="title">{{ title }}</div>
    <div>
      <top-selling-item
        v-for="item in items"
        :key="item.id"
        :item="item"
        class="top-selling-item"
      >
        <span slot="from"></span>
      </top-selling-item>
    </div>
  </div>
</template>

<script>
import TopSellingItem from "../../../TopSales/TopSalesItem.vue";
import Data from "../../../../data/topsellingproductData.json";
export default {
  components: {
    "top-selling-item": TopSellingItem
  },
  data: function() {
    return Data.topselling_product;
  }
};
</script>

<style lang="scss" scoped>
@import "./Style/Style__TopSellingProduct.scss";
</style>
