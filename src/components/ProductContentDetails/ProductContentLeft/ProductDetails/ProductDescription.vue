<template>
  <div class="product-description">
    <div class="product-description__title">MÔ TẢ SẢN PHẨM</div>
    <div class="product-description__content">
      <div class="product-description__wrapper">
        <span v-for="(item, index) in data.description" :key="index">{{
          item
        }}</span>
        <p>{{ data.tutorial.title }}</p>
        <span
          v-for="(item, index) in data.tutorial.content"
          :key="index + 'a'"
          >{{ item }}</span
        >
        <p>{{ data.commitment.title }}</p>
        <span
          v-for="(item, index) in data.commitment.content"
          :key="index + 'b'"
          >{{ item }}</span
        >
        <br />
        <span v-for="(item, index) in data.Cases" :key="index + 'c'">{{
          item
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ProductDescription.scss";
</style>
