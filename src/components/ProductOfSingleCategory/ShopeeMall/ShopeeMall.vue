<template>
  <div class="shoppe-mall">
    <div class="header">
      <a class="header-left" :href="Data.heading.title_href">{{
        Data.heading.title
      }}</a>
      <a :href="Data.heading.seemore_href">
        <div class="header-right">
          {{ Data.heading.seemore }}
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </div>
      </a>
    </div>
    <slider-content
      class="shoppeMallContent"
      :content="Data.content"
      :seemore="seemore"
    >
      <two-images-item
        v-for="item in Data.content.items"
        :key="item.id"
        :item="item"
        slot="items"
      />
      <div slot="seemore"></div>
    </slider-content>
  </div>
</template>

<script>
// data
import ShoppeMallData from "@/data/ShopeemallCategoryData.json";
// component
import SliderContent from "../../TopSales/TopSalesContent.vue";
import TwoImageItem from "./ShopeeMall__Item.vue";
export default {
  components: {
    "two-images-item": TwoImageItem,
    "slider-content": SliderContent
  },
  data: function() {
    return { Data: ShoppeMallData.ShoppeMall, seemore: 0 };
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/style-ShoppeMall.scss";
a:hover {
  text-decoration: none;
}
</style>
