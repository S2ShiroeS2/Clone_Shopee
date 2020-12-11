<template>
  <div class="right-heading">
    <div class="label">{{ heading.label }}</div>
    <div class="name ">{{ heading.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
.right-heading {
  display: flex;
  align-items: center;
}
</style>
