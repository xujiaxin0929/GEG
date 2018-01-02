'use strict';

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

new Swiper($('#entertainment_recommend').find('.swiper-container'), (_ref = {
  slidesPerView: 'auto',
  spaceBetween: 30
}, _defineProperty(_ref, 'slidesPerView', 3), _defineProperty(_ref, 'prevButton', $('#entertainment_recommend').find('.left')), _defineProperty(_ref, 'nextButton', $('#entertainment_recommend').find('.right')), _defineProperty(_ref, 'breakpoints', {
  500: {
    //xs
    slidesPerView: 1
  },
  767: {
    //xs
    slidesPerView: 2
  },
  991: {
    //sm
    slidesPerView: 3
  },
  1199: {
    //md
    slidesPerView: 3
  }
}), _ref));
//# sourceMappingURL=../maps/hotel_more.js.map
