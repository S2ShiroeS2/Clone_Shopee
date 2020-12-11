<template>
  <div class="discount-item">
    <div class="item-left">
      <div>
        <div class="b-left"><div class="border-left-item"></div></div>
      </div>

      <div class="title">
        <div v-if="item.badge != ''" class="badge">{{ item.badge }}</div>
        {{
          item.reduce +
            " " +
            addcurrency_and_k(item.price) +
            " " +
            item.min +
            " " +
            addcurrency_and_k(item.bill)
        }}
      </div>
      <div class="usingdate">{{ item.hsd + ": " + item.date }}</div>
    </div>
    <div class="item-right">
      <a :href="item.href">
        <button class="button">{{ item.button }}</button>
      </a>
    </div>
  </div>
</template>

<script>
import Help from "../../../../helpers/helpFunction.js";
export default {
  mixins: [Help],
  props: {
    item: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
$color: #fbc9c0;
.badge {
  background-color: #ffbf00;
  color: #fff;
  display: inline-flex;
  margin-right: 0.25rem;
  padding: 0 0.25rem;
  height: 1rem;
  line-height: 1rem;
  text-transform: capitalize;
  border-radius: 0.125rem;
  font-weight: 400;
  font-size: 0.625rem;
  vertical-align: middle;
}
.discount-item {
  position: relative;
  box-shadow: 0.125rem 0.125rem 0.3125rem rgba(0, 0, 0, 0.07);
  padding: 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: 0.125rem;
  overflow: visible;
  margin-bottom: 0.625rem;
  height: 4.75rem !important;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.2;
  font-size: 0.875rem;
}
.item {
  &-left {
    background: linear-gradient(90deg, transparent 0 0.25rem, #fff4f4 0.25rem);
    border-top: 1px solid $color;
    border-bottom: 1px solid $color;
    display: flex;
    justify-content: center;
    color: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    padding: 0.125rem 0.625rem 0.125rem 1.25rem;
    overflow: hidden;
    height: 100%;
    .title {
      color: #ee4d2d;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      font-size: 0.75rem;
      line-height: 0.875rem;
      max-height: 1.875rem;
      -webkit-box-orient: vertical;
      font-weight: 500;
      word-break: break-word;
    }
    .usingdate {
      font-size: 0.5625rem;
      line-height: 0.875rem;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 300;
      color: rgba(0, 0, 0, 0.54);
      margin-top: 0.3125rem;
    }
  }
  &-right {
    display: flex;
    align-items: center;
    background: #fff4f4;
    border: 1px solid $color;
    padding: 0.625rem;
    border-radius: 0 0.125rem 0.125rem 0;
    border-left: 1px dashed $color;
  }
}
.button {
  padding: 0.125rem 0.1875rem;
  font-size: 0.8125rem;
  line-height: 1rem;
  min-width: 0;
  height: 1.75rem;
  width: 3.4375rem;
  white-space: nowrap;
  color: #fff;
  background: #ee4d2d;
  min-width: 60px;
  max-width: 190px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  border: 0;
  overflow: hidden;
  justify-content: center;
  text-transform: capitalize;
  outline: 0;
  cursor: pointer;
  &:hover {
    background: #f05d40;
  }
}
.b-left {
  background: radial-gradient(
    circle at 0 0.375rem,
    transparent 0,
    rgba(0, 0, 0, 0.03) 0.1875rem,
    #fbc9c0 0,
    #fbc9c0 0.25rem,
    #fff4f4 0
  );
  background-size: 0.25rem 0.625rem;
  background-repeat: repeat-y;

  position: absolute;
  top: 0;
  left: 0;
  width: 0.25rem;
  height: 100%;

  &-item {
    width: 1px;
    background: repeating-linear-gradient(
      #fbc9c0,
      #fbc9c0 0.1875rem,
      transparent 0,
      transparent 0.625rem
    );
    background-size: 1px 0.625rem;

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
a:hover {
  text-decoration: none;
}
</style>
