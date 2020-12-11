<template>
  <div class="contain-category-left">
    <list-category v-bind:ListCategory="listCategory" />
    <div class="search-fillter">
      <div class="search-fillter-header">
        <i class="fa fa-filter" aria-hidden="true"> </i>&emsp;
        <b>BỘ LỌC TÌM KIẾM</b>
      </div>

      <location-filter v-bind:ListLocation="listLocation" />
      <transport-filter v-bind:ListUnitTransport="listUnitTransport" />
      <price-filter />
      <type-shop-filter v-bind:ListTypeShop="listTypeShop" />
      <active-filter v-bind:ListActiveProduct="listActiveProduct" />
      <rate-filter />
      <promotion-filter v-bind:ListService="listService" />

      <div class="delete-filter">
        <button class="btn btn--delete-filter">XÓA TẤT CẢ</button>
      </div>
    </div>
  </div>
</template>

<script>
//data
import data from "../../../data/ProductSingleCategory.json";
//components
import ListCategory from "./ListCategory";
import LocationFilter from "./LocationFilter";
import TransportFilter from "./TransportFilter";
import PriceFilter from "./PriceFilter";
import TypeShopFilter from "./TypeShopFilter";
import ActiveFilter from "./ActiveFilter";
import RateFilter from "./RateFilter";
import PromotionFilter from "./PromotionFilter";
export default {
  components: {
    "list-category": ListCategory,
    "location-filter": LocationFilter,
    "transport-filter": TransportFilter,
    "price-filter": PriceFilter,
    "type-shop-filter": TypeShopFilter,
    "active-filter": ActiveFilter,
    "rate-filter": RateFilter,
    "promotion-filter": PromotionFilter
  },
  data() {
    RateFilter;
    return {
      listCategory: data.ListCategory,
      listLocation: data.ListLocation,
      listUnitTransport: data.ListUnitTransport,
      listTypeShop: data.ListTypeShop,
      listActiveProduct: data.ListActiveProduct,
      listService: data.ListService
    };
  },
  methods: {
    Open: function() {
      var element = document.getElementsByClassName("list-category-dropdown");
      // element.style.height="auto";
      // element.style.opacity="1";
      element.style.color = "red";
    }
  }
};
</script>
>

<style lang="scss" scoped>
@import "../Style/style-CategoryLeft.scss";
</style>
