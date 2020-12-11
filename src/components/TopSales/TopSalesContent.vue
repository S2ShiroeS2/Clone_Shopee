<template>
  <div id="topsales-content" ref="slide">
    <div class="content__wrap">
      <div class="content__translate" ref="translate">
        <!-- items -->
        <slot name="items">
          <top-sales-item
            v-for="item in content.items"
            :key="item.id"
            :item="item"
          />
        </slot>

        <!-- seemore -->
        <slot name="seemore">
          <a :href="content.seemore.href">
            <div class="seemore__item">
              <button class="seemore__icon">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
              <span>{{ content.seemore.text }}</span>
            </div>
          </a>
        </slot>
      </div>
    </div>
    <!-- button controls -->
    <div
      class="button button-prev"
      @click="handlePrev()"
      v-show="this.currentslide > 0"
    >
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div
      class="button button-next"
      @click="handleNext()"
      v-show="this.currentslide < this.number_slide - 1"
    >
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import TopSalesItem from "./TopSalesItem.vue";
export default {
  components: {
    "top-sales-item": TopSalesItem
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 200
    },
    seemore: {
      type: Number,
      default: 1
    },
    item_per_slide: { type: Number, default: 6 },
    distance: {
      type: Number,
      default: 1
    }
  },
  data: function() {
    return {
      currentslide: 0,
      // size: 198,
      translate: 0
    };
  },
  computed: {
    final: function() {
      let temp = this.content.items.length + this.seemore - this.item_per_slide;
      return temp % this.distance;
    },
    number_slide: function() {
      let temp = this.content.items.length + this.seemore - this.item_per_slide;
      let temp2 = 0;
      if (temp % this.distance != 0) temp2 = 1;
      return Math.floor(temp / this.distance) + temp2 + 1;
    }
  },
  methods: {
    handlePrev: function() {
      if (this.currentslide > 0) {
        if (this.currentslide === 1 && this.final != 0)
          this.translate -= this.size * this.final;
        else this.translate -= this.size * this.distance;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
        this.currentslide -= 1;
      }
    },
    handleNext: function() {
      if (this.currentslide < this.number_slide - 1) {
        if (this.currentslide === this.number_slide - 2 && this.final != 0)
          this.translate += this.size * this.final;
        else this.translate += this.size * this.distance;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
        this.currentslide += 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$size: 200px;
#topsales-content {
  position: relative;
  &:hover {
    .button {
      width: 50px;
      height: 50px;
      z-index: 1;
      line-height: 50px;
      margin-top: -25px;
      &-next {
        right: 0;
      }
      &-prev {
        left: 0;
      }
    }
  }
}
.content {
  &__wrap {
    overflow: hidden;
  }
  &__translate {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    transition: all 500ms ease 0s;
  }
}
// seemore
a {
  text-decoration: none;
  .seemore {
    &__item {
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: $size;
      height: 287px;
      box-sizing: border-box;
      &:hover {
        box-shadow: 0 0.0625rem 20px 0 rgba(0, 0, 0, 0.05);
        -webkit-transform: translateY(-0.0625rem);
        transform: translateY(-0.0625rem);
        z-index: 1;
      }
      span {
        color: #ee4d2d;
        font-size: 0.875rem;
      }
    }
    &__icon {
      // padding: 6px;
      width: 34px;
      height: 34px;
      line-height: 34px;
      font-size: 1rem;
      color: #ee4d2d;
      border: 1px solid #ee4d2d;
      border-radius: 100%;
      margin-bottom: 10px;
      overflow: hidden;
      display: inline-block;
      fill: currentColor;
      position: relative;
    }
  }
}
// control button
.button {
  width: 25px;
  height: 25px;
  z-index: 1;
  line-height: 25px;
  margin-top: -12.5px;
  background-color: #fff;
  opacity: 1;
  visibility: visible;
  box-shadow: 0 1px 12px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
  position: absolute;
  top: 50%;
  // transform: translateY(-50px);
  border-radius: 50%;
  transition: all 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  justify-content: center;
  align-items: center;
  outline: 0;
  &-next {
    right: 0;
    transform: translateX(calc(50% + 0px));
  }
  &-prev {
    left: 0;
    transform: translateX(calc(-50% + 0px));
  }
}
</style>
