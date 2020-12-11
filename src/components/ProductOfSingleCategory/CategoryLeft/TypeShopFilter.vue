<template>
  <div>
    <div
      class="typeShop"
      v-for="(typeShop, index) in ListTypeShop"
      :key="index"
    >
      <div class="typeShop-header">{{ typeShop.typeShopTitle }}</div>
      <div class="typeShop-body">
        <div
          class="checkbox-typeShop"
          v-for="(item, index) in typeShop.nameTypeShop"
          v-bind:key="index"
        >
          <input type="checkbox" />
          <span>{{ item }}</span>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ListTypeShop: {
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../Style/style-CategoryLeft";
</style>
