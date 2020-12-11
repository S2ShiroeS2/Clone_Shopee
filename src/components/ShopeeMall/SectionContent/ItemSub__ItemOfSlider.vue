<template>
  <div class="section_content_right flex" id="translate">
    <div class="item" v-for="item in list_content" :key="item.id">
      <a :href="item.src">
        <div :style="style(item)"></div>
      </a>
      <div class="item__text">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list_content: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      style: function(item) {
        return {
          backgroundImage: "url(" + item.img_src + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%"
        };
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.section_content_right {
  // padding-left: 6px;
  padding-top: 10px;
  height: 100%;
  min-width: 800px;
}
// #translate {
//   transform: translate(-120px, 40px);
// }
.flex {
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
}

$width: 12.5rem;
$height: 50%;
.item {
  padding: 0 0 10px 10px;
  width: $width;
  height: $height;
  &__img {
    width: 0%;
    height: 80%;
  }
  &__text {
    margin: 2px;
    transform: translateY(-2.5rem);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: 0;
    height: 27px;
    line-height: 27px;
    text-align: center;
    font-size: 18px;
    color: #d0011b;
  }
}
</style>
