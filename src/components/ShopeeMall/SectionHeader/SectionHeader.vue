<template>
  <div class="sectionheader d-flex j-between center">
    <!-- list in the left -->
    <div class="d-flex">
      <a :href="top.heading.url_left" class="headingtitle">{{
        top.heading.title
      }}</a>
      <nav-top :data="top.shopeemall_top"></nav-top>
    </div>
    <!-- button "see more" in the right -->
    <a :href="top.heading.url_right">
      <div class="d-flex font_style center">
        {{ top.heading.more }}
        <div class="button">
          <i
            class="fa fa-chevron-right btn_weight"
            aria-hidden="true"
            style="font-size: 10px"
          ></i>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import ShopeeMall_TopList from "./SectionHeader_NavList.vue";

export default {
  components: {
    "nav-top": ShopeeMall_TopList
  },
  props: {
    top: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.font_style {
  color: #d0011b;
  height: 1.25rem;
  font-size: 14px;
}

.j-between {
  justify-content: space-between;
}
.center {
  align-items: center;
}
.sectionheader {
  height: 61px;
  padding: 0 20px;
  border-bottom: 1px solid #d8d8d8;
}
.headingtitle {
  text-decoration: none;
  color: #d0011b;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 1.0625rem;
  align-self: center;
}
a:hover {
  text-decoration: none;
}
.button {
  width: 1.125rem;
  height: 1.125rem;
  margin-left: 8px;
  background-color: #d0011b;
  border: none;
  color: white;
  height: inline;
  text-align: center;
  text-decoration: none;
  border-radius: 50%;
}
</style>
