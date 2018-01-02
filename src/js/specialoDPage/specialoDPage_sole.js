var discount_parent = $('#specialoDPage_sole'),
discount_swiper = discount_parent.find('.swiper-container'),
discount_control = discount_parent.find('.control');
new Swiper(discount_swiper, {
    spaceBetween: 30,
    slidesPerView: 3,
    prevButton: discount_parent.find('.left'),
    nextButton: discount_parent.find('.right'),
    breakpoints: {
        767: {
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
        swiper.slides.length <= swiper.params.slidesPerView ? discount_control.hide() : discount_control.show();
    },
    onAfterResize: function(swiper) {
        swiper.slides.length <= swiper.params.slidesPerView ? discount_control.hide() : discount_control.show();
    }
})
