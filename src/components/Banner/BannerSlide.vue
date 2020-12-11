<template>
  <div class="home-banner">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <div v-for="(banner, index) in banners" :key="banner.id">
        <b-carousel-slide
          v-if="index < 14"
          :img-src="banner.banner_image"
        ></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array
    }
  }
};
</script>

<style lang="scss">
@import "./Styles/Style-Banner.scss";
</style>
