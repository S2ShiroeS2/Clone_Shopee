<template>
  <div class="mp-container flex">
    <span class="title">{{ data.title }}</span>
    <div class="wrap flex">
      <button
        v-for="(item, index) in data.items"
        :key="index"
        class="button"
        @click="Click(index)"
        :class="{ button_checked: index == IsChecked }"
      >
        {{ item }}
        <div class="checked" v-if="index == IsChecked">
          <i
            :class="data.check_icon"
            class="checked_icon"
            aria-hidden="true"
          ></i>
        </div>
      </button>
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
  },
  data: function() {
    return { IsChecked: -1 };
  },
  methods: {
    Click: function(index) {
      if (this.IsChecked != index) this.IsChecked = index;
      else this.IsChecked = -1;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
$color: #ee4d2d;
.title {
  padding-top: 5px;
}
.button {
  cursor: pointer;
  min-width: 5rem;
  min-height: 2.125rem;
  box-sizing: border-box;
  padding: 0.25rem 0.75rem;
  margin: 0 8px 8px 0;
  color: rgba(0, 0, 0, 0.8);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  position: relative;
  background: #fff;
  outline: 0;
  word-break: break-word;
  align-items: center;
  &:hover {
    color: $color;
    border-color: $color;
  }
  &_checked {
    color: $color;
    border-color: $color;
  }
}
.checked {
  color: #ee4d2d;
  border-color: #ee4d2d;
  width: 0.9375rem;
  height: 0.9375rem;
  position: absolute;
  overflow: hidden;
  right: 0;
  bottom: 0;
  .button:hover {
    color: $color;
    border-color: $color;
  }
  i.checked_icon {
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
.wrap {
  width: 100%;
  flex-wrap: wrap;
}
</style>
