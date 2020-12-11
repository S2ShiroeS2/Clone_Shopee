<template>
  <div class="share">
    <div class="share-item share-item1">
      <span>{{ share.title }}</span>
      <a :href="item.href" v-for="item in share.list_icon" :key="item.myclass">
        <button
          class="bg-100 button"
          :class="item.myclass"
          :style="'backgroundImage: url(' + share.icons_url + ')'"
        ></button>
      </a>
    </div>
    <div class="share-item share-item2">
      <a :href="share.liked_link">
        <i :class="share.heard" class="mr-10 icon"></i>
      </a>
      <span
        >{{ share.liked_text }} ({{ formatnumber(share.liked_count) }})</span
      >
    </div>
  </div>
</template>

<script>
// js file
import Help from "../../../../helpers/helpFunction.js";
export default {
  mixins: [Help],
  props: {
    share: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-100 {
  display: inline;
  background-size: 100%;
}
a {
  &:hover {
    cursor: pointer;
  }
}
.share-item {
  background: #fff;
}
.button {
  width: 25px;
  height: 25px;
  border: none;
  margin-left: 5px;
  outline: none;
  &:hover {
    background-color: #fff;
  }
}
.sprite-product-sharing {
  &-fm {
    background-position: 0 -100%;
  }
  &-fb {
    background-position: 0 0;
  }
  &-gp {
    background-position: 0 -200%;
  }
  &-pinterest {
    background-position: 0 -300%;
  }
  &-twitter {
    background-position: 0 -400%;
  }
}
.share {
  display: flex;
  margin-top: 15px;
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    &2 {
      border-left: 1px solid rgba(0, 0, 0, 0.09);
    }
  }
}
.icon {
  color: rgb(255, 66, 79);
  font-weight: bold;
  font-size: 20px;
}
.mr-10 {
  margin-right: 10px;
}
span {
  font-size: 16px;
  color: #222;
}
</style>
