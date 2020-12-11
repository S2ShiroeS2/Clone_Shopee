<template>
  <div class="column shop-item-result__item">
    <div>
      <router-link tag="a" :to="`/product_details/${data.item_id}`">
        <div class="shop-item-result__item--wrapper">
          <div class="shop-item-result__item--image">
            <img
              class="vertical-image position-image"
              :src="data.image"
              alt=""
            />
            <div class="shop-item-result__item--label-liked">
              <div class="label-liked__wrap label-liked__pad">
                <span class="label-liked__text">{{ data.label }}</span>
              </div>
            </div>
            <div class="shop-item-result__item--label-discount">
              <div
                class="label-discount__wrap  label-discount__size label-discount__color"
              >
                <div class="label-discount__text">
                  <span class="percent">{{ data.discount }}</span>
                  <span class="number">giảm</span>
                </div>
              </div>
            </div>
            <div class="posi"></div>
            <div class="shop-item-result__item--image-overlay">
              <div class="custom-image-overlay">
                <img :src="data.image_overlay" alt="" />
              </div>
            </div>
          </div>
          <div class="shop-item-result__item--content">
            <div class="content__title">
              <div class="content__title--text hidden-text">
                {{ data.name }}
              </div>
              <div class="content__title--label">
                <div
                  class="content__title--label-text"
                  :style="labelStatus === true ? 'color: #44b5ff;' : ''"
                >
                  {{
                    labelStatus === true
                      ? "Mua giá bán buôn/ bán sỉ"
                      : showLabel()
                  }}
                </div>
              </div>
            </div>
            <div class="content__price">
              <div class="content__price-before-discount">
                {{ data.currency
                }}{{ currencyFormatting(data.price_before_discount) }}
              </div>
              <div
                class="content__price-after-discount"
                style="max-width: calc(100% - 22px);"
              >
                <span class="currency">{{ data.currency }}</span>
                <span class="price">{{ currencyFormatting(data.price) }}</span>
              </div>
              <div class="icon-transport">
                <i class="fa fa-truck" aria-hidden="true"></i>
              </div>
            </div>
            <div class="content__info">
              <div class="content__info--icon-favourite">
                <i class="fa fa-heart-o" aria-hidden="true"></i>
              </div>
              <div class="content__info--rating">
                <div class="content__info--rating-wrapper">
                  <div class="content__stars--wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="content__stars--wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="content__stars--wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="content__stars--wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div class="content__stars--wrapper">
                    <i class="fa fa-star" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
              <div class="content__info--sold">Đã bán {{ historicalSold }}</div>
            </div>
            <div class="content__info--address">{{ data.shop_location }}</div>
          </div>
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
  data: function() {
    return {
      labelStatus: false
    };
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
  },
  methods: {
    showLabel: function() {
      if (this.data.add_on_deal_info) {
        return this.data.add_on_deal_info.add_on_deal_label;
      }
      if (this.data.bundle_deal_info) {
        return this.data.bundle_deal_info.bundle_deal_label;
      }
      return (this.labelStatus = true);
    }
  }
};
</script>

<style lang="scss">
@import "./Styles/Style-ProductCategoryItem.scss";
</style>
