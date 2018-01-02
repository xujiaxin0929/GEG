
$(document).ready(function () {


    //PC版 hover
    var load_more_click = 1;
    // var winHeight = 0;
    
    load_more(load_more_click);

    $(".exc_load_more_btn").mouseover(function () {
        // load_more_click++;
        if (load_more_click == 1) {
            load_more_click = 2
        }
        load_more(load_more_click);
        console.log(load_more_click)
    });
    $(".exc_load_more_btn").mouseout(function () {
        load_more_click++;
        // console.log(load_more_click)
    });


    /**
     * M版 思路： 
     * 获取加载更多offset 
     * 判断距离
     * 判断是否改变 
     * 调用load_more
     */

    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
        $(window).scroll(function () {
            var btnTop = $(".exc_load_more_btn").offset().top;
            var par = parseInt(btnTop) - 200;
             var winHeight = $(window).scrollTop();
            if (par <= winHeight) {
                load_more_click++
                load_more(load_more_click);
            }
        })


    }


    /**
     * 思路： 
     * all none
     * 存储所有的个数 选择需要一次显示的数量
     * 循环给需要显示的添加block
     * 将none的个数计算出来 添加到加载更多后
     * 如果没有none的 隐藏加载更多
     * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
     */
    function load_more(load_more_click) {
        $(".exc_load_more .items").removeClass("ok");
        var load_more_lg = $(".exc_load_more .items").length;
        var j = 6 * load_more_click;
        for (var i = 0; i <= load_more_lg; i++) {
            if (i < j) {
                $(".exc_load_more .items:eq(" + i + ")").addClass("ok");
            }
        }

        // load_more_click++;

        var load_more_show = $(".exc_load_more .items").length;
        var load_more_ok = $(".exc_load_more .items.ok").length;
        var remaing_cunt = load_more_show - load_more_ok;

        $(".exc_load_more_btn span").html(remaing_cunt);


        if (remaing_cunt == 0) {
            $(".exc_load_more_btn").hide();
        }
        else {
            $(".exc_load_more_btn").show();
        }
    }



    var _video_youtube = `<iframe height="100%" width="100%" src='http://player.youku.com/embed/XMjczMDI5NzUyMA==' frameborder=0 'allowfullscreen'></iframe>`;
    var _video_youku = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZJDMWVZta3M" frameborder="0" allowfullscreen></iframe>`;
     var width ;
     var height ;
     var initwidth = 5000;
     var initheight = 5000 ;

    //  initwidth = $(window).width();
    //  initheight = $(window).height();
    //  $(window).on('resize',function(){
    //     //  alert(1)
    //     width = $(window).width();
    //     height = $(window).height();
    //     initwidth = width;
    //     initheight = height;
    //  })
    $('.share_youtube').on('click', function (e) {
        e.preventDefault(); 
        $('.video_show').fadeIn();
        $('.video_show .video_show_content').html(_video_youtube);
        $('.video_hide').fadeIn().css({
            'height': initheight + 'px',
            'width': initwidth + 'px'
        })
    })

     $('.share_youku').on('click', function (e) {
         e.preventDefault();
        var width = $(window).width();
        var height = $(window).height();
        $('.video_show').fadeIn();
        $('.video_show .video_show_content').html(_video_youku);
        $('.video_hide').fadeIn().css({
            'height': initheight + 'px',
            'width': initwidth + 'px'
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






});

