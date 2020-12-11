<template>
  <div>
    <large-banner />
    <product-of-single-category />
  </div>
</template>

<script>
import LargeBanner from "../components/Banner/LargeBanner";
import ProductOfSingleCategory from "../components/ProductOfSingleCategory/ProductOfSingleCategory";
export default {
  components: {
    "large-banner": LargeBanner,
    "product-of-single-category": ProductOfSingleCategory
  }
};
</script>

<style lang="scss" scoped></style>
