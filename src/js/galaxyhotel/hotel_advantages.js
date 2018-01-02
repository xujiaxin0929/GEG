new Swiper($('#hotel_advantages').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 160,
	slidesPerView: 3,
    prevButton:$('#hotel_advantages').find('.left'),
    nextButton:$('#hotel_advantages').find('.right'),
	breakpoints: {
		767: {
			//xs
			slidesPerView: 3,
			spaceBetween: 20
		},
		991: {
			//sm
			slidesPerView: 3,
			spaceBetween: 50
		},
		1199: {
			//md
			slidesPerView: 3,
			spaceBetween: 100
		},
	}
})
