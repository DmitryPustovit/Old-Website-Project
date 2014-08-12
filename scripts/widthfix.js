$(window).resize(function() {
	if (screen.width < 1024) {
        $(".scrollToTop").hide();
    }
    else {

        $(".scrollToTop").show();
    }
});