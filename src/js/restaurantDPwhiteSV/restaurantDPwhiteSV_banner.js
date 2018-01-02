var _parent = $('#restaurantDPwhiteSV_banner');
new Swiper(_parent.find('.swiper-container'), {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    loop:true,
    paginationClickable:true,
    prevButton:_parent.find('.left'),
    nextButton:_parent.find('.right'),
    pagination:_parent.find('.swiper-pagination'),
})
