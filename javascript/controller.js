var current = "wave";
var styleArray = ["matrix", "wave", "clouds"];

$(document).ready(function(){

	var changeStyle = function(name){
		var $sheet = $("<link class='signStyle' rel='stylesheet' href='../stylesheets/"+name+".css'>");
		$(".signStyle").remove();
		$("head").append($sheet);
	}

	var cycleStyle = function(){
		var index = styleArray.findIndex(function(e){
			return e == current;
		});
		var newIndex = (index + 1) % styleArray.length;
		console.log(index);
		current = styleArray[newIndex];
		changeStyle(current);


	};

	$("#optionsMenuToggle").click( function(){
		$("#optionsMenuMain").toggle();
	})

	$("#changeTitleButton").click( function(){
		console.log("Test");
		changeTitle($("input").val());
	})

	$("#cycleStyle").click(function(){
		console.log("Test");
		cycleStyle();
	});

	var changeTitle = function(title){
		console.log(title);
		$("#title").text(title);
	}

	cycleStyle();

});
