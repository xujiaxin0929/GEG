var hotel_discount_parent = $('#hotel_discount'),
hotel_discount_swiper = hotel_discount_parent.find('.swiper-container'),
hotel_discount_control = hotel_discount_parent.find('.control');
new Swiper(hotel_discount_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: hotel_discount_parent.find('.left'),
    nextButton: hotel_discount_parent.find('.right'),
    loop:true,
    simulateTouch : false,
    breakpoints: {
        500: {
            //xs
            slidesPerView: 1
        },
        991: {
            //sm
            slidesPerView: 2
        },
        1199: {
            //md
            slidesPerView: 3
        }
    },
    onInit: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? hotel_discount_control.hide() : hotel_discount_control.show();
      }else{
        hotel_discount_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? hotel_discount_control.hide() : hotel_discount_control.show();
      }else if(hotel_discount_control.is(':visible')){
        hotel_discount_control.hide();
      }
    }
})
