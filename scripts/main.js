$(document).ready(function(){
	newGrid(16);
	

	$("#erase").click(function(){
		$(".box").css("background-color", "white");
		
	});

	$("#changesize").on("click", function(){
		var dimension=prompt('What would you like the height and width of the grid to be? Your number must be an integer between 0 and 100');
		if(dimension<1 || dimension>100){
			confirm("That number is not an integer between 1 and 100!");
			dimension=prompt('What would you like the height and width of the grid to be? Your number must be an integer between 0 and 100');
		}
		newGrid(dimension);
	});

	
		$(document).on("mouseenter", ".box", function(){
			
			$(this).css("background-color", "black");


	});

	$("#rainbow").on("click", function(){
		confirm("Rainbow Mode Activated!");
		$(document).on("mouseenter", ".box", function(){
			
			$(this).css("background-color", "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
		});	
	});

	$("#fadein").on("click", function(){
		confirm("Fade In Mode Activated!");
		$(".box").css("background-color", "white");
		$(".box").css("opacity", 0);
		
		$(document).on("mouseenter", ".box", function(){
		$(this).css("background-color", "black");

			var opacity = +$(this).css('opacity');
    		if (opacity < 1) {
    	    opacity += 0.1;
    	    $(this).css('opacity', opacity);
    	}
		});
			
	});
});
		
var newGrid=function(number){
	$("#grid").empty();
	var boxsize=400/number;
	for(j=0;j<number*number;j++){
			$("#grid").append('<div class="box"></div>');	
	}
	$(".box").height(boxsize+'px');
	$(".box").width(boxsize+'px');
}




	

