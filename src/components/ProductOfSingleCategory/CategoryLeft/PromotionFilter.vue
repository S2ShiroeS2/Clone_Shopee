<template>
  <div class="servicePromotion">
    <div class="servicePromotion-header">Dịch Vụ & Khuyến Mãi</div>
    <div class="servicePromotion-body">
      <div
        class="checkbox-servicePromotion"
        v-for="(item, index) in ListService"
        v-bind:key="index"
      >
        <div v-for="(item, index) in item.nameService" :key="index">
          <div v-if="index < 4">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
          <div v-else v-show="isActivePromotion == false">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
      <div class="servicePromotion-dropdown">
        <div
          class="sservicePromotion-dropdown-header"
          v-show="isActivePromotion == true"
        >
          Thêm
          <i
            class="fa fa-chevron-down"
            aria-hidden="true"
            @click="isActivePromotion = !isActivePromotion"
          ></i>
        </div>
        <div class="list-servicePromotion-dropdown-body"></div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    ListService: {
      type: Array
    }
  },
  data: function() {
    return {
      isActivePromotion: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/style-CategoryLeft.scss";
</style>
