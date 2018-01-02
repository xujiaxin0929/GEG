$(function () {


    $('.btn-order-from').on('click', function (e) {
        e.preventDefault();
        formValidate();
    })

    $('.join_name_input').on('blur', function () {
        name()
    })
    $('.join_email_input').on('blur', function () {
        email()
    })
    function formValidate() {
        name();
        email();
    }




    function email() {
        // 判断邮箱
        if ($.trim($('.join_email_input').val()).length == 0) {
            $(".error-email").css('display', 'block');
        } else {
            if (isEmail($.trim($('.join_email_input').val())) == false) {
                $(".error-email").css('display', 'block');
            } else {
                // alert($('.email').val())
                $(".error-email").css('display', 'none');
                // alert('邮箱验证成功')
            }
        }
    }
    function name() {
        //判断姓名
        if ($.trim($('.join_name_input').val()).length == 0) {
            $(".error-name").css('display', 'block');

        } else {
            if (isChinaName($.trim($('.join_name_input').val())) == false) {
                $(".error-name").css('display', 'block');

            } else {
                $(".error-name").css('display', 'none');
                // alert('姓名验证成功')
            }
        }
    }

    //正则邮箱
    function isEmail(email) {

        var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
        return pattern.test(email);
    }
    //正则姓名
    function isChinaName(name) {
        var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
        return pattern.test(name);
    }
    // function pd() {
    //     var email = $('.join_email_input').val();
    //     var name = $('.join_name_input').val();
    //     var reg = /^[\u4E00-\u9FA5]{2,4}$/;
    //     var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    //     if (!filter.test(email) || !reg.test(name)) {

    //         alert('请输入正确的姓名或邮箱')

    //     } else {

    //         alert('订阅成功')

    //     }

    // }

    // $('.join_button input').on('click',function(){


    //         pd();

    // })



})