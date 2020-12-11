<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.id">
        <h3>
          <a :href="item.url">{{ item.title }}</a>
        </h3>
        <list-nav-column :data="item.items" />
      </li>
    </ul>
  </div>
</template>

<script>
import List from "../FooterList.vue";
export default {
  components: {
    "list-nav-column": List
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Footer.scss";
</style>
