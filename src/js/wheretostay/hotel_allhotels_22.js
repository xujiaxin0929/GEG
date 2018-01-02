
$('#hotel_allhotels_22').find('.container-fluid').find('.swiper-container').each(function() {
    new Swiper($(this), {
        pagination:$(this).find('.swiper-pagination'),
        paginationClickable: true,
        loop: true,
        prevButton:'.left',
        nextButton:'.right'
    })
})
if($(window).width()>991){
  $('#hotel_allhotels_22').find('.container-fluid').find('.swiper-container').hover(function() {
    $(this).find('.left').fadeIn();
    $(this).find('.right').fadeIn();
},function(){
    $(this).find('.left').fadeOut();
    $(this).find('.right').fadeOut();
});
}
