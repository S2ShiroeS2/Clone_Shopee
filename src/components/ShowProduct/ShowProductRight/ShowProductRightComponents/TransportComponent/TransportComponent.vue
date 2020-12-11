<template>
  <div class="transport">
    <!-- Vận chuyển nhanh quốc tế -->
    <div class="title" name="title">
      {{ transport_component.title }}
    </div>
    <!-- Standard express & đ10000-->
    <div class="d-flex center standard">
      <div>{{ transport_component.header }}</div>
      <div>{{ addcurrency(transport_component.fee_nums) }}</div>
    </div>
    <!-- nhận hàng vào -->
    <div class="f-12 mt-8 gray">
      {{ transport_component.receive }}
      {{ transport_component.from }} -
      {{ transport_component.to }}
    </div>
    <!-- miễn phí vận chuyển -->
    <div class="f-12 mt-8">
      <span class="red">{{ transport_component.free }}</span>
      <span class="gray"> {{ transport_component.for }}</span>
      <span class="red">{{ addcurrency(transport_component.price_free) }}</span>
      <span class="gray"> {{ transport_component.reduce }}</span>
      <span class="red">
        {{ addcurrency(transport_component.price_reduce) }}
      </span>
      <span class="gray">{{ transport_component.end }}</span>
    </div>
  </div>
</template>

<script>
import Help from "../../../../../helpers/helpFunction.js";
export default {
  mixins: [Help],
  props: {
    transport_component: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.f-12 {
  font-size: 12px;
}
.mt-8 {
  margin-top: 8px;
}
.red {
  color: #ee4d2d;
}
.gray {
  color: rgba(0, 0, 0, 0.54);
}
.transport {
  width: 400px;
  position: absolute;
  background-color: #fafafa;
  z-index: 101;
  left: 0px;
  padding: 0 1.75rem 0.9375rem;
  overflow-y: auto;
  max-height: 400px;
  max-width: 400px;
  border: 1px solid rgba(0, 0, 0, 0.09);
}
.title {
  height: 3.25rem;
  line-height: 3.25rem;
  font-weight: 500;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  font-size: 1rem;
}
.standard {
  padding-top: 15px;
}
.center {
  justify-content: space-between;
}
</style>
