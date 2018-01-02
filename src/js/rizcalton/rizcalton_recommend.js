var _parent = $('#rizcalton_recommend');
new Swiper(_parent.find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: _parent.find('.left'),
    nextButton: _parent.find('.right'),
    onAfterResize: function(swiper) {
      if(swiper.slides.length <= swiper.params.slidesPerView) {
        _parent.find('.control').hide();
      }else{
        _parent.find('.control').show();
      }
    },
    onInit: function(swiper) {
      if(swiper.slides.length <= swiper.params.slidesPerView) {
        _parent.find('.control').hide();
      }else{
        _parent.find('.control').show();
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
