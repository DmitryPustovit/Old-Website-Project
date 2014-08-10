$(window).scroll(function () {
    //if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    //    $(".scrollTop a").fadeIn(400);
    //}

    if ($("body").scrollTop() > 100 || $("html").scrollTop() > 100)
    {
        $(".scrollTop").fadeIn(400);
    }
    else
    {
        $(".scrollTop").fadeOut(400);
    }
});

function Scroll()
{
        $("html, body").animate({ scrollTop: 0 }, "slow");
}