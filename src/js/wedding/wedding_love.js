var love_parent = $('#wedding_love'),
love_swiper = love_parent.find('.swiper-container'),
love_control = love_parent.find('.control');
new Swiper(love_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: love_parent.find('.left'),
    nextButton: love_parent.find('.right'),
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
        swiper.slides.length <= swiper.params.slidesPerView ? love_control.hide() : love_control.show();
      }else{
        love_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? love_control.hide() : love_control.show();
      }else if(love_control.is(':visible')){
        love_control.hide();
      }
    }
})
