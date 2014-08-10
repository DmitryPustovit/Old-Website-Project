/*function Search ()
{
    var $searchV = $('#searchbox').val();
   // var found = $('.post:contains(searchV)');



    $("article").hide();
    $('article:contains('+ $searchV +')').show();
    //$("article:contains('Power')").hide();
} */

function Search() {
    var $searchV = $('#searchbox').val().toUpperCase();
    $("article").hide();
    $("article").each(function (i, e) {
        if ($(e).text().toUpperCase().indexOf($searchV) >= 0)
        {
                $(e).show()
            }
        });
}