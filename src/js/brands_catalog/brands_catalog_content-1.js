var load_more_click = 1;
$(document).ready(function () {
    var par_li = $("#brands_catalog_nav_content .nav-tabs li.active a").attr("href");
    result_show(par_li);
    load_more(1, par_li);
});

$(".select_1,.select_2").click(function () {
    var par_li = $("#brands_catalog_nav_content .nav-tabs li.active a").attr("href");
    result_show(par_li);
    load_more(1, par_li);
});

$("#brands_catalog_nav_content .nav-tabs li a").click(function () {
    var par_li = $(this).attr("href");
    result_show(par_li);
    load_more(1, par_li);
});

$(".exc_load_more_btn").click(function () {
    load_more_click++;
    var par_li = $("#brands_catalog_nav_content .nav-tabs li.active a").attr("href");
    load_more(load_more_click, par_li);
    no_result();
});

function load_more(load_more_click, par_li) {
    $(par_li + ".tab-pane .items").removeClass("ok");
    var load_more_lg = $(par_li + ".tab-pane .items.show1 ").length;
    var j = 9 * load_more_click;
    for (var i = 0; i <= load_more_lg; i++) {
        if (i < j) {
            $(par_li + ".tab-pane .items.show1:eq(" + i + ")").addClass("ok");
        }
    }
    load_more_click++;
    var load_more_show = $(par_li + ".tab-pane .items.show1 ").length;
    var load_more_ok = $(par_li + ".tab-pane .items.show1.ok").length;
    var remaing_cunt = load_more_show - load_more_ok;
    $(par_li + ".tab-pane .exc_load_more_btn span").html(remaing_cunt);
    if (remaing_cunt == 0) {
        $(par_li + " .exc_load_more_btn").hide();
    }
    else {
        $(par_li + " .exc_load_more_btn").show();
    }
    if (load_more_show == 0) {
        $(par_li + "  .no_result_found").show();
    }
    else {
        $(par_li + "  .no_result_found").hide();
    }
}

function result_show(par_li) {
    $(par_li + " .items").removeClass("show1");
    var select_1 = $(par_li + " .select_1").val();
    var select_2 = $(par_li + " .select_2").val();
    $(par_li + " .items." + select_1 + "." + select_2).addClass("show1");
}
