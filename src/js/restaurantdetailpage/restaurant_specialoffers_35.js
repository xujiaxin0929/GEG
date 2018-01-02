new Swiper($('#restaurant_specialoffers_35').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 9,
	slidesPerView: 3,
	loop:true,
    prevButton:$('#restaurant_specialoffers_35').find('.left'),
    nextButton:$('#restaurant_specialoffers_35').find('.right'),
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
