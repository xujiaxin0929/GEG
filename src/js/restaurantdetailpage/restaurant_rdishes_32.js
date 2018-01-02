new Swiper($('#restaurant_rdishes_32').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 9,
	slidesPerView: 3,
	loop:true,
    prevButton:$('#restaurant_rdishes_32').find('.left'),
    nextButton:$('#restaurant_rdishes_32').find('.right'),
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
	}
})
