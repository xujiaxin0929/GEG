// $('ul.navbar-nav li.dropdown').hover(function() {
//  $(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
// }, function() {
//  $(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
// });
var _w = $(window).width(),
_tab = $('.main-reserve'),
div_timer,icon_timer;
scro();
$(function() { initTop() });
$(window).on('scroll', scro);
$(window).on('resize', function() {
    _w = $(window).width();
    initTop();
    dpwHidden();
    if (_w > 991) {
        if ($('.pull-right .btn-order').hasClass('open')) {
            $('.pull-right .btn-order').trigger('click');
        }
        if($('.pull-right .btn-search').hasClass('open')) {
            $('.pull-right .btn-search').trigger('click');
        }
    }else{

    }
})

function scro() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    dpwHidden();
    if (top > 0) {
        $('.navbar').addClass('gm_top_menu_move');
    } else {
        $('.navbar').removeClass('gm_top_menu_move');
    }
}
function dpwHidden() {
    var dpw = $('.date-picker-wrapper');
    if (dpw.is(':visible')) {
        if($('#date1').length > 0) {
            $('#date1').data('dateRangePicker').close();
        }
        if($('#date2').length > 0) {
            $('#date2').data('dateRangePicker').close();
        }
        if ($('#ctrl-date').length > 0) {
            $('#ctrl-date').data('dateRangePicker').close();
        }
        $('.date-select').removeClass('open');
    }
}
var formatDate = function(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};
var ModalHelper = (function(bodyCls) {
    var scrollTop;
    return {
        afterOpen: function() {
            scrollTop = document.scrollingElement.scrollTop;
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + 'px';
        },
        beforeClose: function() {
            document.body.classList.remove(bodyCls);
            // scrollTop lost after set position:fixed, restore it back.
            document.scrollingElement.scrollTop = scrollTop;
        }
    };
})('modal-open');

//mobile booking start

$(document).on('click', '.main-reserve .tabs span', function(e) {
    if ($(window).width() > 991) {
        e.stopPropagation();
    }
    $(this).addClass('on').siblings().removeClass('on');
    var contents = $(this).parent().next();
    contents.find('.content').eq($(this).index()).show().siblings().hide();
});
$('.ctrl-title').on('click', function(e) {
    $(this).next().slideToggle().parent().siblings().find('.ctrl-list').slideUp();
});

$('.ctrl-select-list>div').click(function(e) {
    e.stopPropagation();
    $(this).addClass('on').siblings().removeClass('on').parent().prev().text($(this).text());
    $(this).parent().slideUp();
});
if ($('#ctrl-date').length > 0) {
    $('#ctrl-date').dateRangePicker({
        language: 'cn',
        separator: ' - ',
        autoClose: true,
        startDate: formatDate(new Date()),
        customTopBar: ' ',
        format: 'YYYY年MM月DD日',
        showShortcuts: true,
        swapTime: true,
        getValue: function() {
            return this.innerHTML;
        },
        setValue: function(s) {
            this.innerHTML = s;
        }
    }).bind('datepicker-closed', function() {
        $('#ctrl-date').removeClass('open');
    });
}
$('#ctrl-date').click(function(e) {
    e.stopPropagation();
    if ($(this).hasClass('open')) {
        $('#ctrl-date').data('dateRangePicker').close();
        $(this).removeClass('open');
        return;
    }
    $(this).addClass('open');
    $(this).parent().siblings().find('.ctrl-list').slideUp();
    var _left = $(this).offset().left;
    var $dpw = $('.navbar-fixed-top').next().next('.date-picker-wrapper');
    if ($(window).width() > 991) {
        $dpw.css({
            'left': _left + 1,
            'position': 'fixed',
            'top': $(this).offset().top - $(document).scrollTop() + 29
        });
    }
    if ($(window).width() < 560) {
        var _width = $(this).innerWidth();
        $dpw.css({
            'left': _left + 1,
            'top': $dpw.offset().top - 2
        }).find('.month-wrapper').innerWidth(_width);
    }
});
$('.ctrl-child .glyphicon').on('click', function(e) {
    e.stopPropagation();
    if ($(this).hasClass('glyphicon-plus')) {
        var span = $(this).prev('span');
        var _val = span.text();
        span.text(parseInt(_val) + 1);
    } else {
        var span = $(this).next().next('span');
        var _val = span.text();
        span.text(_val > 0 ? (--_val) : 0);
    }
    $('#child').text(parseInt($('#adult-num2').text()) + parseInt($('#children-num2').text()));
});

