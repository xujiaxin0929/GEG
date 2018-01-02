new Swiper($('#VideoPopup_ads').find('.swiper-container'), {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 50,
    loop:true,
    paginationClickable:true,
    prevButton:$('#VideoPopup_ads').find('.left'),
    nextButton:$('#VideoPopup_ads').find('.right'),
    pagination:$('#VideoPopup_ads').find('.swiper-pagination'),
})