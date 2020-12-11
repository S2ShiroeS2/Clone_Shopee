<template>
  <div class="page-product__content-detail">
    <div class="content-detail__title">{{ data.header }}</div>
    <div class="content-detail__show">
      <div class="content-detail__show--item">
        <label class="content-detail__show--label">Danh Mục</label>
        <div class="flex item-center set-height">
          <a class="color-font" href="">Shopee</a>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
          <a
            v-for="(item, index) in data.categories"
            :key="index"
            class="color-font"
            href=""
            >{{ item.display_name }}
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div v-for="(item, index) in data.attributes" :key="index">
        <div v-if="item.value !== ''" class="content-detail__show--item">
          <label class="content-detail__show--label">{{ item.name }}</label>
          <a
            v-if="index === 0 && item.value !== ''"
            class="brand-link"
            href=""
            >{{ item.value }}</a
          >
          <div v-if="index !== 0 && item.value !== ''">{{ item.value }}</div>
        </div>
      </div>
      <div class="content-detail__show--item">
        <label class="content-detail__show--label">Kho hàng</label>
        <div>{{ data.discount_stock }}</div>
      </div>
      <div class="content-detail__show--item">
        <label class="content-detail__show--label">Gửi từ</label>
        <div>{{ data.place }}</div>
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
@import "./Styles/Style-ProductDetails.scss";
</style>
