<template>
  <div>
    <h3>{{ data.tittle }}</h3>
    <div class="mBTmjQ flex-row">
      <a :href="data.url">
        <img
          src="../../../assets/images/qr-code-shoppe-footer.png"
          alt="download_qr_code"
          class="qr-size"
        />
      </a>

      <div class="_1zEa4X flex-column">
        <a :href="data.url">
          <img
            class="appstore-size"
            src="../../../assets/images/logos/appstore.png"
            alt="App Store"
        /></a>
        <a :href="data.url">
          <img
            class="appstore-size"
            src="../../../assets/images/logos/googleplay.png"
            alt="Play Store"
        /></a>
      </div>
    </div>
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
</style>
