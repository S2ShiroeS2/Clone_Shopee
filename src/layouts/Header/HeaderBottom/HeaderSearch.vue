<template>
  <div class="navbar-shop__search--box">
    <div class="navbar-shop__searchbar">
      <div class="navbar-shop__searchbar--main">
        <form class="navbar-shop__searchbar--input">
          <input
            type="text"
            :placeholder="data.placeholder"
            size="70"
            maxlength="128"
          />
        </form>
        <div class="searchbar__selector" style="display: none;">
          <div class="searchbar__drawer">
            <div class="searchbar__selector--selected">
              <div class="searchbar__selector--selected-label">
                Trong Thời Trang Nam
              </div>
              <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div class="searchbar__drawer--content">
              <div class="searchbar__selector--options">
                <div class="searchbar__selector--option">
                  <div class="searchbar__selector--option-label">
                    Trong Thời Trang Nam
                  </div>
                  <i class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div class="searchbar__selector--option">
                  <div class="searchbar__selector--option-label">
                    Trong Shopee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="button button-solid-primary button-size button-inline"
      >
        <i class="fa fa-search" aria-hidden="true"></i>
      </button>
    </div>
    <div class="navbar-shop__searchbar--suggest">
      <div class="suggest-wrap">
        <a v-for="item in data.suggest" :key="item.id" href="#/">
          {{ item.keyword }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-HeaderSearch.scss";
</style>
