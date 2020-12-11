<template>
  <div class="campaign-category">
    <campaign-item v-for="item in listItem" :key="item.id" :item="item" />
  </div>
</template>

<script>
import CampaignItem from "./CampaignItem";
import campaign from "../../data/campaignData.json";
export default {
  components: {
    "campaign-item": CampaignItem
  },
  data: function() {
    return {
      listItem: campaign.items
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./Style-Campaign.scss";
</style>
