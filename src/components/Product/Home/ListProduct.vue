<template>
  <div class="product-recommended__wrapper">
    <div>
      <nav
        class="product-recommended__tabs-header--wrapper product-recommended__sticky"
      >
        <ul class="product-recommended__tabs-header">
          <li
            class="product-recommended__tabs-header--tab"
            @click="isActive = false"
          >
            <div class="product-recommended__tabs-header--title">
              <span>GỢI Ý HÔM NAY</span>
            </div>
            <div
              class="product-recommended__tabs-header--underline"
              :class="{ active: !isActive }"
            ></div>
          </li>
          <li
            class="product-recommended__tabs-header--tab"
            @click="isActive = true"
          >
            <div class="product-recommended__tabs-header--title">
              <img
                src="https://cf.shopee.vn/file/dd3e3446b4e1e978507bf3ec776752ec"
                alt=""
              />
            </div>
            <div
              class="product-recommended__tabs-header--underline"
              :class="{ active: isActive }"
            ></div>
          </li>
        </ul>
      </nav>
      <div class="product-recommended__panels">
        <div
          class="product-recommended__list"
          :class="{ disable: isActive === true }"
        >
          <div class="wrapper-product-list">
            <!-- Render recommended product list -->
            <product
              v-for="product in tab_one"
              :key="product.id"
              :data="product"
            />
          </div>
          <div class="product-recommended__list--show-all">
            <a href="#/" class="btn-show-all">Xem thêm</a>
          </div>
        </div>
        <div
          class="product-recommended__list disable"
          :class="{ active: isActive }"
        >
          <div class="wrapper-product-list">
            <!-- Render super sale product list -->
            <product
              v-for="product in tab_two"
              :key="product.id"
              :data="product"
            />
          </div>
          <div class="product-recommended__list--show-all">
            <a href="#/" class="btn-show-all">Xem thêm</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product";
import ProductData from "../../../data/listProductData.json";
export default {
  components: {
    product: Product
  },
  data: function() {
    return {
      tab_one: ProductData.tab_one,
      tab_two: ProductData.tab_two,
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ListProduct.scss";
</style>
