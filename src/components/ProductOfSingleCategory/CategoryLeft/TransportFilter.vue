<template>
  <div>
    <div
      class="unit-tranport"
      v-for="(transport, index) in ListUnitTransport"
      :key="index"
    >
      <div class="unit-tranport-header">
        {{ transport.unitTransportTitle }}
      </div>
      <div class="unit-tranport-body">
        <div
          class="checkbox-unit-tranport"
          v-for="(item, index) in transport.nameUnitTransport"
          v-bind:key="index"
        >
          <div v-if="index < 4">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
          <div v-else v-show="isActiveTransport == false">
            <input type="checkbox" />
            <span>{{ item }}</span>
          </div>
        </div>
        <div class="unit-tranport-dropdown">
          <div
            class="sunit-tranport-dropdown-header"
            v-show="isActiveTransport == true"
          >
            Thêm
            <i
              class="fa fa-chevron-down"
              aria-hidden="true"
              @click="isActiveTransport = !isActiveTransport"
            ></i>
          </div>
          <div class="list-unit-tranport-dropdown-body"></div>
        </div>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ListUnitTransport: {
      type: Array
    }
  },
  data: function() {
    return {
      isActiveTransport: true
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../Style/style-CategoryLeft.scss";
</style>
