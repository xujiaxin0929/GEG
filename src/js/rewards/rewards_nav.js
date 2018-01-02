$(function () {



    // $('.nav-tabs li').on('click',function(){

    //     var indexNum = $(this).index();

    //     if(indexNum == 4){
    //         $('#rewards_all_2').removeClass('rewards_box_none');
    //         $('#rewards_all_1').addClass('rewards_box_none');
    //     }else{
    //          $('#rewards_all_2').addClass('rewards_box_none');
    //         $('#rewards_all_1').removeClass('rewards_box_none');
    //     }

    // })

    $('.tab_bar>li').show();
    $('.tab_bar .tab_common').on('click', function (e) {
        e.preventDefault();
        // alert(1)
        var indexNum = $(this).index();
        var clientWidth = $(window).width();
         $('.rewards_common').eq(indexNum).removeClass('rewards_box_none').siblings().addClass('rewards_box_none')
        //        if(indexNum == 4){
        //     $('.rewards_all_2').removeClass('rewards_box_none');
        //     $('.rewards_all_1').addClass('rewards_box_none');
        // }else{
        //      $('.rewards_all_2').addClass('rewards_box_none');
        //     $('.rewards_all_1').removeClass('rewards_box_none');
        // }
        // alert(clientWidth)
        if (clientWidth > 991) {
            $(this).addClass('active').siblings().removeClass('active');
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            $('#tab_show').siblings().toggleClass('m_show');
        }
    });


})