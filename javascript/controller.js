var current = "wave";
var styleArray = ["matrix", "wave", "clouds", "none"];

$(document).ready(function(){

	var changeStyle = function(name){
		var $sheet = $("<link class='signStyle' rel='stylesheet' href='../stylesheets/"+name+".css'>");
		$(".signStyle").remove();
		$("head").append($sheet);
	}
	
	$(document).keypress(function(event){ 
		var key = (event.keyCode ? event.keyCode : event.which); 
		if( key == "32"){
			cycleStyle();
		}  
	});
	
	var cycleStyle = function(){
		var index = styleArray.findIndex(function(e){
			return e == current;
		});
		var newIndex = (index + 1) % styleArray.length;
		console.log(index);
		current = styleArray[newIndex];
		changeStyle(current);
		
		
	};
	
	cycleStyle();

});
