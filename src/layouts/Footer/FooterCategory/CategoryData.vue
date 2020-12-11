<template>
  <div>
    <h3>
      {{ data.title }}
    </h3>
    <list-category :list="data.items" />
  </div>
</template>

<script>
import List from "./FooterCategoryList.vue";
export default {
  components: {
    "list-category": List
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Footer.scss";
</style>
