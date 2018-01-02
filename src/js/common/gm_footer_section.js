+
function($) {
	'use strict';

	var Footer = function(element) {
		this.$element = $(element)
		this.$details = $(element).find('details')
		this.$top = $(element).find('.gm_footer_top a');
		this.$state = 'unset'
        this.resetSize()
		$(window).on('resize', $.proxy(this.resetSize, this))
	}
    Footer.prototype.resetSize = function() {
		var _width = this.findWidth()
		//767
		if(_width <= 991){
			if(this.$state === 'unset' || this.$state === 'pc'){
				this.$state = 'mobile'
				this.$details.each(function(detail){
					$(this).prop('open',false)
				})
			}
		}else{
			if(this.$state === 'unset' || this.$state === 'mobile'){
				this.$state = 'pc'
				this.$details.each(function(detail){
					$(this).prop('open',true)
				})
			}
		}
		this.$top.click(function() {$('html,body').animate({scrollTop:0},200)});
	}

    Footer.prototype.findWidth = function() {
		return $(window).width();
	}

	function Plugin(option) {
		return this.each(function() {
			new Footer(this)
		})
	}

	var old = $.fn.footer

	$.fn.footer = Plugin
	$.fn.footer.Constructor = Footer


	// NO CONFLICT
	// ====================

	$.fn.footer.noConflict = function() {
		$.fn.footer = old
		return this
	}

	$(window).on('load', function() {
		Plugin.call($('#gm_footer_section'))
	})
	$('.hn-head').click(function() {
		$(this).parent().toggleClass('open').find('.hn-con').slideToggle();
	})

}(jQuery);
