var specialOffers_details_parent = $('#specialOffers_details_show'),
specialOffers_details_swiper = specialOffers_details_parent.find('.swiper-container'),
specialOffers_details_control = specialOffers_details_parent.find('.control');
new Swiper(specialOffers_details_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: specialOffers_details_parent.find('.left'),
    nextButton: specialOffers_details_parent.find('.right'),
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
        swiper.slides.length <= swiper.params.slidesPerView ? specialOffers_details_control.hide() : specialOffers_details_control.show();
      }else{
        specialOffers_details_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? specialOffers_details_control.hide() : specialOffers_details_control.show();
      }else if(specialOffers_details_control.is(':visible')){
        specialOffers_details_control.hide();
      }
    }
})
