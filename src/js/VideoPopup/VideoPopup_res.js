new Swiper($('#VideoPopup_res').find('.swiper-container'), {
    slidesPerView: 'auto',
    centeredSlides: false,
    spaceBetween: 50,
    loop: true,
    prevButton: $('#VideoPopup_res').find('.left'),
    nextButton: $('#VideoPopup_res').find('.right')
})

$(function () {
    var _video_content = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Kr-m9ObCbW8" frameborder="0" allowfullscreen></iframe>`;
    $('.share_youtube').on('click', function () {
        var width = $(window).width();
        var height = $(window).height();
        $('.video_show').fadeIn();
        $('.video_show .video_show_content').html(_video_content);
        $('.video_hide').fadeIn().css({
            'height': height,
            'width': width
        })
    })
    $('.video_hide').on('click', function () {

        $('.video_show').fadeOut();
        $('.video_show .video_show_content').html(' ');
        $('.video_hide').fadeOut();

    })
    $('.video_btn').on('click', function () {
        $('.video_show').fadeOut();
        $('.video_show .video_show_content').html(' ');
        $('.video_hide').fadeOut();
    })


})
