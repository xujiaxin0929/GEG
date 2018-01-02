new Swiper($('#ex_product_list').find('.swiper-container'), {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: $('#ex_product_list').find('.left'),
    nextButton: $('#ex_product_list').find('.right'),
    breakpoints: {
        767: {
            //xs
            slidesPerView: 1
        },
        991: {
            //sm
            slidesPerView: 1
        },
        1199: {
            //md
            slidesPerView: 3
        },
    },
    onInit: function(swiper) {
      if(swiper.slides.length <= swiper.params.slidesPerView) {
        $('#ex_product_list').find('.left').hide();
        $('#ex_product_list').find('.right').hide();
      }
    }
})
