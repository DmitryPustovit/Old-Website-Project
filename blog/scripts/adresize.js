$(window).resize(function () {
if ($(this).width() < 1200) {
    $('.ad').hide();
    $('.ad2').hide();
} else {
    $('.ad').show();
    $('.ad2').show();
}
});