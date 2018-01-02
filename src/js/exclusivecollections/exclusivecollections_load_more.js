
$(document).ready(function () {


    //PC版 hover
    var load_more_click = 1;
    // var winHeight = 0;

    load_more(load_more_click);

    //假切换
    $('.tab_common a').on('click', function () {

        var dataId = $(this).data('title');
        if (dataId != 1) {
            load_more_click = 1 ;
            // alert(load_more_click);
            change_more(load_more_click, dataId)
            load_more_click++;
        } else {
            load_more(load_more_click);
        }

    })

    // $(".exc_load_more_btn").mouseover(function () {
    //     // load_more_click++;
    //     if (load_more_click == 1) {
    //         load_more_click = 2
    //     }
    //     load_more(load_more_click);
    //     console.log(load_more_click)
    // });
    // $(".exc_load_more_btn").mouseout(function () {
    //     load_more_click++;
    //     // console.log(load_more_click)
    // });

    // var clear = $(".exc_load_more .ok").length;
    // for (var i = 0; i <= clear; i++) {
    //     if (i%4 == 0) {
    //         $(".exc_load_more .ok").eq(i).css("clear","both");
    //     }
    // }

    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();  //页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        // var offsetTop = $(".exc_load_more_btn").offset().top;  //目标相对于document顶部的位置
        var offsetTop = $('#gm_footer_section').offset().top;

        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { 
            if (load_more_click == 1) {
                load_more_click = 2
            }
            setTimeout(function() {
                load_more(load_more_click);
                load_more_click++;
            },350)
        }
    })
    /**
     * M版 思路： 
     * 获取加载更多offset 
     * 判断距离
     * 判断是否改变 
     * 调用load_more
     */



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
        var j = 8 * load_more_click;
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

    function change_more(load_more_click, dataId) {
        $(".exc_load_more .items").removeClass("ok");
        var load_more_lg = $(".exc_load_more .items").length;
        var j = dataId * load_more_click;
        for (var i = 0; i <= load_more_lg; i++) {
            if (i < j) {
                var q = i + dataId;
                $(".exc_load_more .items:eq(" + q + ")").addClass("ok");
            }
        }

        $(".exc_load_more_btn").hide();

    }






});
