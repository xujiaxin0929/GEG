var movie_parent = $('#more_movie'),
movie_swiper = movie_parent.find('.swiper-container'),
movie_control = movie_parent.find('.control');
new Swiper(movie_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 4,
    loop:true,
    simulateTouch : false,
    pagination: '.swiper-pagination',
    prevButton: movie_swiper.find('.left'),
    nextButton: movie_swiper.find('.right'),
    breakpoints: {
        500: {
            //xs
            slidesPerView: 2,
            spaceBetween: 13
        },
        767: {
            //xs
            slidesPerView: 2,
            spaceBetween: 13
        },
        991: {
            //sm
            slidesPerView: 3
        },
        1199: {
            //md
            slidesPerView: 4
        },
    },
    onInit: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? movie_control.hide() : movie_control.show();
      }else{
        movie_control.hide();
      }
    },
    onAfterResize: function(swiper) {
      if($(window).width() < 991) {
        swiper.slides.length <= swiper.params.slidesPerView ? movie_control.hide() : movie_control.show();
      }else if(movie_control.is(':visible')){
        movie_control.hide();
      }
    }
})
