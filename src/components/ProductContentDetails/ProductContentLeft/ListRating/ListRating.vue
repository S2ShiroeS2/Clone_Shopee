<template>
  <div class="product-ratings__list">
    <div class="shop-product-comment-list">
      <!-- Convert to RatingItem component -->
      <rating-item v-for="i in 6" :key="i" />
      <div class="shop-page-controller product-ratings__page-controller">
        <button class="shop-icon-button shop-icon-button--left">
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button class="shop-button-solid shop-button-solid--primary">1</button>
        <button class="shop-button-no-outline">2</button>
        <button class="shop-button-no-outline">3</button>
        <button class="shop-button-no-outline">4</button>
        <button class="shop-button-no-outline">5</button>
        <button
          class="shop-button-no-outline shop-button-no-outline--non-click"
        >
          ...
        </button>
        <button class="shop-icon-button shop-icon-button--right">
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import RatingItem from "../RatingItem/RatingItem";
export default {
  components: {
    "rating-item": RatingItem
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ListRating.scss";
</style>
