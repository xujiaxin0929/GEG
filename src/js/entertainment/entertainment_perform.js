var entertainment_perform_parent = $('#entertainment_perform'),
entertainment_perform_swiper = entertainment_perform_parent.find('.swiper-container'),
entertainment_perform_control = entertainment_perform_parent.find('.control');
new Swiper(entertainment_perform_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: entertainment_perform_parent.find('.left'),
    nextButton: entertainment_perform_parent.find('.right'),
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
        swiper.slides.length <= swiper.params.slidesPerView ? entertainment_perform_control.hide() : entertainment_perform_control.show();
      }else{
        entertainment_perform_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? entertainment_perform_control.hide() : entertainment_perform_control.show();
      }else if(entertainment_perform_control.is(':visible')){
        entertainment_perform_control.hide();
      }
    }
})

