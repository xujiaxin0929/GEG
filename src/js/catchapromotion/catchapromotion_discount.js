var discount_parent = $('#catchapromotion_discount'),
discount_swiper = discount_parent.find('.swiper-container'),
discount_control = discount_parent.find('.control');
new Swiper(discount_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    noSwiping : true,
    prevButton: discount_parent.find('.left'),
    nextButton: discount_parent.find('.right'),
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
        swiper.slides.length <= swiper.params.slidesPerView ? discount_control.hide() : discount_control.show();
      }else{
        discount_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? discount_control.hide() : discount_control.show();
      }else if(discount_control.is(':visible')){
        discount_control.hide();
      }
    }
})
