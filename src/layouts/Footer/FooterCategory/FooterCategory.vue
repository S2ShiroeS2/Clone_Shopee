<template>
  <div class="mycontainer footercategory">
    <div class="flex-between ">
      <list-data :data="customer" class="flex-item20" />

      <list-data :data="about" class="flex-item20" />

      <div class="flex-column flex-item20">
        <list-img :data="payment" />
        <list-img :data="transport" />
      </div>

      <list-icon-text :data="network" class="flex-item20" />
      <qr :data="download" class="flex-item20" />
    </div>
    <hr />

    <br />
    <div class="flex-between" style="font-size: .875rem">
      <p>{{ categorybot.paragraphleft }}</p>
      <div class="flex-between">
        <p>{{ categorybot.title }}</p>
        <list :data="categorybot.nations" class="no-hover" />
      </div>
    </div>
  </div>
</template>

<script>
import FooterCategoryData from "../../../data/footercategoryData.json";
import List from "../FooterList.vue";

import ListData from "./CategoryData.vue";
import ListImg from "./CategoryImg.vue";
import ListIconText from "./CategoryIconText.vue";
import QR from "./CategoryQR.vue";
export default {
  components: {
    list: List,
    "list-data": ListData,
    "list-img": ListImg,
    "list-icon-text": ListIconText,
    qr: QR
  },
  data: function() {
    return {
      customer: FooterCategoryData.customer,
      about: FooterCategoryData.about,
      payment: FooterCategoryData.payment,
      transport: FooterCategoryData.transport,
      network: FooterCategoryData.network,
      download: FooterCategoryData.download,
      categorybot: FooterCategoryData.categorybot
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../Footer.scss";
</style>
