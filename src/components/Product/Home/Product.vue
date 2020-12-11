<template>
  <div class="product">
    <div class="product__wrapper">
      <router-link tag="a" :to="`/product_details/${data.id}`">
        <div class="product__content hover-content">
          <div class="product__content--image">
            <img :src="data.image" alt="" />
            <div class="product__content--liked">
              <div class="background-view">
                <span class="text-like">Yêu thích</span>
              </div>
            </div>
            <div
              class="product__content--card-discount"
              :class="{ active: data.discount != null }"
            >
              <div
                class="discount__badge discount__badge--fix-width discount__badge--promotion"
              >
                <div class="discount__badge--promotion__label-wrapper">
                  <span class="discount__number">{{ data.discount }}</span>
                  <span class="discount__title">Giảm</span>
                </div>
              </div>
            </div>
            <div class="overlay">
              <div class="overlay__image">
                <img :src="data.overlay" alt="" />
              </div>
            </div>
          </div>
          <div class="product__content--text">
            <div class="product__content--title">
              <div class="text-title">
                {{ data.name_product }}
              </div>
            </div>
            <div class="product__content--info">
              <div class="product__content--price">
                <span class="product__content--currency-unit">{{
                  data.currency_unit
                }}</span>
                <span class="product__content--number-price">{{
                  currencyFormatting(this.data.price)
                }}</span>
              </div>
              <div class="product__content--sold">
                Đã bán {{ historicalSold }}
              </div>
            </div>
          </div>
          <slot name="find">
            <div class="product__card-hover">Tìm sản phẩm tương tự</div>
          </slot>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import helpFunction from "../../../helpers/helpFunction";
export default {
  mixins: [helpFunction],
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    historicalSold: function() {
      let sold = this.data.historical_sold;
      let h_n;
      if (sold >= 1000) {
        h_n = sold / 1000;
        return Math.round(h_n * 100) / 100 + "K";
      }
      return sold;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-Product.scss";
</style>
