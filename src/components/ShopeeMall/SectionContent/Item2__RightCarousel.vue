<template>
  <content-container
    :content="carousel_right"
    :size="size"
    :item_per_slide="item_per_slide"
    :seemore="seemore"
    class="shopeemall__carousel-right"
  >
    <item-of-slider
      v-for="item in carousel_right.items"
      :key="item.id"
      :list_content="item.data"
      class="slide"
      slot="items"
    />
    <div slot="seemore"></div>
  </content-container>
</template>

<script>
import Container from "../../TopSales/TopSalesContent.vue";
import ItemOfSlider from "./ItemSub__ItemOfSlider.vue";
export default {
  components: {
    "item-of-slider": ItemOfSlider,
    "content-container": Container
  },
  props: {
    carousel_right: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      size: 800,
      item_per_slide: 1,
      seemore: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.slide {
  height: 474px;
}
.shopeemall__carousel-right {
  width: 800px;
  position: relative;
}
</style>
