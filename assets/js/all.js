"use strict";

function initSwiper() {
  var swiper = new Swiper(".SeaScapes", {
    /*  預設要顯示幾個卡片 */
    // slidesPerView: 1,

    /* 卡片元素的間隔 */
    // spaceBetween: 24,

    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
      // 768: {
      //   slidesPerView: 2
      // },

      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
      // 992: {
      //   slidesPerView: 4
      // },

      /* 更小時都顯示 1 欄 */
    },

    /*自動播放 */
    autoplay: {
      delay: 1500
    }
    /*輪播按鈕*/
    // pagination: {
    //   /* 我想將分頁圓點綁在哪個 class */
    //   el: ".swiper-pagination",
    //   /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
    //   clickable: true
    // }

  });
}
/* 觸發自己定義的函式 */


initSwiper();
//# sourceMappingURL=all.js.map
