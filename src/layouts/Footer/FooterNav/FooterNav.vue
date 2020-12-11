<template>
  <div>
    <h2>Danh mục</h2>
    <div class="flex-between footer-nav">
      <footer-nav-column
        :data="column.data"
        v-for="column in columns"
        :key="column.id"
        class="flex-item20"
      />
    </div>
  </div>
</template>

<script>
import Data from "../../../data/footernavData.json";
import FooterNavColumn from "./FooterNavColumn.vue";
export default {
  components: {
    "footer-nav-column": FooterNavColumn
  },
  data: function() {
    return Data;
  }
};
</script>

<style lang="scss" scoped>
@import "../Footer.scss";
</style>
