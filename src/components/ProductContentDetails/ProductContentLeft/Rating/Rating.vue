<template>
  <div class="product-ratings-overview">
    <div class="product-ratings-overview__briefing">
      <div class="product-ratings-overview__score-wrapper">
        <span class="product-ratings-overview__rating-score">4.8</span>
        <span class="product-rating-overview__rating-score-out-of">
          trên 5
        </span>
      </div>
      <div class="shop-rating-star product-ratings-overview__stars">
        <div class="shop-rating-star__stars">
          <div class="shop-rating-star__star-wrapper">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="shop-rating-star__star-wrapper">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="shop-rating-star__star-wrapper">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="shop-rating-star__star-wrapper">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
          <div class="shop-rating-star__star-wrapper">
            <i class="fa fa-star" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="product-ratings-overview__filters">
      <div
        class="product-ratings-overview__filter product-ratings-overview__filter--active product-ratings-overview__filter--all"
      >
        tất cả
      </div>
      <div class="product-ratings-overview__filter">5 Sao (3,9k)</div>
      <div class="product-ratings-overview__filter">4 Sao (301)</div>
      <div class="product-ratings-overview__filter">3 Sao (118)</div>
      <div class="product-ratings-overview__filter">2 Sao (30)</div>
      <div class="product-ratings-overview__filter">1 Sao (37)</div>
      <div
        class="product-ratings-overview__filter product-ratings-overview__filter--with-comment"
      >
        Có Bình luận (1,8k)
      </div>
      <div
        class="product-ratings-overview__filter product-ratings-overview__filter--with-photo"
      >
        Có hình ảnh / video (1k)
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-Rating.scss";
</style>
