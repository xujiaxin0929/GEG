var hotel_more_parent = $('#hotel_more'),
hotel_more_swiper = hotel_more_parent.find('.swiper-container'),
hotel_more_control = hotel_more_parent.find('.control');
new Swiper(hotel_more_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: hotel_more_parent.find('.left'),
    nextButton: hotel_more_parent.find('.right'),
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
        swiper.slides.length <= swiper.params.slidesPerView ? hotel_more_control.hide() : hotel_more_control.show();
      }else{
        hotel_more_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? hotel_more_control.hide() : hotel_more_control.show();
      }else if(hotel_more_control.is(':visible')){
        hotel_more_control.hide();
      }
    }
})
