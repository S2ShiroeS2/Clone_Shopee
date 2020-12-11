<template>
  <ul class="footertop">
    <section v-for="item in reports" v-bind:key="item.id">
      <h2 class="shopee-footer-section__heading">{{ item.title }}</h2>
      <p v-html="item.paragraph" class="shopee-footer-section__content"></p>
    </section>
  </ul>
</template>
<script>
import reports from "../../../data/footertopData.json";
export default {
  data: function() {
    return reports;
  }
};
</script>

<style lang="scss" scoped src="../Footer.scss"></style>
