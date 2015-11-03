$(document).ready(function(){

/////////

	// All documents start with:

	
	$(document).ready(function(){

	});

	//This is to prevent any jQuery code from running before the document is finished loading (is ready).
	
/////////

//jQuery Selectors


	//jQuery selectors allow you to select and manipulate HTML elements

	$("<element name, class, id or XPath>")

	1. The element Selector
	$("p")
	2.The #id Selector
	$("#test")
	3. The .class Selector
	$(".test")
	4. Functions In a Separate File
	<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">
	</script>
	<script src="my_jquery_functions.js"></script>
	</head>


/////////
 //jQuery events


	//To assign a click event to all paragraphs on a page, you can do this:

	$("p").click();

	//The function is executed when the user double-clicks on the HTML element:

	$("p").dblclick(function(){
	    $(this).hide();
	});
	// The function is executed when the mouse pointer enters the HTML element:
	$("#p1").mouseenter(function(){
    	alert("You entered p1!");
	});

	$("p").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).css("background-color", "yellow");
    } 
	});

	// jQuery hide() and show()

	$("#hide").click(function(){
    $("p").hide();
	});

	$("#show").click(function(){
	    $("p").show();
	});

	// Syntax:

	//$(selector).hide(speed,callback);

	//$(selector).show(speed,callback);

	//$("#flip").click(function(){
    $("#panel").slideDown();
	});

	//jQuery Animations - The animate() Method

	//$(selector).animate({params},speed,callback);

	$("button").click(function(){
	    $("div").animate({left: '250px'});
	}); 

	$("button").click(function(){
	    $("div").animate({
	        left: '250px',
	        opacity: '0.5',
	        height: '150px',
	        width: '150px'
	    });
	}); 

	//jQuery animate() - Using Relative Values

	$("button").click(function(){
	    $("div").animate({
	        left: '250px',
	        height: '+=150px',
	        width: '+=150px'
	    });
	}); 

	//jQuery animate() - Uses Queue Functionality

	$("button").click(function(){
	    var div = $("div");
	    div.animate({height: '300px', opacity: '0.4'}, "slow");
	    div.animate({width: '300px', opacity: '0.8'}, "slow");
	    div.animate({height: '100px', opacity: '0.4'}, "slow");
	    div.animate({width: '100px', opacity: '0.8'}, "slow");
	}); 