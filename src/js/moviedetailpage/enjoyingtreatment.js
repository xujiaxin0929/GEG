var enjoyingtreatment_parent = $('#enjoyingtreatment'),
enjoyingtreatment_swiper = enjoyingtreatment_parent.find('.swiper-container'),
enjoyingtreatment_control = enjoyingtreatment_parent.find('.control');
new Swiper(enjoyingtreatment_swiper, {
    slidesPerView: 'auto',
    spaceBetween: 30,
    slidesPerView: 3,
    loop:true,
    simulateTouch : false,
    prevButton: enjoyingtreatment_parent.find('.left'),
    nextButton: enjoyingtreatment_parent.find('.right'),
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
})
