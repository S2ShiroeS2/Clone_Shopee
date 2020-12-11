<template>
  <button
    @click="
      isClick = !isClick;
      isShow = data;
    "
    class="selection-item__items--item"
    :class="{ selected: isClick == true && isShow == data }"
  >
    {{ data }}
    <div v-if="isClick === true && isShow == data" class="selected__tick">
      <i class="fa fa-check" aria-hidden="true"></i>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    data: {
      type: String
    },
    isShow: {
      type: String
    }
  },
  data() {
    return {
      isClick: false
    };
  }
};
</script>

<style lang="scss" scoped>
.selected {
  color: #ee4d2d !important;
  border-color: #ee4d2d !important;
  border: 1px solid !important;
  &__tick {
    width: 0.9375rem;
    height: 0.9375rem;
    position: absolute;
    overflow: hidden;
    right: 0;
    bottom: 0;
    i.fa-check {
      position: absolute;
      right: 0;
      bottom: 0;
      color: #fff;
      font-size: 8px;
    }
    &::before {
      border: 0.9375rem solid transparent;
      border-bottom-color: #ee4d2d;
      content: "";
      position: absolute;
      right: -0.9375rem;
      bottom: 0;
    }
  }
}
</style>
