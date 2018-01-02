var _parent = $('#wtd_testimonials');
new Swiper(_parent.find('.swiper-container'), {
    centeredSlides: true,
    spaceBetween: 50,
    loop:true,
    paginationClickable:true,
    prevButton:_parent.find('.left'),
    nextButton:_parent.find('.right'),
    pagination:_parent.find('.swiper-pagination'),
})
