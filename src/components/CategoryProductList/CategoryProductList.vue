<template>
  <div class="wrap">
    <div>
      <category-item v-bind:ListProduct="listProduct" class="category" />
      <category-pagination v-bind:ListAnphabetical="listData" />
    </div>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";
import CategoryPagination from "./CategoryPagination";
import data from "../../data/ListCategoryProductData.json";
export default {
  components: {
    "category-item": CategoryItem,
    "category-pagination": CategoryPagination,
  },
  data() {
    return {
      listProduct: data.ListProduct,
      listData: data.ListAnphabetical,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-color: #fff;
}
</style>
