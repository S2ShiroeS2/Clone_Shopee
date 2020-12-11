<template>
  <div>
    <div
      class="activeProduct"
      v-for="(active, index) in ListActiveProduct"
      :key="index"
    >
      <div class="activeProduct-header">{{ active.activeProductTitle }}</div>
      <div class="typeShop-body">
        <div
          class="checkbox-activeProduct"
          v-for="(item, index) in active.nameActiveProduct"
          :key="index"
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
    ListActiveProduct: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/style-CategoryLeft.scss";
</style>
