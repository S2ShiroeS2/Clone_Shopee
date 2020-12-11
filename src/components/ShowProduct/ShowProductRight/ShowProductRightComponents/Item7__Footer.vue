<template>
  <div class="footer">
    <a class="flex center" :href="footer.href">
      <img :src="footer.img_url" alt="" class="img" />
      <div class="content">{{ footer.contents.item1 }}</div>
      <div class="content item2">{{ footer.contents.item2 }}</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    footer: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
.img {
  vertical-align: middle;
  height: 20px;
}
.content {
  color: #222;
  text-transform: capitalize;
  font-size: 0.875rem;
  margin: 0 20px 0 5px;
}
.item2 {
  color: rgba(0, 0, 0, 0.54);
}
a {
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
}
</style>
