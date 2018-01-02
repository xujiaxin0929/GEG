var wedding_parent = $('#wedding_recommend'),
wedding_swiper = wedding_parent.find('.swiper-container'),
wedding_control = wedding_parent.find('.control');
new Swiper(wedding_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop:true,
    simulateTouch : false,
    slidesPerView: 3,
    prevButton: wedding_parent.find('.left'),
    nextButton: wedding_parent.find('.right'),
    onInit: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? wedding_control.hide() : wedding_control.show();
      }else{
        wedding_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? wedding_control.hide() : wedding_control.show();
      }else if(wedding_control.is(':visible')){
        wedding_control.hide();
      }
    },
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
    }
});
