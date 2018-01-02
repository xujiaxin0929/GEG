
$(document).ready(function () {


    //PC版 hover
    var load_more_click = 1;
    // var winHeight = 0;
    var indexNum ;
    load_more(load_more_click);

    $('.tab_bar .tab_common').on('click',function(){
      
       indexNum  = $(this).index()
        
       $('.exc_load_index').eq(indexNum).removeClass('load_more_none').addClass('exc_load_more').siblings().removeClass('exc_load_more').addClass('load_more_none')
       load_more_click = 1;
        load_more(load_more_click);
    })
    //假切换
    // $('.tab_common a').on('click', function () {
    //     if (dataId != 1) {
    //         load_more_click = 1 ;
    //         // alert(load_more_click);
    //         // change_more(load_more_click, dataId)
    //         load_more_click++;
    //     } else {
    //         load_more(load_more_click);
    //     }

    // })



    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();  //页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        // var offsetTop = $(".exc_load_more_btn").offset().top;  //目标相对于document顶部的位置
        var offsetTop = $('#gm_footer_section').offset().top;

        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { 
            if (load_more_click == 1) {
                load_more_click = 2
            }
            load_more(load_more_click);
            load_more_click++;
        }
    })


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

    // function change_more(load_more_click, dataId) {
    //     $(".exc_load_more .items").removeClass("ok");
    //     var load_more_lg = $(".exc_load_more .items").length;
    //     var j = dataId * load_more_click;
    //     for (var i = 0; i <= load_more_lg; i++) {
    //         if (i < j) {
    //             var q = i + dataId;
    //             $(".exc_load_more .items:eq(" + q + ")").addClass("ok");
    //         }
    //     }

    //     $(".exc_load_more_btn").hide();

    // }






});