$('.ctrl-child .nps-confirm').click(function(e) {
    e.stopPropagation();
    $(this).closest('.dropdown-menu1').slideUp();
});
$('.ctrl-room .glyphicon').on('click', function(e) {
    e.stopPropagation();
    if ($(this).hasClass('glyphicon-plus')) {
        var span = $(this).prev('span');
        var _val = span.text();
        span.text(parseInt(_val) + 1);
    } else {
        var span = $(this).next('span');
        var _val = span.text();
        span.text(_val > 0 ? (--_val) : 0);
    }
    $('.ctrl-room-title').text($('#room-num').text());
});
//mobile booking end

$('.dropdown-menu.gold').on('click', function(e) {
    e.stopPropagation();
});

$('.pull-right .btn-search').on('click', function(e) {
    var _wrap = $('.search-wrap'),
    _menu = $('.iconbar-container'),
    _order = $('.pull-right .btn-order')
    if (_menu.hasClass('open')) {
        _menu.trigger('click');
    }
    if(_order.hasClass('open')) {
        _order.trigger('click');
    }
    if($(this).hasClass('open')) {
        $(this).removeClass('open');
        _wrap.removeClass('open');
    }else{
        $(this).addClass('open');
        if(_wrap.find('.search-main').length == 0) {
            _wrap.append($('.dropdown-menu.search').find('.search-main'));
        }
        _wrap.addClass('open');
    }
});
$('.btn-search .dropdown-toggle').on('click',function() {
    if($('.dropdown-menu.search').find('.search-main').length == 0) {
        $('.dropdown-menu.search').append($('.search-wrap').find('.search-main'));
    }
});
$('.search-main input').keyup(function() {
    if($(this).val() == '') {
        $('.search-content>p').show();
        return;
    }
    $('.search-content>p').hide();
    var searchArr= ["澳门百老汇","澳门JW万豪酒店","澳门丽思卡尔顿","澳门悦榕庄酒店","澳门大仓酒店"],
    newArr = [],newCon = "";
    for(var i=0;i<searchArr.length;i++){
            newArr.push(searchArr[i]);
    }
    for(var j=0;j<newArr.length;j++){
        newCon += '<li><a href="#">'+newArr[j]+'</a></li>';
    }
    $('.search-content ul').html(newCon);

});

$('.pull-right .btn-order').click(function(e) {
    var _menu = $('.iconbar-container');
    if (_menu.hasClass('open')) {
        _menu.trigger('click');
    }
    var _search = $('.pull-right .btn-search');
    if (_search.hasClass('open')) {
        _search.trigger('click');
    }
    var _wrap = $('.mobile-book-wrap');
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        _wrap.removeClass('open');
    } else {
        $(this).addClass('open');
        _wrap.addClass('open');
    }
});
$('.navbar-header>.navbar-toggle').click(function(e) {
    var _search = $('.pull-right .btn-search');
    if (_search.hasClass('open')) {
        _search.trigger('click');
    }
    var _order = $('.pull-right .btn-order');
    if (_order.hasClass('open')) {
        _order.trigger('click');
    }
    var _box = $(this).find('.iconbar-container');
    var _language = $(".mobile-language");
    if (!_box.hasClass('open') && !_box.hasClass('close')) {
        $('.collapse-modal').fadeIn();
        _box.addClass('open');
        _language.fadeIn(1300);
        ModalHelper.afterOpen();
    } else if (_box.hasClass('open')) {
        $('.collapse-modal').fadeOut();
        _box.removeClass('open').addClass('close');
        _language.hide();
        ModalHelper.beforeClose();
    } else {
        $('.collapse-modal').fadeIn();
        _box.removeClass('close').addClass('open');
        _language.fadeIn(1300);
        ModalHelper.afterOpen();
    }
});
$('.collapse-modal').click(function() {
    $('.navbar-header>.navbar-toggle').trigger('click');
    $(this).fadeOut();
    ModalHelper.beforeClose();
});
$('.nav-right .btn-search').click(function() {
    dpwHidden();
});
$('.nav-right .gold-toggle').click(function() {
    dpwHidden();
});

$('.nav-left li.dropdown,.nav-right li.dropdown').hover(function() {
    if ($(window).width() > 991) {
        dpwHidden();
        if ($('.btn-order>div').hasClass('open')) {
            $('.btn-order>div').removeClass('open');
        }
        if ($('.btn-search').hasClass('open')) {
            $('.btn-search').removeClass('open');
        }
        $(this).addClass('open');
    }
}, function() {
    if ($(window).width() > 991) {
        $(this).removeClass('open');
    }
});
$('.nav-left li.dropdown>a>div,.nav-right li.dropdown>a>div').on('click touchstart', function(e) {
    var that = $(this);
    if ($(window).width() < 991) {
        e.stopPropagation();
        that.addClass('touch-hov');
        clearTimeout(div_timer);
        div_timer = setTimeout(function() {that.removeClass('touch-hov')},600);
    }
});
$('.nav-left li.dropdown .glyphicon-menu-down,.nav-right li.dropdown .glyphicon-menu-down').on('touchstart', function(e) {
    var that = $(this);
    if ($(window).width() < 991) {
        that.addClass('touch-hov');
        clearTimeout(icon_timer);
        icon_timer = setTimeout(function() {that.removeClass('touch-hov')},600);
    }
});

