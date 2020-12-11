<template>
  <div class="main">
    <div
      class="background background__size"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <b-form>
        <div class="wrapper">
          <div class="form-login__title">
            <div class="form-login__title--wrapper">
              <div class="form-login__title--text">Đăng nhập</div>
            </div>
          </div>
          <div class="form-login__main">
            <div class="form-login__main--wrapper">
              <div class="form-login__main--input">
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  :state="handleInputText"
                  type="text"
                  required
                  placeholder="Email/Số điện thoại/Tên đăng nhập"
                ></b-form-input>
              </div>
              <b-form-invalid-feedback :state="handleInputText">
                Vui lòng điền vào mục này.
              </b-form-invalid-feedback>
            </div>
            <div class="form-login__main--wrapper">
              <div class="form-login__main--input">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  :state="handlePassword"
                  :type="isShow === true ? 'text' : 'password'"
                  required
                  placeholder="Mật khẩu"
                ></b-form-input>
                <div @click="isShow = !isShow" class="checked">
                  <b-icon icon="eye" variant="dark"></b-icon>
                </div>
              </div>
              <b-form-invalid-feedback :state="handlePassword">
                Vui lòng điền vào mục này.
              </b-form-invalid-feedback>
            </div>
            <b-button
              class="button button__size button__color disable"
              :class="handleInput()"
              type="submit"
              disable
              >Đăng nhập</b-button
            >
            <div class="form-login__options">
              <a href="" class="form-login__option">Quên mật khẩu</a>
              <a href="" class="form-login__option">Đăng nhập với SMS</a>
            </div>
            <div class="form-login__login-social">
              <div class="form-login__login-social-line">
                <div class="line"></div>
                <div class="text">HOẶC</div>
                <div class="line"></div>
              </div>
              <div class="form-login__login-social-icon">
                <b-button
                  class="button-icon button-icon__size button-icon__color-facebook"
                  type="submit"
                  disable
                >
                  <div class="form-login__login-social-icon--wrapper">
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
                    class="form-login__login-social-icon--wrapper form-login__login-social-icon--background-google"
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
                  <div class="form-login__login-social-icon--wrapper">
                    <div
                      class="icon social-white-apple-png"
                      :style="{ backgroundImage: 'url(' + icon + ')' }"
                    ></div>
                  </div>
                  <div class="social">Apple</div>
                </b-button>
              </div>
            </div>
          </div>
          <div class="form-login__bottom">
            <div class="form-login__bottom--wrapper">
              <span class="form-login__bottom--title"
                >Bạn mới biết đến Shopee?</span
              >
              <router-link
                tag="a"
                class="form-login__bottom--link-login"
                to="/register"
                >Đăng ký</router-link
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
        username: "",
        password: ""
      },
      isShow: false
    };
  },
  computed: {
    handleInputText() {
      if (this.form.username !== "") return true;
      if (this.form.username === "") return null;
      return false;
    },
    handlePassword() {
      if (this.form.password !== "") return true;
      if (this.form.password === "") return null;
      return false;
    }
  },
  methods: {
    handleInput() {
      if (this.form.username !== "" && this.form.password !== "") {
        return "enable";
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-MainLogin.scss";
</style>
