new Swiper($('#res_chefrecommendation_35').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 30,
	slidesPerView: 3,
	loop:true,
    prevButton:$('#res_chefrecommendation_35').find('.left'),
    nextButton:$('#res_chefrecommendation_35').find('.right'),
	breakpoints: {
        600: {
			//xs
			slidesPerView: 1
		},
		991: {
			//sm
			slidesPerView: 1
		},
		1199: {
			//md
			slidesPerView: 1
		},
	}
})
