<template>
  <div>
    <h3>{{ data.title }}</h3>
    <!-- <li class="_14m_66"><div class="footer-vn-background footer-vn-visa-png" ></div></li> -->
    <div class="flex flex-wrap _3bk_JS">
      <div class="_14m_66" v-for="item in data.items" :key="item.id">
        <div class="footer-vn-background" :class="item.png"></div>
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
@import "../Footer.scss";
</style>
