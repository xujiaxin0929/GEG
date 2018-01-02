var roomchoice_parent = $('#rmt_roomchoice_32'),
roomchoice_swiper = roomchoice_parent.find('.swiper-container'),
roomchoice_control = roomchoice_parent.find('.control');
new Swiper(roomchoice_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 34,
    slidesPerView: 3,
    prevButton: roomchoice_parent.find('.left'),
    nextButton: roomchoice_parent.find('.right'),
    loop:true,
    simulateTouch : false,
    breakpoints: {
        767: {
            //xs
            slidesPerView: 1,
            simulateTouch : true
        },
        991: {
            //sm
            slidesPerView: 2,
            simulateTouch : true
        },
        1199: {
            //md
            slidesPerView: 3
        },
    },
    onInit: function(swiper) {
      roomchoice_control.show();
      if($(window).width() < 767) {
        swiper.slides.length <= swiper.params.slidesPerView ? roomchoice_control.hide() : roomchoice_control.show();
      }
    },
    onAfterResize: function(swiper) {
      roomchoice_control.show();
      if($(window).width() < 767) {
        swiper.slides.length <= swiper.params.slidesPerView ? roomchoice_control.hide() : roomchoice_control.show();
      }
    }
})
