<template>
  <div class="discount-code" v-if="items.length != 0">
    <div class="title">{{ title }}</div>
    <div>
      <discount-item v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import DiscountItem from "./DiscountItem.vue";
import Data from "../../../../data/discountcodeData.json";
export default {
  components: {
    "discount-item": DiscountItem
  },
  data: function() {
    return Data.discount_code;
  }
};
</script>

<style lang="scss" scoped>
@import "./Style/Style__DiscountCode.scss";
</style>
