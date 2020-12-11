/* eslint-disable prettier/prettier */
<template>
  <a :href="item.url" class="campaign-category__item">
    <div class="campaign-category__item--wrapper">
      <div class="campaign-category__item--icon">
        <img :src="item.banner_image" alt="" />
      </div>
      <div class="campaign-category__item--title">{{ item.title.vi }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-Campaign.scss";
</style>
