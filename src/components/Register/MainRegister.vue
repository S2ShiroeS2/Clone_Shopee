<template>
  <div class="main">
    <div
      class="background background__size"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <b-form>
        <div class="wrapper">
          <div class="form-register__title">
            <div class="form-register__title--wrapper">
              <div class="form-register__title--text">Đăng ký</div>
            </div>
          </div>
          <div class="form-register__main">
            <div class="form-register__main--wrapper">
              <div class="form-register__main--input">
                <b-form-input
                  id="input-1"
                  v-model="form.phone"
                  :state="handleValidatePhone"
                  type="tel"
                  required
                  placeholder="Số điện thoại"
                ></b-form-input>
                <div v-if="handleValidatePhone == true" class="checked">
                  <i class="fa fa-check-circle-o" aria-hidden="true"></i>
                </div>
              </div>
              <div class="show-message">
                <b-form-invalid-feedback :state="handleValidatePhone">
                  Vui lòng nhập đúng số điện thoại.
                </b-form-invalid-feedback>
              </div>
            </div>
            <b-button
              class="button button__size button__color disable"
              :class="{ enable: form.phone }"
              type="submit"
              disable
              >Tiếp theo</b-button
            >
            <div class="form-register__register-social">
              <div class="form-register__register-social-line">
                <div class="line"></div>
                <div class="text">HOẶC</div>
                <div class="line"></div>
              </div>
              <div class="form-register__register-social-icon">
                <b-button
                  class="button-icon button-icon__size button-icon__color-facebook"
                  type="submit"
                  disable
                >
                  <div class="form-register__register-social-icon--wrapper">
                    <div
                      class="icon social-white-fb-png"
                      :style="{ backgroundImage: 'url(' + icon + ')' }"
                    ></div>
                  </div>
                  <div class="social">Facebook</div>
                </b-button>
                <b-button
                  class="button-icon button-icon__size button-icon__color-google"
                  type="submit"
                  disable
                >
                  <div
                    class="form-register__register-social-icon--wrapper form-register__register-social-icon--background-google"
                  >
                    <div
                      class="icon social-white-google-png"
                      :style="{ backgroundImage: 'url(' + icon + ')' }"
                    ></div>
                  </div>
                  <div class="social">Google</div>
                </b-button>
                <b-button
                  class="button-icon button-icon__size button-icon__color-apple"
                  type="submit"
                  disable
                >
                  <div class="form-register__register-social-icon--wrapper">
                    <div
                      class="icon social-white-apple-png"
                      :style="{ backgroundImage: 'url(' + icon + ')' }"
                    ></div>
                  </div>
                  <div class="social">Apple</div>
                </b-button>
              </div>
            </div>
            <div class="form-register__note">
              <span class="form-register__note--top"
                >Bằng việc đăng kí, bạn đã đồng ý với Shopee về</span
              ><a href="" class="form-register__note--link"
                >Điều khoản dịch vụ</a
              >
              <span class="form-register__note--special-symbols">&</span>
              <a href="" class="form-register__note--link"
                >Chính sách bảo mật</a
              >
            </div>
          </div>
          <div class="form-register__bottom">
            <div class="form-register__bottom--wrapper">
              <span class="form-register__bottom--title"
                >Bạn đã có tài khoản?</span
              >
              <router-link
                tag="a"
                class="form-register__bottom--link-register"
                to="/login"
                >Đăng nhập</router-link
              >
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: "https://cf.shopee.vn/file/e963a4f6d9136744cf6a888b28c31706",
      icon:
        "https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/dee4c9b853f18a1ce0571f6600ad2c5d.png",
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
        phone: null
      }
    };
  },
  computed: {
    handleValidatePhone() {
      let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if (this.form.phone == null) {
        return null;
      } else {
        if (this.form.phone != null) {
          if (vnf_regex.test(this.form.phone) === false) {
            return false;
          }
          return true;
        }
      }
      return null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-MainRegister.scss";
</style>
