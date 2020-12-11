<template>
  <div class="banner banner-background">
    <div class="container-banner">
      <div class="section-banner">
        <div class="section-banner--full">
          <div class="container-banner">
            <div class="section-banner__wrapper">
              <banner-slide :banners="banners" />
              <div class="home-banner__left">
                <a v-for="(banner, index) in banners" :key="banner.id" href="#">
                  <img v-if="index > 13" :src="banner.banner_image" alt="" />
                </a>
              </div>
            </div>
          </div>
          <!-- campaign -->
          <campaign-list />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerSlide from "./BannerSlide";
import CampaignList from "../campaign/CampaignList";
import bannerData from "../../data/bannerData.json";
export default {
  components: {
    "banner-slide": BannerSlide,
    "campaign-list": CampaignList
  },
  data() {
    return {
      banners: bannerData.banners
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-Banner.scss";
</style>
