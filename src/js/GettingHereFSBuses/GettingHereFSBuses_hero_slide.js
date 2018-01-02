$(function () {

    $('.tab_bar>li').show();
    // $('.tab_bar .tab_common').on('click', function (e) {
    //     e.preventDefault();
    //     // alert(1)
    //     var clientWidth = $(window).width();
    //     // alert(clientWidth)
    //     if (clientWidth > 991) {
    //         $(this).addClass('active').siblings().removeClass('active');
    //     } else {
    //         $(this).addClass('active').siblings().removeClass('active');
    //         $('#tab_show').siblings().toggleClass('m_show');
    //     }


    // })

    $('.tab_bar').on('click',function(e){
        // alert(1)
        // e.preventDefault();
        e.stopPropagation();
        $('.tab_parking').toggleClass('m_show');
    })

    $('.tab_buses a').on('click',function(){
        $('.getting_Buses').show();
        $('.getting_Parking').hide();
    })
    $('.tab_parking a').on('click',function(){
        $('.getting_Buses').hide();
        $('.getting_Parking').show();
    })

    // var windowLocation = window.location.href;
    // // alert(windowLocation);

    // var newWindowLocation = windowLocation + '#Buses';
    // // alert(newWindowLocation);

    // var oldWindowLocation = GetQueryString("id")
    // // alert(oldWindowLocation)
    // if(oldWindowLocation == null){
    //     window.location.href = newWindowLocation
    // }

    

    // function GetQueryString(name) {
    //     var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    //     var r = window.location.search.substr(1).match(reg);
    //     if (r != null) return unescape(r[2]); return null;
    // }
    $('.get-content-show').on('click',function(){
        // alert(1)
        $('.get_content-hide').toggle();
    })



})