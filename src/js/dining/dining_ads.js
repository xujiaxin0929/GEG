new Swiper($('#dining_ads').find('.swiper-container'), {
    centeredSlides: true,
    spaceBetween: 50,
    // loop:true,
    paginationClickable:true,
    prevButton:$('#dining_ads').find('.left'),
    nextButton:$('#dining_ads').find('.right'),
    pagination:$('#dining_ads').find('.swiper-pagination'),
})