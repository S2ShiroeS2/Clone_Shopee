export default {
  methods: {
    currencyFormatting: function(price) {
      let priceFormat = (price / 100000).toFixed(0).replace(".", ",");
      return priceFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    // chia number cho 1000 => đổi số sang đơn vị k (VD: 10000 => 10k)
    // thêm dấu phẩy ngăn cách
    formatnumber: function(number) {
      let temp;
      if (number < 1000) temp = number;
      else temp = number / 1000 + "k";
      return temp
        .toString()
        .replace(".", ",")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    caculateProgress: function(stock, sold) {
      let total = Math.ceil(((stock - sold) * 100) / stock);
      return total;
    },
    addcurrency: function(a) {
      const numberFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND"
      });
      a = (a / 100000).toFixed(0).replace(".", ",");
      return numberFormat.format(a).replace(",", ".");
    },
    addcurrency_and_k: function(a) {
      const numberFormat = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "VND"
      });
      a = (a / 100000 / 1000).toFixed(0).replace(".", ",");
      return numberFormat.format(a).replace(",", ".") + "k";
    }
  }
};
