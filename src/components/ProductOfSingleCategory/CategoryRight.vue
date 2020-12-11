<template>
  <div class="contain-product-right">
    <div class="filter-sort">
      <span>Sắp xếp theo</span>
      <div class="filter-sort-options">
        <div
          class="filter-sort-options__option filter-sort-options__option--selected"
        >
          Phổ biến
        </div>
        <div class="filter-sort-options__option">Mới nhất</div>
        <div class="filter-sort-options__option">Bán chạy</div>

        <div class="filter-sort-options__option">
          <div class="select-with-price">
            <span>
              Giá
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>
          <div class="select-with-price__wrap">
            <div class="select-with-price__wrap--dropdown">
              <span> Giá: Thấp đến Cao </span> <br />
              <span>Giá: Cao đến Thấp </span>
            </div>
          </div>
        </div>
      </div>
      <div class="filter-sort-page-controller">
        <div class="filter-sort-page-controller__state">
          <span class="filter-sort-page-controller__current">1</span> /
          <span class="filter-sort-page-controller__total">100</span>
          <button class="filter-button-outline">
            <i class="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button class="filter-button-outline ">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
@import "./Style/style-CategoryRight.scss";
</style>
