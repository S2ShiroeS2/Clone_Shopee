<template>
  <div id="topsearch__content">
    <content-container
      :content="content"
      :size="size"
      :distance="distance"
      :item_per_slide="item_per_slide"
      :seemore="seemore"
      class="shopeemall__carousel-right"
    >
      <item-of-slider
        v-for="item in content.items"
        :key="item.id"
        :item="item"
        class="slide"
        slot="items"
      />
      <div slot="seemore"></div>
    </content-container>
  </div>
</template>

<script>
import Container from "../TopSales/TopSalesContent.vue";
import ItemOfSlider from "./ItemSub__TopSearchContentItem.vue";
export default {
  components: {
    "item-of-slider": ItemOfSlider,
    "content-container": Container
  },
  props: { content: { type: Object, required: true } },
  data: function() {
    return { size: 400, distance: 3, item_per_slide: 3, seemore: 0 };
  }
};
</script>

<style lang="scss" scoped>
.slide {
  height: 324px;
}
</style>
