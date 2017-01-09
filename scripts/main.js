$(document).ready(function(){
	newGrid(16);
	

	$("#erase").click(function(){
		$(".box").css("background-color", "white");
	});

	$("#changesize").click(function(){
		var dimension=prompt('What would you like the height and width of the grid to be?');
		newGrid(dimension);
	});

	
		$(document).on("mouseenter", ".box", function(){

			$(this).css("background-color", "red");
	});

	$("#rainbow").click(function(){
		confirm("Rainbow Mode Activated!");
		var dimension=prompt('What would you like the height and width of the grid to be?');
		newGrid(dimension);
		$(document).on("mouseenter", ".box", function(){
			$(this).css("background-color", "rgb("+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+","+Math.floor(Math.random()*255)+")");
		});
		
	});
	
	
Math.floor(Math.random()*255)
	
});
		
var newGrid=function(number){
	$("#grid").empty();
	var boxsize=(432-2*number)/number;
	for(j=0;j<number*number;j++){
			$("#grid").append('<div class="box"></div>');	
	}
	$(".box").height(boxsize+'px');
	$(".box").width(boxsize+'px');
}

var rainbow = function(){
		$(".box").on("mouseenter", function(){
			$(this).css("background-color", "green");
			$(this).css("opacity","1.2");
		return true;
		});
}


	

