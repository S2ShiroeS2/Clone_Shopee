<template>
  <div class="card-item">
    <div class="card-item__wrapper">
      <div class="card-item__image">
        <div class="card-item__image--wrapper">
          <a href="">
            <div class="image-wrapper">
              <div
                class="image"
                :style="{ backgroundImage: 'url(' + image + ')' }"
                style="backgroundSize: cover; backgroundRepeat: no-repeat;"
              ></div>
            </div>
            <div class="label-discount label-color">-41%</div>
          </a>
        </div>
      </div>
      <div class="card-item__title">
        <a href="" class="card-item__title--link">
          <div class="card-item__title--wrapper">
            <span class="label-deals">Deal Sốc</span>
            Áo Khoác Nam Lót Lông Hàng Xuất Dày Đẹp Nhiều Màu AK102
          </div>
        </a>
      </div>
      <div class="card-item__item-code">
        <label for="" class="card-item__checkbox card-item__checkbox--checked">
          <input type="checkbox" class="card-item__input" />
          <div class="card-item__checkbox--box"></div>
        </label>
        <div @click="isShowForm = !isShowForm" class="card-item__code-desc">
          <div class="card-item__code-desc--wrapper">
            <div class="card-item__popover--target">
              <div class="card-item__popover--text">
                <div class="content">AK102 NÂU,M (45 - 54kg)</div>
                <div class="icon-caret" :class="{ rotate: isShowForm }"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="card-item-popover card-item-popover--show card-item-popover--border"
          style="top: -205px; left: -8px; transform-origin: 67px bottom;"
          :class="{ show: isShowForm === true }"
        >
          <div
            class="arrow"
            style="bottom: -19px; left: 67px; transform: translate(-4px, -100%); border-top: 10px solid rgba(0, 0, 0, 0.09); border-left: 10px solid transparent; border-right: 10px solid transparent;"
          >
            <div
              class="arrow-inner"
              style="border-top: 8px solid white; border-left: 8px solid transparent; border-right: 8px solid transparent; top: -10px;"
            ></div>
          </div>
          <div v-if="isShowForm === true" class="form-classification">
            <div class="form-classification__title">Phân loại hàng</div>
            <div class="form-classification__selection">
              <div
                v-for="(item, index) in listData"
                :key="index"
                class="form-classification__selection-item"
              >
                <div class="selection-item__wrapper">
                  <div class="selection-item__title">{{ item.name }}</div>
                  <div class="selection-item__items">
                    <button-selected
                      v-for="(itemData, index) in item.options"
                      :key="index"
                      :data="itemData"
                      :isShow="isShow"
                    />
                  </div>
                </div>
              </div>
              <div class="form-classification__selection--number">
                <div class="selection-item__wrapper">
                  <div class="selection-item__title">Số lượng</div>
                  <div class="selection-item__quantity">
                    <button @click="handleMinus()" class="icon">
                      <i class="fa fa-minus" aria-hidden="true"></i>
                    </button>
                    <input
                      class="selection-item__input-quantity icon"
                      type="text"
                      :value="value"
                    />
                    <button @click="handlePlus()" class="icon">
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="form-classification__button">
              <button
                @click="isShowForm = false"
                class="form-classification__button--cancel"
              >
                Trở Lại</button
              ><button
                class="form-classification__button--confirm form-classification__button--color form-classification__button--size"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card-item__price">
        <div class="card-item__price-before-discount">₫360.000</div>
        <div class="card-item__price--after-discount">₫212.500</div>
      </div>
    </div>
  </div>
</template>

<script>
import BuyItemData from "../../data/BuyItemData.json";
import Button from "./Button";
export default {
  components: {
    "button-selected": Button
  },
  data: function() {
    return {
      listData: BuyItemData.tier_variations,
      image: "https://cf.shopee.vn/file/1976c288f9236defb28f7268d6a5615f_tn",
      isShowForm: false,
      value: 1,
      isShow: ""
    };
  },
  methods: {
    handlePlus() {
      this.value += 1;
    },
    handleMinus() {
      if (this.value > 1) {
        this.value -= 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-BuyMoreItem.scss";
</style>
