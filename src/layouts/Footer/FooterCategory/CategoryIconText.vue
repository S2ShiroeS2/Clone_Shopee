<template>
  <div>
    <h3>{{ data.title }}</h3>
    <ul>
      <li v-for="item in data.items" :key="item.id">
        <a :href="item.url" class="flex">
          <i :class="item.icon"></i>
          <p class="ml-2" style="line-height: 1em">{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Footer.scss";
a:hover {
  &/deep/ p {
    color: $colorhover;
  }
  i {
    color: $fontcolor;
  }
}
</style>
