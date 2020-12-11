<template>
  <div class="shopeemall">
    <section-header :top="top" />
    <section-content :bottom="bottom" />
  </div>
</template>

<script>
// component

import SectionHeader from "./SectionHeader/SectionHeader.vue";
import SectionContent from "./SectionContent/SectionContent.vue";
// data
import ShopeeMallData from "../../data/shopeemallData.json";
export default {
  components: {
    "section-header": SectionHeader,
    "section-content": SectionContent
  },
  data: function() {
    return ShopeeMallData;
  }
};
</script>

<style lang="scss" scoped>
@import "ShopeeMall.scss";
</style>
