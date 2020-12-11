<template>
  <div class="product-right">
    <right-heading :heading="right.heading" />
    <right-rating :rating="right.rating" />
    <right-pricing :pricing="right.pricing" />
    <right-transport :transport="right.transport" />
    <!-- color -->
    <right-sizing
      v-if="right.coloring.items.length != 0"
      :data="right.coloring"
    />
    <!-- size -->
    <right-sizing v-if="right.sizing.items.length != 0" :data="right.sizing" />
    <right-numbers :numbers="right.numbers" />
    <right-footer :footer="right.footer" />
  </div>
</template>

<script>
// component
import Heading from "./ShowProductRightComponents/Item1__Heading.vue";
import Rating from "./ShowProductRightComponents/Item2__Rating.vue";
import Pricing from "./ShowProductRightComponents/Item3__Pricing.vue";
import Transport from "./ShowProductRightComponents/Item4__Transport.vue";
import Sizing from "./ShowProductRightComponents/Item5__Sizing.vue";
import Numbers from "./ShowProductRightComponents/Item6__Numbers.vue";
import Footer from "./ShowProductRightComponents/Item7__Footer.vue";
export default {
  components: {
    "right-heading": Heading,
    "right-rating": Rating,
    "right-pricing": Pricing,
    "right-transport": Transport,
    "right-sizing": Sizing,
    "right-numbers": Numbers,
    "right-footer": Footer
  },
  props: {
    right: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.product-right {
  padding: 15px 2.1875rem 0 1.25rem;
  // background-color: gray;
  // border: 1px solid black;
  box-sizing: border-box;
  width: 100%;
  height: inherit;
}
</style>
