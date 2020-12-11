<template>
  <div class="d-flex carousel_hidden" v-on-clickaway.prevent="away">
    <div class="size-100">
      <div class="big-image-top">
        <div
          class="bg-image"
          :style="'backgroundImage: url(' + this.current_img + ')'"
        >
          <!-- overlay -->
          <div
            v-if="overlay.overlay === 1"
            :style="
              'backgroundImage: url(' + image_and_slide.image_overlay + ')'
            "
            class="bg-image overlay"
          ></div>
          <div class="button button-prev" @click.stop="handlePrev()" ref="prev">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </div>
          <div class="button button-next" @click.stop="handleNext()" ref="next">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-column nav-right">
      <div class="describe">
        {{ image_and_slide.describe }}
      </div>
      <!--  -->
      <div class="flex-wrap imgs">
        <!-- items -->
        <div
          class="slider__item pointer"
          v-for="(item, index) in image_and_slide.images"
          :key="item.id"
        >
          <div
            :style="'backgroundImage: url(' + item + ')'"
            class="bg-image img"
            @click.stop="Click(item, index)"
            :class="{ active: IsActive(index) }"
          >
            <!-- hover -->
            <div class="bg-image overlay"></div>
            <!-- overlay -->
            <div
              v-if="index === 0"
              :style="
                'backgroundImage: url(' + image_and_slide.image_overlay + ')'
              "
              class="bg-image overlay"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
export default {
  mixins: [clickaway],
  props: {
    image_and_slide: {
      type: Object,
      required: true
    },
    number_item: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      index_img: this.number_item,
      current_img: this.image_and_slide.images[this.number_item],
      overlay: { overlay: this.number_item != 0 ? 0 : 1 }
    };
  },
  methods: {
    away: function() {
      this.$emit("Quit", -1);
    },
    IsActive: function(index) {
      return this.index_img === index;
    },
    handlePrev: function() {
      if (this.index_img > 0) {
        this.index_img -= 1;
        this.ChangeImg(
          this.image_and_slide.images[this.index_img],
          this.index_img
        );
      }
    },
    handleNext: function() {
      if (this.index_img < this.image_and_slide.images.length - 1) {
        this.index_img += 1;
        this.ChangeImg(
          this.image_and_slide.images[this.index_img],
          this.index_img
        );
      }
    },
    Click: function(item, index) {
      this.index_img = index;
      this.ChangeImg(item, index);
    },
    ChangeImg: function(item, index) {
      this.current_img = item;
      if (index === 0) this.$set(this.overlay, "overlay", 1);
      else this.$set(this.overlay, "overlay", 0);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductLeft.scss";
.active {
  border: 2px solid #ee4d2d;
}
.describe {
  overflow: hidden;
  font-size: 1.0625rem;
  color: #000;
  line-height: 1.125rem;
  height: 2.25rem;
  padding-right: 0.75rem;
  text-overflow: ellipsis;
}
body {
  height: 100vh;
  overflow-y: hidden;
}
.carousel_hidden {
  position: relative;
  display: flex;
  flex-grow: 1;
  width: 52.25rem;
  height: 33.75rem;
  background: #fff;
  z-index: 10000;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 10%;
  left: 25%;
}
.slide {
  width: 52.25rem;
  height: 33.75rem;
}

.flex-item {
  flex-grow: 1;
}
.nav-right {
  min-width: 19.25rem;
  max-width: 19.25rem;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 2.5rem 0 1.875rem 0.75rem;
  font-size: 0.875rem;
}
.big-image-top {
  height: 100%;
  width: 100%;
}
.button {
  justify-content: center;
  z-index: 2;
  width: 2.5rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  transform: translate3d(0, -2.5rem, 0);
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.54);
  cursor: pointer;
  color: #fff;
  font-size: 2.1875rem;
  &-prev {
    left: 0;
  }
  &-next {
    right: 0;
  }
}

.imgs {
  margin-top: 1.25rem;
  flex-grow: 1;
  justify-content: flex-start;
  align-content: flex-start;
}
.hover {
  background: transparent;
  width: 100%;
  height: 100%;
  &:hover {
    background: hsla(0, 0%, 100%, 0.26);
  }
}

.button_type2 {
  outline: none;
  color: #fff;
  background: #ee4d2d;
  margin-right: 15px;
  min-width: 11.25rem;
  padding: 0 0.75rem;
  font-size: 14px;
  height: 48px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  border: 0;
  text-transform: capitalize;
  &:hover {
    background: #f05d40;
  }
}
</style>
