$(function () {


  $('.form-modal-close,.form-modal').click(function (e) {
    if (e.target.className == 'form-modal-close' || e.target.className == 'form-modal') {
      $(".error-name").css('display', 'none');
      $('.form-modal').fadeOut();
    }
  });
  $('#order').click(function (e) {
    e.preventDefault();
    $('.form-modal').fadeIn();
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
   $('.number').on('blur', function () {

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
      if (isPhoneNo($.trim($('.phone').val()) == false) || $('.phone').val().length <= 10) {
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
      if (isEmail($.trim($('.email').val()) == false)) {
        $(".error-email").css('display', 'block');
        // $('.email').focus();
        // return false;
      } else {
        $(".error-email").css('display', 'none');
        // alert('邮箱验证成功')
      }
    }
  }

  function number() {
    //判断人数
    if ($.trim($('.email').val()).length == 0) {
      $(".error-mach").css('display', 'block');
      // $(".number").focus();
      // return false;
    } else {
      if (isNumber($.trim($('.number').val()) == false)) {
        $(".error-mach").css('display', 'block');
        // $('.number').focus;
        // return false;
      } else {
        $(".error-mach").css('display', 'none');
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
    var pattern = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$ /;
    return pattern.test(email);
  }

  function isNumber(number) {
    var pattern = /^[0-9]*$/;
    return pattern.test(number);
  }

  $('#modal-date').dateRangePicker({
    language: 'cn',
    separator: ' - ',
    autoClose: true,
    startDate: formatDate(new Date()),
    customTopBar: ' ',
    format: 'YYYY年MM月DD日',
    showShortcuts: true,
    swapTime: true,
    singleMonth: true,
    singleDate: true
  })

});