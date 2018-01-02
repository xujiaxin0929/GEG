var spv = 'auto';
if(navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/9./i)=="9.") { 
    spv = 1.48;
} 
var swiper = new Swiper('#common_slide_01 .swiper-container', {
        // autoplay:3000,
        loop: true,
        loopedSlides: 3,
        spaceBetween: 32,
        speed: 550,
        centeredSlides: true,
        slidesPerView: spv,
        pagination: '.swiper-pagination',
        nextButton: '.right',
        prevButton: '.left',
        breakpoints: {
            767: {
                //xs
                spaceBetween: 5,
            }
        }
    });