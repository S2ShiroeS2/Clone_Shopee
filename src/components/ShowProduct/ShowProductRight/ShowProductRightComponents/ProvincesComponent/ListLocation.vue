<template>
  <div>
    <div
      v-for="item in location"
      :key="item.id"
      class="pointer item"
      @click.stop="changeCountClick(item.id - 1)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
// import Provinces from "./ProvincesComponent.vue";
export default {
  props: {
    location: { type: Array, required: true }
  },
  data: function() {
    return {
      countClick: 0
    };
  },
  methods: {
    changeCountClick: function(id) {
      this.$emit("myid", id);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  padding: 0.625rem;
  font-size: 16px;
}
.pointer {
  cursor: pointer;
}
</style>
