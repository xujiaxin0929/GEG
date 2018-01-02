new Swiper($('#res_specialoffers_37').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 30,
	slidesPerView: 3,
	loop:true,
    prevButton:$('#res_specialoffers_37').find('.left'),
    nextButton:$('#res_specialoffers_37').find('.right'),
	breakpoints: {
        600: {
			//xs
			slidesPerView: 1
		},
		991: {
			//sm
			slidesPerView: 2
		},
		1199: {
			//md
			slidesPerView: 3
		},
	},
	onInit: function(swiper) {
		if(swiper.slides.length <= swiper.params.slidesPerView) {
		  $('#res_specialoffers_37').find('.left').hide();
		  $('#res_specialoffers_37').find('.right').hide();
		}
	  }
})
