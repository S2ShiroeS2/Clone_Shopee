<template>
  <div class="mp-container flex" ref="ahihi">
    <!-- start vận chuyển -->
    <span class="title">{{ transport.title }}</span>
    <!-- end vận chuyển -->
    <div class="transport-items " name="transport-items">
      <div name="truck">
        <div class="flex">
          <!-- start icon truck -->
          <img
            :src="transport.domestic.icon"
            alt=""
            class="icon_truck marginright-5 margintop-5"
          />
          <!-- end icon truck -->
          <!--  -->
          <!-- start miễn phí vận chuyển -->
          <div>
            {{ transport.domestic.content1 }}
            <div class="transport-item" style="width:100%">
              {{ transport.domestic.content2 }}
            </div>
          </div>
          <!-- end miễn phí vận chuyển -->
        </div>
      </div>
      <div name="plane" class="margintop-10">
        <div class="flex">
          <!-- start icon plane -->
          <i
            :class="transport.inter.icon_plane"
            aria-hidden="true"
            class="icon_plane"
          ></i>
          <!-- end icon plane -->
          <div>
            <!-- start vận chuyển từ -->
            <div name="transport from" class="flex center">
              <div class="transport-item">{{ transport.inter.from }}</div>
              {{ transport.inter.place1 }}
              <p class="margin-5">{{ transport.inter.to }}</p>
              <div class="relative" name="dropdown" @click.stop="ChangeClick()">
                <span class="dropdown" style="fontSize:14px">
                  <div class="inline mr">
                    {{ NameLocation }}
                  </div>

                  <i
                    :class="transport.inter.dropdown_icon"
                    aria-hidden="true"
                    v-if="this.Isclick.isclick == 0"
                  >
                  </i>
                  <i
                    :class="transport.inter.dropup_icon"
                    aria-hidden="true"
                    v-else
                  >
                  </i>
                </span>
                <provinces-component
                  v-if="Isclick.isclick"
                  :provinces="transport.provinces"
                  @Name="ChangeLocation($event)"
                />
              </div>
            </div>
            <!-- end vận chuyển từ -->
            <!--  -->
            <!--start phí vận chuyển -->
            <div class="flex center" name="fee">
              <div class="transport-item">{{ transport.inter.fee }}</div>
              <div name="number" class="dropdown" @click="ChangeHover()">
                {{ addcurrency(transport.inter.fee_nums) }}
                <i :class="transport.inter.dropdown_icon" aria-hidden="true">
                </i>
                <transport-component
                  v-if="this.Ishover.ishover"
                  :transport_component="transport.transport_component"
                />
              </div>
            </div>

            <!-- end phí vận chuyển -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Help from "../../../../helpers/helpFunction.js";
import TransportComponent from "./TransportComponent/TransportComponent.vue";
import ProvincesComponent from "./ProvincesComponent/ProvincesComponent.vue";
export default {
  components: {
    "transport-component": TransportComponent,
    "provinces-component": ProvincesComponent
  },
  mixins: [Help],
  props: {
    transport: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      currency: "₫",
      Ishover: { ishover: false },
      Isclick: { isclick: 0 },
      Location: {
        ward_name: this.transport.inter.default.ward_name,
        province_name: this.transport.inter.default.province_name
      }
    };
  },
  computed: {
    NameLocation: function() {
      return this.Location.ward_name + ", " + this.Location.province_name;
    }
  },
  watch: {
    Isclick: function() {}
  },
  methods: {
    ChangeLocation: function(e) {
      this.Location.ward_name = e.ward_name;
      this.Location.province_name = e.province_name;
      this.$set(this.Isclick, "isclick", 0);
    },
    ChangeHover: function() {
      this.$set(this.Ishover, "ishover", !this.Ishover.ishover);
    },
    ChangeClick: function() {
      this.$set(this.Isclick, "isclick", !this.Isclick.isclick);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../Style/Style__ShowProductRight.scss";
$font-size: 14px;
div {
  font-size: $font-size;
}
p {
  font-size: $font-size;
  margin-bottom: 0;
}

.transport-item {
  align-items: center;
  font-size: 14px;
  color: #636363;
  width: 110px;
  margin-right: 10px;
  text-transform: capitalize;
}
.icon {
  &_truck {
    width: 25px;
    height: 15px;
  }
  &_plane {
    width: 25px;
    font-size: 20px;
    padding: 2px;
  }
}
.dropdown {
  position: relative;
}
.dropdown:hover {
  &:hover {
    color: #ee4d2d;
    cursor: pointer;
  }
}
.relative {
  position: relative;
}
.inline {
  display: inline;
}
</style>