$('.nav-left li.dropdown>a,.nav-right li.dropdown>a').click(function(e) {
    if ($(window).width() > 991) {
        if ($(this).attr('href') != null) {
            self.location = $(this).attr('href');
        }
    }
});

$(".navbar-header>.navbar-toggle").on("click", function() {
    var collapse = $(".navbar-collapse");;
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        collapse.removeClass('in');
    } else {
        $(this).addClass('open');
        collapse.addClass('in');
    }
});
$(function() {
    $('.number-people-select .glyphicon').on('click', function(e) {
        e.stopPropagation();
        var _wrap = $(this).closest('.number-people-select');
        if ($(this).hasClass('glyphicon-plus')) {
            var span = $(this).prev().prev('span');
            var _val = span.text();
            span.text(parseInt(_val) + 1);
        } else {
            var span = $(this).next('span');
            var _val = span.text();
            span.text(_val > 0 ? (--_val) : 0);
        }
        _wrap.find('.select-result3').text(parseInt(_wrap.find('.adult-num').text()) + parseInt(_wrap.find('.children-num').text()));
        _wrap.find('.select-result4').text(parseInt(_wrap.find('.room-num').text()));
    });
});

function initTop() {
    if ($(window).width() > 767 || $('.hp-content').length > 0) {
        var w_h = $(window).height();
        $(".main-content").css("margin-top", w_h);
    } else {
        $(".main-content").css("margin-top", 391);
    }
}

// bookingbar 
if ($("#bookingbar-tab1").length > 0) {
    var $booking_tab1 = $("#bookingbar-tab1"),
        menu = $('.gm_top_menu_03'),
        _container = $('#booking-fixed'),
        booking_height = $booking_tab1.find('.inner').offset().top + $booking_tab1.find('.inner').height();

    // $("#selectable2").selectable({
    //     stop: function() {
    //         var result = $("#select-result2").empty();
    //         $(".ui-selected", this).each(function() {
    //             var index = $("#selectable2 li").index(this);
    //             result.append($(this).text());
    //         });
    //     }
    // });

    $(function() {
        if ($('#date2').length > 0) {
            $("#date2").dateRangePicker({
                language: 'cn',
                separator: ' - ',
                autoClose: true,
                customTopBar: ' ',
                format: 'YYYY年MM月DD日',
                startDate: formatDate(new Date()),
                showShortcuts: true,
                getValue: function() {
                    return this.innerHTML;
                },
                setValue: function(s) {
                    this.innerHTML = s;
                }
            }).bind('datepicker-closed', function() {
                $('.date-select').removeClass('open');
            });
            $("#date2").click(function(e) {
                var _parent = $('.date-select');
                if ( _parent.hasClass('open')) {
                    $("#date2").data('dateRangePicker').close();
                    return;
                }
                var _left = $(this).offset().left;
                var $dpw = $(".date-picker-wrapper");
                $dpw.css('left', _left);
                if ($(window).width() < 560) {
                    var _width = $(this).innerWidth();
                    $dpw.find('.month-wrapper').width(_width);
                }
            });
        }
        $('#bookingbar-tab1 .hotel-select,#bookingbar-tab1 .number-people-select').on('click', function() {
            if($("#date1").length){
                $("#date1").data('dateRangePicker').close();
            }
            if($("#date2").length){
                $("#date2").data('dateRangePicker').close();
            }
        });
        $('.hp-select li a').click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).closest('.dropdown').find('.result:visible').text($(this).text());
            $(this).closest('.dropdown-menu').trigger('click');
        });
        $('.dropdown-menu1 .title').on('click', function(e) {
            e.stopPropagation();
        })
    });

    //bookingbar below gm_main_menu 

    $('.btn-gold #bookingbar .nav-tabs a').click(function(e) {
        e.preventDefault();
        $('.btn-gold #bookingbar .dropdown').removeClass('open');
        dpwHidden();
        $(this).parent().addClass('active').siblings().removeClass('active');
        $(this).closest('.nav-tabs').next().find($(this).attr('href')).addClass('active in').siblings().removeClass('active in');
    })
    $('.btn-gold #bookingbar .dropdown').click(function(e) {
        e.preventDefault();
        $(this).siblings().removeClass('open');
        $(this).toggleClass('open');
    });
}
