+
  function ($) {
    'use strict';

    var SwiperBG = function (element) {
      this.$element = $(element)
      // this.$bgs = $(element).find('.slide-bg')
      //1440 700
      this.resetSize()
      $(window).on('resize', $.proxy(this.resetSize, this))

      new Swiper($(element), {
        direction: 'horizontal',
        loop: true,
        pagination: $(element).find('.swiper-pagination')[0],
        paginationClickable: true,
        prevButton: '.swiper-button-prev',
        nextButton: '.swiper-button-next',
        observer: true,
        observeParent: true
      })

      $(element).css('visibility', 'visible').hide().fadeIn()
    }
    SwiperBG.prototype.resetSize = function () {
			var $bgs = this.findBg()
			var _width = this.findWidth()
			var _height = this.findHeight()
			if (_width / _height > 1440 / 700) {
				var _w = _width
				var _h = Math.round(_width * 700 / 1440)
				$bgs.css({
					left: 0,
					top: Math.round((_height - _h) / 2) + 'px',
					width: _w + 'px',
					height: _h + 'px',
				})
			} else {
				var _w = Math.round(_height * 1440 / 700)
				var _h = _height
				$bgs.css({
					left: -Math.round((_w - _width) / 2) + 'px',
					top: 0,
					width: _w + 'px',
					height: _h + 'px',
				})
			}
		}

    SwiperBG.prototype.findWidth = function () {
      return $(window).width();
    }
    SwiperBG.prototype.findHeight = function () {
      return $(window).height();
    }
    SwiperBG.prototype.findBg = function () {
      console.log(this.$element.find('.slide-bg').length);
      return this.$element.find('.slide-bg');
    }

    function Plugin(option) {
      return this.each(function () {
        new SwiperBG(this)
      })
    }

    var old = $.fn.swiperBG

    $.fn.swiperBG = Plugin
    $.fn.swiperBG.Constructor = SwiperBG


    // NO CONFLICT
    // ====================

    $.fn.swiperBG.noConflict = function () {
      $.fn.swiperBG = old
      return this
    }

    $(function () {
      Plugin.call($('#VideoPopup_video'))
    })

  }(jQuery);
