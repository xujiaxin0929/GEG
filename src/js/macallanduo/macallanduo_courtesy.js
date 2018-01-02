var courtesy_parent = $('#macallanduo_courtesy');
new Swiper(courtesy_parent.find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: courtesy_parent.find('.left'),
    nextButton: courtesy_parent.find('.right'),
    onAfterResize: function(swiper) {
      if(swiper.slides.length <= swiper.params.slidesPerView) {
        courtesy_parent.find('.control').hide();
      }else{
        courtesy_parent.find('.control').show();
      }
    },
    onInit: function(swiper) {
      if(swiper.slides.length <= swiper.params.slidesPerView) {
        courtesy_parent.find('.control').hide();
      }else{
        courtesy_parent.find('.control').show();
      }
    },
    breakpoints: {
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
            slidesPerView: 2
        },
        1199: {
            //md
            slidesPerView: 3
        },
    }
});
