<template>
  <div class="wrapper_container">
    <div class="mycontainer">
      <div
        class="singleProduct"
        v-for="(item, index) in ListProduct"
        v-bind:key="index"
        v-show="index < 20"
      >
        <div class="imageSingleProduct">
          <ul>
            <li>
              <router-link class="nav-link" tag="a" to="/product_of_category">
                <img :src="item.src" /> {{ item.tittleItem }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from "../../data/ListCategoryProductData.json";
export default {
  props: {
    ListProduct: {
      type: Array,
    },
  },
  data: function () {
    return {
      listProduct: data.ListProduct,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./Style-CategoryProductList/Style-CategoryItem.scss";
</style>
