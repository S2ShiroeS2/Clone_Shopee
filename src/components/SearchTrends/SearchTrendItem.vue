<template>
  <a :href="data.url" class="card-search-trend">
    <div class="card-search-trend__title">
      <div class="card-search-trend__title--wrapper">
        <div class="card-search-trend__product-name">{{ data.keyword }}</div>
        <div class="card-search-trend__number-search">
          {{ roundingNumber }} sản phẩm
        </div>
      </div>
    </div>
    <div class="card-search-trend__image">
      <div
        class="card-search-trend__image-space"
        style="background-size: contain; background-repeat: no-repeat;"
        :style="`background-image: url(${data.image});`"
      ></div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    roundingNumber: function() {
      let result = this.data.count;
      if (result > 1000000) {
        result = result / 1000000;
        return Math.round(result) + "tr+";
      } else {
        result = result / 1000;
        return Math.round(result) + "k+";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Style/Style-SearchTrendItem.scss";
</style>
