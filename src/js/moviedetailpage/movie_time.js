var time_parent = $('.showmovietime'),
time_items = time_parent.find('.itmes'),
tab_items = $('.tab-wrapper .tab-content'),
time_prev = time_parent.find('.item1:first'),
time_next = time_parent.find('.item1:last');

$(document).on('click', '.showmovietime .itmes a', function(e) {
  e.preventDefault();
  var num = $(this).parent().index();
  $(this).parent().addClass('active').siblings().removeClass('active');
  tab_items.eq(num-1).addClass('show').siblings().removeClass('show');
  // disabled(num);
});

time_prev.find('a').on('click', function(e) {
  e.preventDefault();
  var time_ul = time_parent.children('ul');
  if(time_ul.data('num') == null) {
    return;
  }
  time_ul.find('.itmes:first').before('<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 itmes"><a href="#">今天</a><span></span></li>');
  if(time_ul.find('.itmes:last').hasClass('active')) {
    time_ul.find('.itmes:last').prev().addClass('active').next().remove();
  }else{
    time_ul.find('.itmes:last').remove();
  }
  time_ul.data('num', '0');
  time_ul.find('li').removeClass('disabled').first().addClass('disabled');
});
time_next.find('a').on('click', function(e) {
  e.preventDefault();
  var time_ul = time_parent.children('ul');
  if(time_ul.data('num') == 1) {
    return;
  }
  time_ul.find('.itmes:last').after('<li class="col-lg-2 col-md-2 col-sm-2 col-xs-2 itmes"><a href="#">6月13日</a><span></span></li>');
  if(time_ul.find('.itmes:first').hasClass('active')) {
    time_ul.find('.itmes:first').next().addClass('active').prev().remove();
  }else{
    time_ul.find('.itmes:first').remove()
  }
  time_ul.data('num', '1');
  time_ul.find('li').removeClass('disabled').last().addClass('disabled');
});

// function disabled(num) {
//   if(num === 1) {
//     time_prev.addClass('disabled');
//     time_next.removeClass('disabled');
//   }else if(num === time_items.length){
//     time_next.addClass('disabled');
//     time_prev.removeClass('disabled');
//   }else{
//     time_prev.removeClass('disabled');
//     time_next.removeClass('disabled');
//   }
// }