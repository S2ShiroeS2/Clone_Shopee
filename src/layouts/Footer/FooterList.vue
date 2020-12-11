<template>
  <ul class="menu">
    <li v-for="item in data" :key="item.id">
      <a :href="item.url" class="font-size">{{ item.title }}</a>
      <span class="fontsize"> | </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
/*==Style cho menu===*/

.menu {
  list-style-type: none;
  margin-bottom: 0px;
  display: block;
  ul {
    margin-left: 0;
    display: inline-block;
    vertical-align: middle;
  }
  li {
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    margin-right: 5px;
  }
  a {
    color: rgba(0, 0, 0, 0.54);
    text-decoration: none;

    &:hover {
      text-decoration: none;
      color: orangered;
    }
  }
}

.fontsize {
  font-size: 0.75rem;
}
</style>
