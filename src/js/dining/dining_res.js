new Swiper($('#dining_res').find('.swiper-container'), {
    centeredSlides: false,
    spaceBetween: 50,
    loop: true,
    prevButton: $('#dining_res').find('.left'),
    nextButton: $('#dining_res').find('.right')
})

$(function () {
    var _video_content = `<iframe height=100% width=100% src='http://player.youku.com/embed/XMjczMDI5NzUyMA==' frameborder=0 'allowfullscreen'></iframe>`;
    var width ;
     var height ;
     var initwidth = 5000;
     var initheight = 5000 ;
    $('.share_youtube').on('click', function () {
        var width = $(window).width();
        var height = $(window).height();
        $('.video_show').fadeIn();
        $('.video_show .video_show_content').html(_video_content);
        $('.video_hide').fadeIn().css({
            'height': initheight + 'px',
            'width':initwidth + 'px'
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
