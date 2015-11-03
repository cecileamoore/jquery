$(document).ready(function(){


	alert("Welcome!");

	$("img").click(function(){
		$(this).fadeOut(100);
		$(this).fadeIn(100);
	});

	$("h1").hover(function(){
		$(this).fadeOut(100);
		$(this).fadeIn(100);
	});


});

// Create a web page with 4 different jQuery events.
 // Have at least one of them be initiated by a click event.

 