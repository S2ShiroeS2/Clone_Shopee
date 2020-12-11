<template>
  <div id="showproduct">
    <show-product-left :left="left" />
    <show-product-right :right="right" />
  </div>
</template>

<script>
// data: kieu object
import ShowProductData from "../../data/showproductData.json";

// component
import ShowProductLeft from "./ShowProductLeft/ShowProductLeft.vue";
import ShowProductRight from "./ShowProductRight/ShowProductRight.vue";
export default {
  components: {
    "show-product-left": ShowProductLeft,
    "show-product-right": ShowProductRight
  },
  data: function() {
    return ShowProductData.showproduct;
  }
};
</script>

<style lang="scss" scoped>
#showproduct {
  display: flex;
  background-color: #fff;
}
</style>
