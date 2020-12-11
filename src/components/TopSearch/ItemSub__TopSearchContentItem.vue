<template>
  <div class="topsearch__content__item">
    <div class="flex-row">
      <div class="img1" :style="style(item, 0)">
        <div class="alt">{{ item.alt }}</div>
      </div>
      <div class="flex-column">
        <div class="img2" :style="style(item, 1)"></div>
        <div class="img3" :style="style(item, 2)"></div>
      </div>
    </div>
    <div class="title">{{ item.title }}</div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      style: function(item, index) {
        return {
          backgroundImage: "url(" + item.imgs[index].url_img + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        };
      }
    };
  }
};
</script>

<style lang="scss" scoped>
$size__img1: 224.31px;
$size__img2: 109.67px;
.topsearch__content__item {
  padding: 30px 30px 25px;
  // width: 399.98px;
  height: 324px;
  min-width: calc(100% / 3);
  box-sizing: border-box;
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  flex-grow: 1;
}
.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 0;
}
.img1 {
  width: $size__img1;
  height: $size__img1;
  position: relative;
}
.img2,
.img3 {
  width: $size__img2;
  height: $size__img2;
}
.title {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 23px;
  color: #555;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;
}
.alt {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5625rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  line-height: 1.5625rem;
  text-align: center;
}
</style>
