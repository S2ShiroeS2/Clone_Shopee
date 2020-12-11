<template>
  <li
    class="image-carousel__item"
    style="padding: 0px;
    width: 17.66666666666667%;"
  >
    <div class="image-carousel__item-wrapper">
      <div class="image-carousel__item-card">
        <a :href="url + data.url_card" class="image-carousel__item-card-link">
          <div
            class="flash-sale-item-card__image flash-sale-item-card__image--home-page"
          >
            <div class="wrap-position-overlay">
              <img
                class="image-overlay image-overlay--home-page"
                :src="data.image_overlay"
                alt=""
              />
            </div>
            <div class="wrap-position">
              <img class="image-product" :src="data.image" alt="" />
            </div>
          </div>
          <div class="flash-sale-item-card__lower-wrapper">
            <div class="flash-sale-item-card__lower-left">
              <div
                class="flash-sale-item-card__current-price flash-sale-item-card__current-price--home-page"
              >
                <span class="currency-unit">{{ data.currency_unit }} </span>
                <span class="item-price-number">{{
                  currencyFormatting(this.data.price)
                }}</span>
              </div>
              <div
                class="flash-sale-progress-bar__wrapper flash-sale-progress-bar__wrapper--home-page"
              >
                <div
                  class="flash-sale-progress-bar flash-sale-progress-bar--home-page"
                >
                  <div class="flash-sale-progress-bar__text">
                    Đã bán {{ data.sold }}
                  </div>
                  <div
                    class="flash-sale-progress-bar__complement-wrapper flash-sale-progress-bar__complement-wrapper--home-page"
                  >
                    <div
                      class="flash-sale-progress-bar__complement-sizer flash-sale-progress-bar__complement-sizer--home-page"
                      :style="
                        `width: ${caculateProgress(
                          this.data.stock,
                          this.data.sold
                        )}%`
                      "
                    >
                      <div
                        class="flash-sale-progress-bar__complement-color"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-discount__wrapper">
              <div
                class="card-discount card-discount__fix-width card-discount__promotion"
              >
                <div class="card-discount__promotion--label-wrapper">
                  <span class="percent">{{ data.discount }}</span>
                  <span class="card-discount__promotion--label-text">giảm</span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </li>
</template>

<script>
import helpFunction from "../../helpers/helpFunction";
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
      url: "https://shopee.vn"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-FlashSaleItem.scss";
</style>
