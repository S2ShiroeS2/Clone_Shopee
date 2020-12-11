<template>
  <div id="topsales">
    <div id="topsales__heading" class="flex-row">
      <h2 class="title">{{ Data.heading.title }}</h2>
      <a :href="Data.heading.seemore__href" class="seemore">
        <span>{{ Data.heading.seemore }}</span>
        <i class="fa fa-chevron-right icon" aria-hidden="true"></i>
      </a>
    </div>
    <topsales-content :content="Data.content" :size="size" />
  </div>
</template>

<script>
// DATA
import topsales_data from "../../data/topsalesData.json";
//components
import topsalescontent from "./TopSalesContent.vue";
export default {
  components: {
    "topsales-content": topsalescontent
  },
  data: function() {
    return {
      Data: topsales_data.topsalesData,
      size: 198
    };
  }
};
</script>

<style lang="scss" scoped>
#topsales {
  margin-top: 1.5rem;
  box-sizing: border-box;
  &__heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
  }
  .title {
    margin-bottom: 0;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.54);
    font-weight: 500;
  }
  a:hover {
    text-decoration: none;
  }
  .seemore {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 7px;
    color: rgb(238, 77, 45);
    cursor: pointer;
    span {
      font-size: 14px;
      color: #ee4d2d;
    }
  }
  .icon {
    margin-left: 5px;
  }
}
</style>
