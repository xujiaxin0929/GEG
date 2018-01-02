// new Swiper($('#room_more').find('.swiper-container'), {
//     slidesPerView: 'auto',
//     spaceBetween: 9,
//     prevButton:$('#room_more').find('.left'),
//     nextButton:$('#room_more').find('.right')
// })


new Swiper($('#room_more').find('.swiper-container'), {
    slidesPerView: 'auto',
    spaceBetween: 9,
	slidesPerView: 3,
    prevButton:$('#room_more').find('.left'),
    nextButton:$('#room_more').find('.right'),
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
