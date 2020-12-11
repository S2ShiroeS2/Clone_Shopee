<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import ProductSingleCategory from "./data/ProductSingleCategory.json";
export default {
  created() {
    // console.log(ProductSingleCategory);
  }
};
</script>

<style lang="scss">
body {
  background-color: #f5f5f5f5 !important;
  font-size: 0.875rem !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 12px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.paddingtop {
  padding-top: 8rem;
}
</style>
