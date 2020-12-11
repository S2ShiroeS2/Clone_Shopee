<template>
  <div class="mp-container">
    <!-- row1 -->
    <div class="flex center">
      <span class="title">{{ numbers.title }}</span>
      <div class="flex center ">
        <div class="flex center marginright-15">
          <button name="minus" class="button" @click="Dec()">-</button>
          <input type="text" value="1" class="input" ref="input" />
          <button name="plus" class="button" @click="Inc()">+</button>
        </div>
        <div class="text">{{ numbers.number }} sản phẩm có sẵn</div>
      </div>
    </div>
    <!-- row1 -->
    <!--row2: button buy and add to cart -->
    <div class="flex center margintop-15">
      <a :href="numbers.href_add">
        <button class="button_type2 orange button_add" name="add_to_cart">
          <i :class="numbers.icon_cart" aria-hidden="true" class="orange"></i>
          {{ numbers.add_to_cart }}
        </button>
      </a>
      <a :href="numbers.href_buy">
        <button class="button_type2 button_buy" name="buy">
          {{ numbers.buy }}
        </button>
      </a>
    </div>
    <!--row:2 end button buy and add to cart  -->
  </div>
</template>

<script>
export default {
  props: {
    numbers: {
      type: Object,
      required: true
    }
  },
  methods: {
    Dec: function() {
      if (this.$refs.input.value > 1) this.$refs.input.value--;
    },
    Inc: function() {
      this.$refs.input.value++;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
$orange: #ee4d2d;
.orange {
  color: $orange;
}
.button {
  outline: none;
  cursor: pointer;
  font-size: 22px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  background: transparent;
  color: rgba(0, 0, 0, 0.8);
  width: 32px;
  height: 32px;
  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
.input {
  width: 50px;
  height: 32px;
  border-left: none;
  border-right: none;
  font-size: 16px;
  font-weight: 400;
  box-sizing: border-box;
  text-align: center;
  cursor: text;
  border-radius: 0;
  outline: none;
  line-height: 1;
  letter-spacing: 0;
  transition: background-color 0.1s cubic-bezier(0.4, 0, 0.6, 1);
  border: 1px solid rgba(0, 0, 0, 0.09);
  background: transparent;
  color: rgba(0, 0, 0, 0.8);
}
.text {
  color: #757575;
  font-size: 14px;
}
.button_type2 {
  outline: none;
  margin-right: 15px;
  min-width: 11.25rem;
  padding: 0 0.75rem;
  font-size: 14px;
  height: 48px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.09);
  border-radius: 2px;
  border: 0;
  text-transform: capitalize;
}
.button {
  &_add {
    background: rgba(255, 87, 34, 0.1);
    border: 1px solid #ee4d2d;
    color: #ee4d2d;
    &:hover {
      background: rgba(255, 87, 34, 0.15);
    }
  }
  &_buy {
    color: #fff;
    background: #ee4d2d;
    &:hover {
      background: #f05d40;
    }
  }
}
</style>
