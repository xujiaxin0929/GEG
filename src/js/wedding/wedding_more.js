var wedding_more_parent = $('#wedding_more'),
wedding_more_container = wedding_more_parent.find('.swiper-container'),
wedding_more_control = wedding_more_parent.find('.control');
new Swiper(wedding_more_container, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    loop:true,
    simulateTouch : false,
    prevButton: wedding_more_parent.find('.left'),
    nextButton: wedding_more_parent.find('.right'),
    onInit: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? wedding_more_control.hide() : wedding_more_control.show();
      }else{
        wedding_more_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? wedding_more_control.hide() : wedding_more_control.show();
      }else if(wedding_more_control.is(':visible')){
        wedding_more_control.hide();
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
