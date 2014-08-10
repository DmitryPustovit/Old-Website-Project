function changeBackground() {

    $('body').css('background', '#282828  ');
    $('body').css('color', 'white');
    $('.post').css('color', '#D8D8D8');
    $('.post h1 a').css('color', '#D8D8D8');
    $('#change1').hide();
    $('#change2').show();

}

function changeBackgroundBack()
{
    $('body').css('background', '#E8E8E8');
    $('body').css('color', 'black');
    $('.post').css('color', 'black');
    $('.post h1 a').css('color', 'black');
    $('#change').text('Turn Lights Off');
    $('#change1').show();
    $('#change2').hide();
}