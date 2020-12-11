<template>
  <div class="shop-info shop-info__size">
    <div class="shop-info__block-left">
      <a class="shop-info__link" href="">
        <div class="shop-info__avatar shop-info__avatar--size">
          <div class="shop-info__avatar--placeholder">
            <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
          <img
            class="shop-info__avatar--image"
            src="https://cf.shopee.vn/file/1173f8366d8b3fef0954fa4b5dda7e0f_tn"
            alt=""
          />
        </div>
        <div class="shop-info__avatar--label">
          <div
            class="shop-info__avatar--label-text shop-info__avatar--label-size"
          >
            Yêu thích
          </div>
        </div>
      </a>
      <div class="shop-info__owner">
        <div class="shop-info__owner--name">ngoctud09vt2</div>
        <div class="shop-info__owner--status">Online 34 phút trước</div>
        <div class="shop-info__owner--contact">
          <button class="button button__chat-color button__chat-size">
            <i class="fa fa-comments" aria-hidden="true"></i>
            Chat ngay
          </button>
          <a href="" class="button button__shop-color button__shop-size">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            Xem shop
          </a>
        </div>
      </div>
    </div>
    <div class="shop-info__block-right">
      <div class="format-column">
        <div class="space-margin cursor">
          <label class="title">Đánh giá</label>
          <label class="result">61,1k</label>
        </div>
        <a class="display-info space-margin" href="">
          <label class="title">Sản phẩm</label>
          <label class="result">172</label>
        </a>
      </div>
      <div class="format-column">
        <div class="space-margin cursor">
          <label class="title">tỉ lệ phản hồi</label>
          <label class="result">87%</label>
        </div>
        <div class="space-margin cursor">
          <label class="title">thời gian phản hồi</label>
          <label class="result">trong vài giờ</label>
        </div>
      </div>
      <div class="format-column">
        <div class="space-margin cursor">
          <label class="title">tham gia</label>
          <label class="result">3 năm trước</label>
        </div>
        <div class="space-margin cursor">
          <label class="title">Người theo dõi</label>
          <label class="result">147,4k</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./Styles/Style-ShopInfo.scss";
</style>
