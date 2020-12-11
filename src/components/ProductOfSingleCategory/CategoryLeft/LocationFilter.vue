<template>
  <div>
    <div
      class="search-fillter-location"
      v-for="(location, index) in ListLocation"
      :key="index"
    >
      <div class="search-fillter-location-header">
        {{ location.locationTitle }}
      </div>
      <div class="search-fillter-location-body">
        <div
          class="checkbox-location"
          v-for="(item, index) in location.nameLocation"
          :key="index"
        >
          <div v-if="index < 4">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
          <div v-else v-show="isActiveLocation == false">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
        </div>
        <div
          class="search-fillter-location-dropdown"
          @click="isActiveLocation = !isActiveLocation"
        >
          <div class="search-fillter-location-dropdown-header">
            Thêm
            <i class="fa fa-chevron-down" aria-hidden="true"></i>
            <div class="list-location-dropdown-body"></div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListLocation: {
      type: Array
    }
  },
  data: function() {
    return {
      isActiveLocation: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../Style/style-CategoryLeft.scss";
</style>
