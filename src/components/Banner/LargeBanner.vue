<template>
  <div class="slide-category-banner">
    <div class="container-fluid">
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <div v-for="banner in largeBanner" :key="banner.id">
          <b-carousel-slide :img-src="banner.banner"></b-carousel-slide>
        </div>
      </b-carousel>
    </div>
  </div>
</template>

<script>
import bannerData from "../../data/bannerData.json";
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      largeBanner: bannerData.largeBanner
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style lang="scss">
@import "./Styles/Style-LargeBanner.scss";
</style>
