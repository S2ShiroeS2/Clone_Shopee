<template>
  <div class="flash-sale">
    <div class="flash-sale__section">
      <div class="flash-sale__section--header">
        <div class="flash-sale__section--header-title">
          <div class="flash-sale__section--countdown-timer">
            <div class="flash-sale__section--countdown-wrapper">
              <div class="flash-sale__section--countdown-image"></div>
              <div class="flash-sale__section--countdown-text">
                <div
                  class="countdown-timer"
                  :class="{ timer_complete: timer === 0 }"
                >
                  <span class="countdown-timer__number">{{
                    days | two_digits
                  }}</span>
                  <span class="countdown-timer__number">{{
                    hours | two_digits
                  }}</span>
                  <span class="countdown-timer__number">{{
                    minutes | two_digits
                  }}</span>
                  <span class="countdown-timer__number">{{
                    seconds | two_digits
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#/" class="flash-sale__section--header-link">
          <button class="button-outline">
            Xem tất cả
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </a>
      </div>
      <div class="flash-sale__section--content">
        <div class="image-carousel">
          <div class="image-carousel__item-list-wrapper">
            <ul
              class="image-carousel__item-list"
              :style="
                `transform: translate(${x}px, 0px); transition: all 500ms ease 0s;`
              "
            >
              <flash-sale-item
                v-for="item in listData"
                :key="item.item_id"
                :data="item"
              />
            </ul>
          </div>
          <div
            @click="handlePrev"
            class="carousel-arrow carousel-arrow--prev carousel-arrow--hint"
            :class="{ active: x !== 0 }"
          >
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div
            @click="handleNext"
            class="carousel-arrow carousel-arrow--next carousel-arrow--hint"
            :class="{ disable: x === -1600 }"
            style="opacity: 1"
          >
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlashSaleItem from "./FlashSaleItem";
import FlashSaleData from "../../data/FlashSaleData.json";
export default {
  components: {
    "flash-sale-item": FlashSaleItem
  },
  filters: {
    two_digits: function(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    }
  },
  data: function() {
    return {
      isHover: false,
      timer: "",
      interval: "",
      listData: FlashSaleData.items,
      x: 0
    };
  },
  computed: {
    seconds() {
      return Math.trunc(this.timer) % 60;
    },
    minutes() {
      return Math.trunc(this.timer / 60) % 60;
    },
    hours() {
      return Math.trunc(this.timer / 60 / 60) % 24;
    },
    days() {
      return Math.trunc(this.timer / 60 / 60 / 24);
    }
  },
  created() {
    this.timer = 120000;
  },
  mounted() {
    this.interval = setInterval(() => {
      this.timer--;
      this.check_timer_completed();
    }, 1000);
  },
  methods: {
    check_timer_completed() {
      if (this.timer <= 0) {
        clearInterval(this.interval);
      }
    },
    handleNext: function() {
      if (this.x > -1600) {
        if (this.x === -1000) {
          this.x = this.x - 600;
        } else {
          this.x = this.x - 1000;
        }
      }
    },
    handlePrev: function() {
      if (this.x < 0) {
        if (this.x === -600) {
          this.x = this.x + 600;
        } else {
          this.x = this.x + 1000;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-ListFlashSale.scss";
</style>
