
$('#spamassage_banyanspa').find('.swiper-container').each(function() {
    new Swiper($(this), {
        pagination:$(this).find('.swiper-pagination'),
        paginationClickable: true,
        prevButton:'.left',
        nextButton:'.right'
    })
})
if($(window).width()>991){
  $('#spamassage_banyanspa').find('.swiper-container').hover(function() {
    $(this).find('.left').fadeIn();
    $(this).find('.right').fadeIn();
},function(){
    $(this).find('.left').fadeOut();
    $(this).find('.right').fadeOut();
});
}
