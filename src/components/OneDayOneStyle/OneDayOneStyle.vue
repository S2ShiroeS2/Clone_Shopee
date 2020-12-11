<template>
  <div id="topsales">
    <div id="topsales__heading" class="flex-row">
      <h2 class="title">{{ mydata.heading.title }}</h2>
      <a :href="mydata.heading.seemore__href" class="seemore">
        <span>{{ mydata.heading.seemore }}</span>
        <i class="fa fa-chevron-right icon" aria-hidden="true"></i>
      </a>
    </div>
    <topsales-content :content="mydata.content" :size="size" />
  </div>
</template>

<script>
// DATA
import onedayonestyle_data from "../../data/onedayonestyleData.json";
//components
import topsalescontent from "../TopSales/TopSalesContent.vue";
export default {
  components: {
    "topsales-content": topsalescontent
  },
  data: function() {
    return {
      mydata: onedayonestyle_data.onedayonestyle_data,
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
