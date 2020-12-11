<template>
  <div id="slider-content">
    <div class="content__wrap">
      <div class="content__translate" ref="translate">
        <!-- items -->
        <div
          class="slider__item pointer"
          v-for="(item, index) in image_and_slide.images"
          :key="item.id"
        >
          <div
            :style="'backgroundImage: url(' + item + ')'"
            class="bg-image img"
            @mouseover.self="changeImage(item, index)"
            @click.self="callHidden(index)"
          >
            <div
              v-if="index == 0"
              :style="'backgroundImage: url(' + image_overlay + ')'"
              class="bg-image overlay"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <!-- button controls -->
    <div class="button button-prev" @click.stop="handlePrev()" ref="prev">
      <i class="fa fa-chevron-left" aria-hidden="true"></i>
    </div>
    <div class="button button-next" @click.stop="handleNext()" ref="next">
      <i class="fa fa-chevron-right" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image_and_slide: {
      type: Object,
      required: true
    },
    image_overlay: {
      type: String,
      required: false,
      default: "https://cf.shopee.vn/file/07417985b2b0867e29419f5a5dc62dc6"
    }
  },
  data: function() {
    return {
      currentslide: 0,
      size: 92,
      translate: 0,
      item_per_slide: 5,
      current_img: ""
    };
  },
  computed: {
    number_slide: function() {
      return this.image_and_slide.images.length + 1 - this.item_per_slide;
    }
  },
  methods: {
    callHidden: function(index) {
      this.$emit("callhidden", index);
    },
    changeImage: function(item, index) {
      this.current_img = item;
      this.$emit("imgwaschanged", this.current_img);
      if (index == 0) this.$emit("overlay", 1);
      else this.$emit("overlay", 0);
    },
    handlePrev: function() {
      if (this.currentslide > 0) {
        this.currentslide -= 1;
        this.translate -= this.size;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
      }
    },
    handleNext: function() {
      if (this.currentslide < this.number_slide - 1) {
        this.currentslide += 1;
        this.translate += this.size;
        this.$refs.translate.style.transform =
          "translateX(-" + this.translate + "px)";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";
// control button
.button {
  position: absolute;
  width: 1.25rem;
  height: 2.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  &-prev {
    left: 0px;
  }
  &-next {
    right: 0px;
  }
}
#slider-content {
  width: $size-component;
  margin-top: $padding;
  position: relative;
}
.content {
  &__wrap {
    overflow: hidden;
    margin-left: -$padding;
  }
  &__translate {
    display: flex;
    justify-content: space-between;
    flex-basis: 78px;
    flex-direction: row;
    transition: all 500ms ease 0s;
  }
}
</style>
