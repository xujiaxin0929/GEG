var load_more_click = 1;
$(document).ready(function () {
    result_show();
    load_more(1);
});

$(".select_1,.select_2").click(function () {
    result_show();
    load_more(1);
});

$("#brands_catalog_nav_content .nav-tabs li a").click(function () {
    result_show();
    load_more(1);
});

$(".exc_load_more_btn").click(function () {
    alert("s");
    load_more_click++;
    load_more(load_more_click);
    no_result();

});

function load_more(load_more_click) {
    $(".brands_catalog_tab .active.tab-pane .items").removeClass("ok");
    var load_more_lg = $(".brands_catalog_tab .active.tab-pane .items.show1 ").length;
    var j = 8 * load_more_click;
    for (var i = 0; i <= load_more_lg; i++) {
        if (i < j) {
            $(".brands_catalog_tab .active.tab-pane .items.show1:eq(" + i + ")").addClass("ok");
        }
    }

    load_more_click++;

    var load_more_show = $(".brands_catalog_tab .active.tab-pane .items.show1 ").length;
    var load_more_ok = $(".brands_catalog_tab .active.tab-pane .items.show1.ok").length;
    var remaing_cunt = load_more_show - load_more_ok;

    $(".brands_catalog_tab .active.tab-pane .exc_load_more_btn span").html(remaing_cunt);


    if (remaing_cunt == 0) {
        $(".brands_catalog_tab .active .exc_load_more_btn").hide();
    }
    else {
        $(".brands_catalog_tab .active .exc_load_more_btn").show();
    }
    if (load_more_show == 0) {
        $(".brands_catalog_tab .active  .no_result_found").show();
    }
    else {
        $(".brands_catalog_tab .active  .no_result_found").hide();
    }
}
function result_show() {

    $(".brands_catalog_tab .active .items").removeClass("show1");
    var select_1 = $(".brands_catalog_tab .active .select_1").val();
    var select_2 = $(".brands_catalog_tab .active .select_2").val();
    $(".brands_catalog_tab .active ." + select_1 + "." + select_2).addClass("show1");
}





$(document).ready(function () {

});
