<template>
  <section class="container-shop">
    <banner-home />
    <div class="container-wrap">
      <div class="large-banner"></div>
      <category-item :ListProduct="listProduct" class="fix-margin" />
      <list-flash-sale />
      <shopee-mall />
      <top-search />
      <list-search-trend />
      <list-product />
    </div>
  </section>
</template>

<script>
// data
import data from "../data/ListCategoryProductData.json";
// component
import BannerHome from "../components/Banner/BannerHome";
import ListFlashSale from "../components/FlashSale/ListFlashSale";
import TopSearch from "../components/TopSearch/TopSearch.vue";
import ShopeeMall from "../components/ShopeeMall/ShopeeMall.vue";
import ListSearchTrend from "../components/SearchTrends/ListSearchTrend";
import ListProduct from "../components/Product/Home/ListProduct";
import CategoryItem from "../components/CategoryProductList/CategoryItem";
export default {
  components: {
    "banner-home": BannerHome,
    "list-flash-sale": ListFlashSale,
    "shopee-mall": ShopeeMall,
    "top-search": TopSearch,
    "list-search-trend": ListSearchTrend,
    "list-product": ListProduct,
    "category-item": CategoryItem
  },
  data: function() {
    return {
      listProduct: data.ListProduct
    };
  }
};
</script>

<style lang="scss" scoped>
.fix-margin {
  /deep/ .mycontainer {
    margin-top: 0;
    .singleProduct {
      width: 10%;
      height: 50%;
    }
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container-wrap {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.large-banner {
  background-image: url("/assets/images/banners/large-banner.jpg");
  margin-top: 20px;
  height: 110px;
  width: 1200px;
  background-size: cover;
  background-position: 50%;
  overflow: hidden;
  cursor: pointer;
}
.container {
  margin-top: 9rem !important;
}
.container .singleProduct {
  width: 10% !important;
  height: 9rem !important;
}
</style>
