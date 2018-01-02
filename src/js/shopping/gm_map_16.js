$(document).ready(function () {


    $(function(){
       $(".tab_check_box").on("click","div",function(){
         var index = $(this).index();
         $(this).addClass("active").siblings().removeClass("active");
        
         $('.wrap').find('a').eq(index).show().siblings().hide();
        
         
       })
    })



})