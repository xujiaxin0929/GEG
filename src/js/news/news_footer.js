$(function () {

  // var windowHeight = $(window).height();
  // var windowWidth = $(window).width();
  // var windowHeight ;
  // $(window).scroll(function(){
  //     windowHeight = $(window).scrollTop();
  //     $('.form-modal').css("top",windowHeight);
  // })

  $('.form-modal-close,.form-modal').click(function (e) {
    if (e.target.className == 'form-modal-close' || e.target.className == 'form-modal') {
      $(".error-name").css('display', 'none');
      $('.form-modal').fadeOut();
      $('.form-modal-main').fadeOut();
      $('body').css({
        'height': "auto"
      });
      $('html').css({
        'overflow':'auto'
      })
    }
  });
  $('#get_news_btn').click(function (e) {
    e.preventDefault();
    $('.form-modal').fadeIn();
    $('.form-modal-main').fadeIn();
    $('body').css({
      'height': "100%",
      "overflow": "hidden"
    });
    $('html').css({
      "overflow": 'hidden'
      // 'height': "100%"
    });

  });

  $('input').focus(function () {
    $(this).parent().addClass('active').siblings().removeClass('active');
  })
  $('.btn-order-from').on('click', function (e) {
    e.preventDefault();
    formValidate();
    // $(':input').val('')
    // $('.form-modal').fadeOut();
  })

  $('.chinaName').on('blur', function () {

    name()
  })
  $('.phone').on('blur', function () {

    phone()
  })
  $('.email').on('blur', function () {

    email()
  })
  $('.code').on('blur', function () {

    number()
  })



  function formValidate() {

    name();
    phone();
    email();
    number();


  }

  function name() {
    //判断姓名
    if ($.trim($('.chinaName').val()).length == 0) {
      $(".error-name").css('display', 'block');
      // $('.chinaName').focus();
      // return false;
    } else {
      if (isChinaName($.trim($('.chinaName').val())) == false) {
        $(".error-name").css('display', 'block');
        // $('.chinaName').focus();
        // return false;
      } else {
        $(".error-name").css('display', 'none');
        // alert('姓名验证成功')
      }
    }
  }

  function phone() {
    // 判断手机号码
    if ($.trim($('.phone').val()).length == 0) {
      $(".error-phone").css('display', 'block');
      // $('.phone').focus();
      // return false;
    } else {
      if (isPhoneNo($.trim($('.phone').val())) == false || $('.phone').val().length <= 10) {
        $(".error-phone").css('display', 'block');
        // $('.phone').focus();
        // return false;
      } else {
        $(".error-phone").css('display', 'none');
        // alert('手机号验证成功')
      }
    }
  }
  function email() {
    // 判断邮箱
    if ($.trim($('.email').val()).length == 0) {
      $(".error-email").css('display', 'block');
      // $('.email').focus();
      // return false;
    } else {
      if (isEmail($.trim($('.email').val())) == false) {
        $(".error-email").css('display', 'block');
        // $('.email').focus();
        // return false;
      } else {
        // alert($('.email').val())
        $(".error-email").css('display', 'none');
        // alert('邮箱验证成功')
      }
    }
  }

  function number() {
    //判断验证码
    if ($.trim($('.code').val()).length >= 6 || $.trim($('.code').val()).length <= 4) {
      $(".error-code").css('display', 'block');
      // $(".number").focus();
      // return false;
    } else {
      if (isNumber($.trim($('.code').val()) == false)) {
        $(".error-code").css('display', 'block');
        // $('.number').focus;
        // return false;
      } else {
        $(".error-code").css('display', 'none');
        // alert('人数验证成功')
      }
    }
  }

  //正则姓名
  function isChinaName(name) {
    var pattern = /^[\u4E00-\u9FA5]{1,6}$/;
    return pattern.test(name);
  }

  //正则电话
  function isPhoneNo(phone) {
    var pattern = /^[1][3,4,5,7,8][0-9]{9}$/;
    return pattern.test(phone);
  }
  //正则邮箱
  function isEmail(email) {
    
    var pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    return pattern.test(email);
  }

  function isNumber(number) {
    var pattern = /^[0-9]*$/;
    return pattern.test(number);
  }


});