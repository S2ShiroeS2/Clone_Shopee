<template>
  <div class="more_product">
    <slider-heading :top="data.header" />
    <slider-content
      :content="data.content"
      :size="size"
      :seemore="seemore"
      :distance="distance"
    >
      <slider-item
        slot="items"
        v-for="item in data.content.items"
        :key="item.id"
        :data="item"
        class="item"
      >
        <p slot="find"></p>
      </slider-item>
      <p slot="seemore"></p>
    </slider-content>
  </div>
</template>

<script>
// using topsearch header
import Heading from "../../../TopSearch/TopSearchHeader.vue";
//using content slider from topsales
import Content from "../../../TopSales/TopSalesContent.vue";
//using item from product
import Item from "../../../Product/Home/Product.vue";
export default {
  components: {
    "slider-heading": Heading,
    "slider-content": Content,
    "slider-item": Item
  },
  props: { data: { type: Object, required: true } },
  data: function() {
    return {
      size: 159.17,
      distance: 5,
      seemore: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.more_product {
  margin-top: 20px;
  padding-top: 20px;
  #topsearch__header {
    height: 34px;
    padding: 0 0 10px 0;
    border-bottom: none;
    /deep/ .title {
      text-transform: uppercase;
      font-size: 1rem;
    }
    /deep/ a {
      color: #ee4d2d;
      cursor: pointer;
      &:hover {
        color: #ee4d2d;
      }
    }
  }
}
/deep/ .item {
  width: 500px !important;
  height: fit-content;
  padding: 0 5px;
  .content__translate {
    width: 100px;
  }
  .product__wrapper {
    width: 149.17px;
    height: 245.17px;
  }
  .product__content {
    &:hover {
      border: none;
    }
  }
  .hover-content {
    overflow: auto;
  }
}
</style>
