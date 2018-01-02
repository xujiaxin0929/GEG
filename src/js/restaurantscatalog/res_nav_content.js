$(function () {
    $('.tab_bar>li').show();
    $('.tab_bar .tab_common').on('click', function (e) {
        e.preventDefault();
        // alert(1)
        // 
        var clientWidth = $(window).width();
        // alert(clientWidth)
        if (clientWidth > 991) {
            $(this).addClass('active').siblings().removeClass('active');
        } else {
            $('#tab_show').siblings().toggleClass('m_show');
            $('.tab_bar .m_tab_check').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active');
                var current_val = $(this).text();
                $('#tab_show a').html(current_val);
            })
        }
        

    })



    
    // if (navigator.userAgent.match(/(i{Phone|iPod|Android|ios|iPad)/i)) {
    //     //  alert(1)
    //     // mobeil()
    // } else {
    //     pc()
    // }
    // $(window).resize(function () {
    //     var clientWidth = $(window).width();
    //     if (clientWidth > 991) {
    //         pc();
    //     } else {
    //         mobeil();
    //     }
    // })

    // function mobeil() {
    //     $('#tab_show').addClass('active').siblings().removeClass().hide();
    //     $('#tab_show').on('click', function (e) {
    //         e.preventDefault();
    //         $(this).siblings().toggle();

    //     })
    // }

    // function pc() {
    //     $('.tab_bar>li').show();
    //     $('.tab_bar>li').on('click', function (e) {
    //         e.preventDefault();
    //         $(this).addClass('active').siblings().removeClass();

    //     })
    // }





    // var test = $('.test');
    // function stopDefault(e) {
    //     if (e && e.preventDefault)
    //         e.preventDefault();
    //     else
    //         window.event.returnValue = false;
    // }
    // test.onclick = function (e) {
    //     stopDefault(e);
    // }







})