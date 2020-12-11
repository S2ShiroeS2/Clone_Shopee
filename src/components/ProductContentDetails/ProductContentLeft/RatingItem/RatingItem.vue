<template>
  <div class="shop-product-rating">
    <a href="" class="shop-product-rating__avatar">
      <div class="shop-avatar">
        <div class="shop-avatar__placeholder">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      </div>
    </a>
    <div class="shop-product-rating__main">
      <a href="" class="shop-product-rating__author-name"> sallyjelly </a>
      <div class="shop-product-rating__rating">
        <i class="fa fa-star icon-rating-solid" aria-hidden="true"></i>
        <i class="fa fa-star icon-rating-solid" aria-hidden="true"></i>
        <i class="fa fa-star icon-rating-solid" aria-hidden="true"></i>
        <i class="fa fa-star icon-rating-solid" aria-hidden="true"></i>
        <i class="fa fa-star icon-rating-solid" aria-hidden="true"></i>
      </div>
      <span class="shop-product-rating__variation">
        Phân loại hàng: Đỏ,XL (68 - 82Kg)
      </span>
      <div class="shop-product-rating__content">
        Màu tối hơn hình shop đăng. Nhưng form dáng đẹp, rẻ. Shop gói hàng cẩn
        thận.
      </div>
      <div class="shop-product-rating__tags">
        <div class="shop-product-rating__tag">
          Chất lượng sản phẩm tuyệt vời
        </div>
        <div class="shop-product-rating__tag">
          Đóng gói sản phẩm rất đẹp và chắc chắn
        </div>
      </div>
      <div class="shop-product-rating__image-list-wrapper">
        <div class="rating-media-list">
          <div class="rating-media-list__container">
            <div
              @click="isZoom = !isZoom"
              class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
            >
              <div class="shop-rating-media-list-image__wrapper">
                <div
                  class="shop-rating-media-list-image__content"
                  :style="{ backgroundImage: 'url(' + image1 + ')' }"
                ></div>
              </div>
            </div>
            <div
              @click="isZoom = !isZoom"
              class="rating-media-list__image-wrapper rating-media-list__image-wrapper--inactive"
            >
              <div class="shop-rating-media-list-image__wrapper">
                <div
                  class="shop-rating-media-list-image__content"
                  :style="{ backgroundImage: 'url(' + image2 + ')' }"
                ></div>
              </div>
            </div>
          </div>
          <div
            class="rating-media-list__zoomed-image"
            :class="{
              'rating-media-list__zoomed-image--active': isZoom == true
            }"
          >
            <div
              class="rating-media-list-image-carousel"
              style="transition: all 0ms ease 0s; width: 262.578px"
            >
              <div class="rating-media-list-image-carousel__item-list-wrapper">
                <ul
                  class="rating-media-list-image-carousel__item-list"
                  :style="
                    `margin-left: ${x}px; margin-top: 0px; transition: all 500ms ease 0s;`
                  "
                >
                  <li
                    style="padding: 0px 0.625rem"
                    class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                  >
                    <img
                      src="https://cf.shopee.vn/file/39a8f5bc445940f285d70d983d72c07f"
                      alt=""
                      class="rating-media-list__zoomed-image-item"
                    />
                  </li>
                  <li
                    class="rating-media-list-image-carousel__item rating-media-list-image-carousel__item--fluid"
                  >
                    <img
                      src="https://cf.shopee.vn/file/b07e40dc3d0e38e840562eb92e686864"
                      alt=""
                      class="rating-media-list__zoomed-image-item"
                    />
                  </li>
                </ul>
              </div>
              <div
                @click="handlePrev()"
                class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--prev rating-media-list-carousel-arrow--hint"
                style="
                  opacity: 1;
                  visibility: visible;
                  transform: translateX(calc(-50% + 0px));
                "
              >
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div
                @click="handleNext()"
                class="rating-media-list-carousel-arrow rating-media-list-carousel-arrow--next rating-media-list-carousel-arrow--hint"
                style="
                  opacity: 1;
                  visibility: visible;
                  transform: translateX(calc(50% - 0px));
                "
              >
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shop-product-rating__time">2020-11-21 23:39</div>
      <div class="feedback-from-seller">
        <div class="feedback-from-seller__title">phản hồi của Người Bán</div>
        <div class="feedback-from-seller__content">
          FAVITI xin cảm ơn a/c đã ủng hộ sản phẩm của shop ạ. Thật tuyệt vời
          khi FAVITI đã làm anh/chị hài lòng. Shop sẽ luôn cố gắng làm anh/chị
          hài lòng và hài lòng hơn nữa ạ. Nếu có bất kỳ điều gì khiến mình chưa
          hài lòng. anh/chị có thể inbox cho shop, shop sẽ hỗ trợ mình sớm nhất
          nhé. Chúc anh/chị và gia đình mạnh khỏe và luôn có những trải nghiệm
          tuyệt vời nhất khi đến với FAVITI
        </div>
      </div>
      <div class="shop-product-rating__actions">
        <div class="shop-product-rating__like-button">
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
        </div>
        <div class="shop-product-rating__like-count">hữu ích?</div>
        <div class="shop-product-rating__report-menu-button">
          <div class="shop-product-rating__report-menu-button--dropdown">
            <div
              @click="statusReport = !statusReport"
              class="shop-product-rating__report-menu-button--item-header"
            >
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </div>
            <div
              class="shop-product-rating__report-menu-button--item-body"
              :class="{ active: statusReport === true }"
            >
              <div class="shop-product-rating__report-menu-dropdown">
                Báo cáo
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusReport: false,
      image1: "https://cf.shopee.vn/file/39a8f5bc445940f285d70d983d72c07f_tn",
      image2: "https://cf.shopee.vn/file/b07e40dc3d0e38e840562eb92e686864",
      x: 0,
      isZoom: false
    };
  },
  methods: {
    handlePrev() {
      if (this.x === -255.578) {
        this.x = this.x + 255.578;
      }
    },
    handleNext() {
      if (this.x === 0) {
        this.x = this.x - 255.578;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-RatingItem.scss";
</style>
