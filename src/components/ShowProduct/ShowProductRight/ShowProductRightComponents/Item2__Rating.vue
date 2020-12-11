<template>
  <div class="rating flex" name="rating">
    <div class="star r-border center pr-15" name="star">
      <div>
        <p class="d-inline marginright-5 star_point">
          {{ rating.rating_star }}
        </p>

        <i
          class="fa star"
          :class="star_class(item, rating.rating_star)"
          aria-hidden="true"
          v-for="item in 5"
          :key="item"
        ></i>
      </div>
    </div>
    <div class="evaluate r-border center p-15" name="evaluate">
      <p class="d-inline eveluate_point marginright-5">
        {{ formatnumber(rating.evaluate.nums) }}
      </p>
      <span>{{ rating.evaluate.title }}</span>
    </div>
    <div class="sold center p-15" name="sold">
      {{ formatnumber(rating.sold.nums) }}
      <span>{{ rating.sold.title }}</span>
    </div>
  </div>
</template>

<script>
// js file
import Help from "../../../../helpers/helpFunction.js";
export default {
  mixins: [Help],
  props: {
    rating: {
      type: Object,
      required: true
    }
  },
  methods: {
    //Tính số ngôi sao
    star_class: function(x, y) {
      if (x <= y) return this.rating.evaluate.star_icon.full;
      // x > y
      else if (x - y >= 1) return this.rating.evaluate.star_icon.null;
      else return this.rating.evaluate.star_icon.haft;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
$starcolor: #ee4d2d;
$ecolor: #222;
span {
  margin-right: 5px;
  font-size: 0.875rem;
  color: #767676;
  text-transform: capitalize;
  padding: 4px 0;
}

.star::before {
  color: $starcolor;
}
.star_point {
  color: $starcolor;
  text-decoration: underline;
  line-height: 20px;
}
.eveluate_point {
  color: $ecolor;
  text-decoration: underline;
}
p {
  text-align: center;
  padding: 2px;
}
</style>
