<template>
  <li class="image-carousel__item">
    <div class="product-recommend-items__wrapper">
      <div class="collection-card">
        <a :href="data.url" class="collection-card__link">
          <div class="collection-card__image">
            <div class="collection-card__image-cover-background">
              <div
                class="image-main"
                :style="{ backgroundImage: 'url(' + data.image + ')' }"
              ></div>
            </div>
          </div>
          <div class="collection-card__title">{{ data.collection_title }}</div>
          <div class="collection-card__price">
            <span>Từ</span>
            ₫{{ currencyFormatting(data.price) }}
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
      image: "https://cf.shopee.vn/file/059fbc16043a974f69ad093f20a9e07d"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-SaleItem.scss";
</style>
