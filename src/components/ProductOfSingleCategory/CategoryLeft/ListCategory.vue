<template>
  <div class="list-category">
    <router-link tag="a" class="list-category-header" to="/all_category">
      <i class="fa fa-list" aria-hidden="true"></i>
      Tất Cả Danh Mục
    </router-link>
    <hr />
    <div
      class="list-category-body"
      v-for="itemName in ListCategory"
      v-bind:key="itemName.nameCategory"
    >
      <a href="#" class="list-category-body-tittle">
        <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
        {{ itemName.nameCategory }}
      </a>
      <ul>
        <li
          v-for="(item, index) in itemName.nameSingleCategory"
          v-bind:key="index"
        >
          <a href="#" v-if="index < 4"> {{ item }}</a>
          <a href="#" v-else v-show="isActiveCategory == false"> {{ item }}</a>
        </li>
        <div
          class="list-category-dropdown-header"
          v-show="isActiveCategory == true"
        >
          Thêm
          <a href="#">
            <i
              class="fa fa-chevron-down"
              aria-hidden="true"
              @click="isActiveCategory = !isActiveCategory"
            ></i>
          </a>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ListCategory: {
      type: Array
    }
  },

  data: function() {
    return {
      isActiveCategory: true
    };
  }
};
</script>

<style scoped lang="scss">
@import "../Style/style-CategoryLeft.scss";
</style>
