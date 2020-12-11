<template>
  <div class="list-shoppeMall-column">
    <div class="branch-icon branch-icon-top">
      <a :href="item.href_top">
        <div
          class="icon-image"
          :style="{
            'background-image': 'url(' + item.url_top + ')'
          }"
        ></div>
      </a>
    </div>
    <div class="branch-icon branch-icon-bottom">
      <a :href="item.href_bottom">
        <div
          class="icon-image"
          v-bind:style="{
            'background-image': 'url(' + item.url_bottom + ')'
          }"
        ></div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: { item: { type: Object, required: true } }
};
</script>

<style lang="scss" scoped>
.list-shoppeMall-column {
  min-width: calc(100% / 6);
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.branch-icon {
  height: 111.94px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.icon-image {
  width: 100%;
  height: 100%;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 1;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
