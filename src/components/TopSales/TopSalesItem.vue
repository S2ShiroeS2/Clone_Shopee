<template>
  <div class="topsales__item">
    <a :href="item.href">
      <div class="img">
        <div :style="style(item)"></div>
      </div>
      <div class="title">{{ item.title }}</div>
      <div class="price">
        <slot name="from"><span>Từ</span></slot>
        <!-- {{ item.price }} -->
        {{ addcurrency(item.price) }}
      </div>
    </a>
  </div>
</template>

<script>
import help from "../../helpers/helpFunction.js";
export default {
  mixins: [help],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      style: function(item) {
        return {
          backgroundImage: "url(" + item.url_img + ")",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%"
        };
      }
    };
  },
  methods: {
    addcurrency: function(a) {
      const numberFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND"
      });
      a = (a / 100000).toFixed(0).replace(".", ",");
      return numberFormat.format(a).replace(",", ".");
    }
  }
};
</script>

<style lang="scss" scoped>
$size: 200px;
.topsales__item {
  background-color: #fff;
  width: fit-content;
  &:hover {
    box-shadow: 0 0.0625rem 20px 0 rgba(0, 0, 0, 0.05);
    -webkit-transform: translateY(-0.0625rem);
    transform: translateY(-0.0625rem);
    z-index: 1;
  }
}
a {
  color: rgba(0, 0, 0, 0.8);
  &:hover {
    text-decoration: none;
  }
}
.img {
  width: $size;
  height: $size;
}
.title {
  width: $size;
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
  line-height: 1.25rem;
  height: 1.25rem;
  font-size: 1.125rem;
}
.price {
  display: block;
  margin-bottom: 1.5625rem;
  color: #ee4d2d;
  font-size: 1rem;
  -webkit-box-pack: center;
  justify-content: center;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0 0.9375rem;
  white-space: nowrap;
  span {
    color: rgba(0, 0, 0, 0.26);
    font-weight: 400;
    margin-right: 5px;
    text-transform: capitalize;
  }
}
</style>
