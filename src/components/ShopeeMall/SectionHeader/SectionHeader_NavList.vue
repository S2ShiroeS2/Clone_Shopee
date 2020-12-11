<template>
  <div class="nav_list d-flex">
    <div v-for="item in data" :key="item.id" class="mr-15px d-flex font_style">
      <div class="icon_size mall_selling_background" :class="item.style"></div>
      {{ item.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
$fontsize: 16px;
.nav_list {
  font-weight: 400;
  text-transform: capitalize;
  margin-left: 15px;
  padding-left: 15px;
  border-left: 1px solid #d8d8d8;
}
.font_style {
  align-items: center;
  margin-right: 15px;
  font-size: $fontsize;
  color: #333;
  white-space: nowrap;
  height: 1.25rem;
}
.icon_size {
  height: 1.0625rem;
  width: 1.0625rem;
  margin-right: 6px;
}
._7_day_return {
  background-size: 284.72222222222223% 241.0958904109589%;
  background-position: 7.518796992481203% 9.70873786407767%;
}
.authentic {
  background-size: 280.82191780821915% 241.0958904109589%;
  background-position: 84.84848484848484% 9.70873786407767%;
}
.free_shipping {
  background-size: 284.72222222222223% 241.0958904109589%;
  background-position: 7.518796992481203% 100%;
}
.mall_selling_background {
  background-image: url("../../../../public/assets/images/icons/icon-shopeemall.png");
}
</style>
