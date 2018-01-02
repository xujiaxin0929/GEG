$(function () {

    $('.btn-info').on('click', function (e) {
        e.preventDefault();
        // alert(1)
        $('#privateparty_formmodel').fadeIn();
        $('body').css({
            'height': "100%",
            "overflow": "hidden"
        });
        $('html').css({
            "overflow": 'hidden'
            // 'height': "100%"
        });
        $('.head-nav2').hide();
    })
    $('.formmodel_opc').on('click', function (e) {
        if (e.target.className == 'formmodel_opc' || e.target.className == 'form-modal-close') {
            $('#privateparty_formmodel').fadeOut();
            $('body').css({
                'height': "auto"
            });
            $('html').css({
                'overflow': 'auto'
            })
        }
        $('.head-nav2').show();

    })


})