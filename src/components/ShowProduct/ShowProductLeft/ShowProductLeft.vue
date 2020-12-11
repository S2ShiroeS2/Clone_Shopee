<template>
  <div id="showproduct__left" ref="showproduct__left">
    <image-and-slide
      :image_and_slide="left.image_and_slide"
      @number_item="CallHidden($event)"
    />
    <share-bottom :share="left.share" />
    <!-- carousel hidden -->
    <carousel-hidden
      v-if="number_item != -1"
      :image_and_slide="left.image_and_slide"
      :number_item="number_item"
      @click.self.prevent
      @Quit="CallHidden($event)"
    />
  </div>
</template>

<script>
import ImageAndSlide from "./ShowProductLeftComponents/Item1__ImageAndSlide.vue";
import Share from "./ShowProductLeftComponents/Item3__Share.vue";
import CarouselHidden from "./ShowProductLeftComponents/SubItem__CarouselHidden.vue";
export default {
  components: {
    "image-and-slide": ImageAndSlide,
    "share-bottom": Share,
    "carousel-hidden": CarouselHidden
  },
  props: {
    left: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return { number_item: -1 };
  },
  methods: {
    CallHidden: function(e) {
      this.number_item = e;
    }
  }
};
</script>

<style lang="scss" scoped>
#showproduct__left {
  // width: 450px;
  padding: 15px;
}
</style>
