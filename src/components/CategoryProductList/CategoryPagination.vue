<template>
  <div class="wrap">
    <div>
      <ul class="anphabetical-wrap">
        <li
          class="anphabetical__letter-wrapp"
          v-for="letter in ListAnphabetical"
          v-bind:key="letter.id"
        >
          <span class="anphabetical__letter">
            {{ letter.anphabetical__letter }}
          </span>
        </li>
      </ul>
    </div>

    <div class="alphabetical-list-of-category">
      <div
        class="list-of-category-in-letter"
        v-for="letter in ListAnphabetical"
        v-bind:key="letter.id"
      >
        <h1>{{ letter.anphabetical__letter }}</h1>
        <hr />
        <a href="#" class="letter-categoryname">{{ letter.categoryName }} </a>
        <div class="category-wrap">
          <a
            class="category-sub"
            href="#"
            v-for="(item, index) in letter.subCategoryProduct"
            :key="index"
            >{{ item.subCategoryDisplayName }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListAnphabetical: {
      type: Array,
    },
  },
  data: function () {
    return {};
  },
};
</script>
>

<style lang="scss" scoped>
.wrap {
  width: 1200px;
  margin: auto;
  background: white;
}
@import "./Style-CategoryProductList/Style-CategoryPagination.scss";
</style>
