$(window).ready(function () {

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $(".scrollTop").hide();
        $("#nav_menu").hide();
    }
    else {
        $("#nav_menu").show();
    }
});