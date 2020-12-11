<template>
  <div>
    <div class="section_content">
      <left-carousel :carousel_left="bottom.carousel_left" class="size__left" />
      <right-carousel
        :carousel_right="bottom.carousel_right"
        class="size__right"
      />
    </div>
  </div>
</template>

<script>
import LeftCarousel from "./Item1__LeftCarousel.vue";
import RightCarousel from "./Item2__RightCarousel.vue";
export default {
  components: {
    "left-carousel": LeftCarousel,
    "right-carousel": RightCarousel
  },
  props: {
    bottom: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 452px;
.section_content {
  display: flex;
  flex-direction: row;
}
// item
.size {
  width: auto;
  &__left {
    width: 25rem;
    padding: 10px 2px 10px 10px;
  }
  &__right {
    height: inherit;
  }
}
</style>
