<template>
  <div class="carousel_left">
    <b-carousel :interval="interval" indicators>
      <b-carousel-slide
        v-for="item in carousel_left"
        :key="item.id"
        class="slide_size"
        :img-src="item.src"
      >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    carousel_left: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return { interval: 5000 };
  }
};
</script>

<style lang="scss" scoped>
.slide_size {
  width: 390px !important;
  height: 452px !important;
}

// carousel indicators
/deep/ .carousel-indicators {
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .active {
    background-color: #ef4d2d;
  }
}
</style>
