$(window).scroll(function () {

    if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100)
    {
		if (screen.width > 1024) 
		{
			$(".scrollToTop").fadeIn(400);
		}
		else
		{
			$(".scrollToTop").fadeOut(400);
		}
    }
    else
    {
        $(".scrollToTop").fadeOut(400);
    }
	
});

function Scroll()
{
        $("html, body").animate({ scrollTop: 0 }, "slow");
}
