<template>
  <div class="product-assessment">
    <div class="product-ratings">
      <div class="product-ratings__header">ĐÁNH GIÁ SẢN PHẨM</div>
      <rating />
      <list-rating />
    </div>
  </div>
</template>

<script>
import Rating from "../Rating/Rating";
import ListRating from "../ListRating/ListRating";
export default {
  components: {
    rating: Rating,
    "list-rating": ListRating
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductAssessment.scss";
</style>
