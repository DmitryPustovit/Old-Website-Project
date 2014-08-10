var startingNumber = 1;

function intro ()
{


	
    $(".title").animate({
        'margin-top': "0",
    }, 2000, function() {
		 //$('.title').css('top', '10%  ');
    });

    $("#nav").animate({
        'margin-top' : "100px",
    }, 2000, function () {
        $("#about").animate({
            opacity: "1.0",
        }, 1000, function () {
        });
		
		$("#background").slideDown("slow", function(){
    		$("#table").show();
		});
    });

    
}




$(window).ready(function () {
	$('.about').hide();
	$('#id1').show();
	$("#table").hide();
});

function textforward()
{
    startingNumber += 1;
	numbCheck();
	$('.about').hide();
	$('#id' +startingNumber).show();
	
}

function textback()
{
    startingNumber -= 1;
	numbCheck();
	$('.about').hide();
	$('#id' +startingNumber).show();
	
}

function numbCheck()
{
	if(startingNumber < 1)
	{
		startingNumber = 1;
	}

	if(startingNumber > 7)
	{
		startingNumber = 7;
	}
}