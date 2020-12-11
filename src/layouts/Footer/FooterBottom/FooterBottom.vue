<template>
  <div class="footerbottom">
    <list :data="list__footerbottom__top" class="footerbottom__list" />

    <div class="flex">
      <a :href="image.url" v-for="image in footerbottom__imgs" :key="image.id">
        <div :class="image.class" class="img-url flex-item"></div>
      </a>
    </div>

    <p>{{ company }}</p>
    <p v-for="line in paragraphs" :key="line">{{ line }}</p>
  </div>
</template>

<script>
import List from "../FooterList.vue";
import footerbottomData from "../../../data/footerbottomData.json";
export default {
  components: {
    list: List
  },
  data: function() {
    return footerbottomData;
  }
};
</script>

<style scoped>
.footerbottom {
  background: #f5f5f5;
  padding: 2.625rem 0px 2.3125rem;
}
.footerbottom__list,
p {
  text-align: center;
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.8rem;
}

ul >>> a:hover {
  color: rgba(0, 0, 0, 0.54) !important;
}

/* Cut img */

.img-url {
  background-image: url(../../../assets/images/logos/logos.png);
}
.img12-size {
  width: 7.5rem;
  height: 2.8125rem;
}

.img3-size {
  width: 3rem;
  height: 3rem;
}
.img1-cut {
  background-size: 630.8333333333334% 408.8888888888889%;
  background-position: 100% 7.194244604316546%;
}
.img3-cut {
  background-size: 1577.0833333333333% 383.3333333333333%;
  background-position: 80.25387870239774% 33.8235294117647%;
}

/* flex */
.flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.flex-item {
  margin: 1rem;
}
</style>
