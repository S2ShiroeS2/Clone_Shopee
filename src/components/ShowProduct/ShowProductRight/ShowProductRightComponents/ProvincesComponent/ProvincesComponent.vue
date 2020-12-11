<template>
  <div class="flex-col absolute provinces" name="provinces">
    <div class="find">
      <input
        type="text"
        placeholder="Tìm"
        class="search"
        v-model="search"
        @click.stop=""
      />
    </div>
    <div v-if="IsClicked.isClicked != 0" class="previous" @click.stop="Prev()">
      <i :class="previous_icon" aria-hidden="true"></i>
      {{ Previous_Name.previous_name }}
    </div>
    <list-location
      v-if="IsClicked.isClicked == 0"
      :location="FilteredList_Province"
      @myid="Next($event)"
    />
    <list-location v-else :location="FilteredList_Ward" @myid="Next($event)" />
  </div>
</template>

<script>
import Locations from "./ListLocation.vue";
export default {
  components: { "list-location": Locations },
  props: {
    provinces: { type: Array, required: true },
    previous_icon: {
      type: String,
      required: false,
      default: "fa fa-angle-left"
    }
  },
  data: function() {
    return {
      search: "",
      IsClicked: { isClicked: 0 },
      Id: { id: -1 },
      Previous_Name: { previous_name: "" },
      Name: {
        province_name: "",
        ward_name: ""
      },
      names: ["Evan You", "John Lindquist", "nht"],
      Location: this.provinces
    };
  },
  computed: {
    Location_ward() {
      return this.provinces[this.Id.id].wards;
    },
    FilteredList_Province() {
      return this.Location.filter(element =>
        element.title.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    FilteredList_Ward() {
      return this.Location_ward.filter(element =>
        element.title.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    Next: function(myid) {
      if (this.IsClicked.isClicked == 1) {
        // thoát
        this.Name.province_name = this.Previous_Name.previous_name;
        this.Name.ward_name = this.provinces[this.Id.id].wards[myid].title;

        this.$emit("Name", this.Name);
      } else {
        //ngược lại chuyển đến trang huyện
        // tăng số lần bấm nút
        this.$set(this.IsClicked, "isClicked", 1);
        // gán id dể tìm tên tỉnh
        this.$set(this.Id, "id", myid);
        this.search = "";
        this.$set(
          this.Previous_Name,
          "previous_name",
          this.provinces[this.Id.id].title
        );
      }
    },

    Prev: function() {
      this.$set(this.IsClicked, "isClicked", 0);
      this.$set(this.Id, "id", -1);
      this.$set(this.Previous_Name, "previous_name", "");
      this.search = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.previous {
  align-items: center;
  color: #ee4d2d;
  background-color: #f5f5f5;
  cursor: pointer;
  user-select: none;
  padding: 0.625rem;
}
.provinces {
  margin-top: 1px;
  top: 100%;
  left: 0;
  width: 20rem;
  max-height: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
  border-radius: 0.125rem;
  overflow-y: scroll;
  overflow-x: hidden;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.pointer {
  cursor: pointer;
}
.absolute {
  position: absolute;
}
.find {
  padding: 0.3125rem 0.625rem;
  cursor: pointer;
}
.search {
  outline: none;
  border: none;
  background-color: #f5f5f5;
  box-sizing: border-box;
  width: 100%;
  height: 1.875rem;
  line-height: 1.875rem;
  padding: 0 0.625rem;
  border-radius: 2px;
}
</style>
