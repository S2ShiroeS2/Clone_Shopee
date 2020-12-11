<template>
  <div id="topsearch__header">
    <span class="title">{{ top.title }}</span>
    <a :href="top.url">
      <span class="seemore">{{ top.seemore }}</span>
      <i class="fa fa-chevron-right iconsize" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    top: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
#topsearch__header {
  height: 61px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.title {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
}
a {
  font-size: 14px;
  color: #ee4d2d;
  &:hover {
    text-decoration: none;
    color: #ee4d2d;
  }
}
.seemore {
  padding: 5px 7px;
}
.iconsize {
  width: 10px;
  height: 10px;
}
</style>
