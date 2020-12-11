<template>
  <div class="right-pricing">
    <div class="flex center">
      <div class="price_old" name="price_old">
        {{ addcurrency(pricing.price_before_discount) }}
      </div>
      <div class="price_new" name="price_new">
        {{ addcurrency(pricing.price) }}
      </div>
      <div class="discount label" name="discount">
        {{ pricing.raw_discount }}
        % GIẢM
      </div>
    </div>
    <div class="flex center" name="commitment">
      <img :src="pricing.commitment.img_url" alt="" class="img_commit" />
      <div class="margin0-10" style="fontSize: 14px">
        {{ pricing.commitment.title }}
      </div>
      <i
        :class="pricing.commitment.icon_question"
        class="ml-20"
        aria-hidden="true"
      ></i>
    </div>
  </div>
</template>

<script>
import Help from "../../../../helpers/helpFunction.js";
export default {
  mixins: [Help],
  props: {
    pricing: {
      type: Object,
      required: true
    },
    data: function() {
      return { currency: "₫" };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
.price {
  &_new {
    font-size: 1.875rem;
    font-weight: 500;
    color: #ee4d2d;
    margin-right: 15px;
  }
  &_old {
    font-size: 1rem;
    text-decoration: line-through;
    color: #929292;
    margin-right: 10px;
  }
}
.right-pricing {
  margin-top: 10px;
  background-color: #fafafa;
  padding: 15px 20px;
}
.img_commit {
  width: 28px;
}
</style>
