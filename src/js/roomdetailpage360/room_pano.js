embedpano({
    swf: "onepano/tour.swf",
    xml: "onepano/deluxekingroom.xml",
    target: "pano",
    html5: "auto",
    mwheel: false,
    mobilescale: 1.0,
    passQueryParameters: true
});
$('.hot_spots').on('click', function() {
    $(this).fadeOut().prev('.modal-pano').fadeOut();
    $('.mb_closed').fadeIn();
})
$('.mb_closed').on('click', function(e) {
    $(this).fadeOut();
    $('.hot_spots').fadeIn().prev('.modal-pano').fadeIn();
});
