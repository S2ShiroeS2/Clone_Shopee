<template>
  <div class="list-shock-deal">
    <div class="list-shock-deal__items">
      <div class="list-shock-deal__items--title">
        <div class="list-shock-deal__items--title-text">Mua thêm deal sốc</div>
        <a href="" class="list-shock-deal__items--see-more">
          Xem thêm
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </a>
      </div>
      <div class="list-shock-deal__items--wrapper">
        <div class="list-shock-deal__items--item-parent">
          <buy-more-item />
        </div>
        <div class="icon-plus">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </div>
        <div
          v-for="i in 4"
          :key="i"
          class="list-shock-deal__items--item-parent"
          :class="{ nopad: i === 1 }"
        >
          <buy-more-item :data="dataBuyMore" />
        </div>
      </div>
    </div>
    <div class="list-shock-deal__total">
      <div class="list-shock-deal__total--wrapper">
        <div class="list-shock-deal__total--caculate">
          <div class="list-shock-deal__total--caculate-wrap">
            <div class="list-shock-deal__total--title">
              <div class="list-shock-deal__total--text">Tổng cộng:</div>
              <div class="list-shock-deal__total--save">Tiết kiệm</div>
            </div>
            <div class="list-shock-deal__total--number">
              <div class="total-number">
                <div class="total-number__before">₫1.298.000</div>
                <div class="total-number__after">₫682.933</div>
              </div>
              <div class="total-save">₫615.067</div>
            </div>
          </div>
        </div>
        <div class="buy-more-deal">
          <button class="button button__color button__size">
            <div class="button__wrap">
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
              <div class="button__text">Bấm để mua deal sốc</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyMoreItem from "./BuyMoreItem";
import BuyItemData from "../../data/BuyItemData.json";
export default {
  components: {
    "buy-more-item": BuyMoreItem
  },
  data() {
    return {
      dataBuyMore: BuyItemData
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ListBuyMore.scss";
</style>
