new Swiper('.temp3-swiper-1', {
    pagination:'.temp3-swiper-1-pagination',
    paginationClickable: true,
})
$('#hotel_wets_23').find('.container-fluid').find('.swiper-container').each(function() {
    new Swiper($(this), {
        pagination:$(this).find('.swiper-pagination'),
        paginationClickable: true,
        loop: true,
        prevButton:'.left',
        nextButton:'.right'
    })
})
if($(window).width()>991){
  $('#hotel_wets_23').find('.container-fluid').find('.swiper-container').hover(function() {
    $(this).find('.left').fadeIn();
    $(this).find('.right').fadeIn();
},function(){
    $(this).find('.left').fadeOut();
    $(this).find('.right').fadeOut();
});
}