new Swiper($('#hotel_testimonials').find('.swiper-container'), {
    centeredSlides: true,
    spaceBetween: 50,
    loop:true,
    paginationClickable:true,
    prevButton:$('#hotel_testimonials').find('.left'),
    nextButton:$('#hotel_testimonials').find('.right'),
    pagination:$('#hotel_testimonials').find('.swiper-pagination'),
})
