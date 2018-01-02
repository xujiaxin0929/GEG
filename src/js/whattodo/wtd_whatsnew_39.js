
var whatsnew_parent = $('#wtd_whatsnew_39'),
whatsnew_swiper = whatsnew_parent.find('.swiper-container'),
whatsnew_control = whatsnew_parent.find('.control');
new Swiper(whatsnew_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: whatsnew_parent.find('.left'),
    nextButton: whatsnew_parent.find('.right'),
    observer:true,
    observeParent:true,
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
        },
    },
    onInit: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? whatsnew_control.hide() : whatsnew_control.show();
      }else {
        whatsnew_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? whatsnew_control.hide() : whatsnew_control.show();
      }else if(whatsnew_control.is(':visible')){
        whatsnew_control.hide();
      }
    }
})
