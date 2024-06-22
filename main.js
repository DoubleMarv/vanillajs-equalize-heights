
document.addEventListener("DOMContentLoaded", function() {



	var heightSetting = function(whatclass){
	let heightarray = [];
	var text_zone = document.getElementsByClassName(whatclass);

	for (var i = 0; i < text_zone.length; ++i) {
	    heightarray.push(text_zone[i].offsetHeight);
	}
	setTimeout(function(){ 
	var largest = heightarray[0];
	for (var i = 0; i < heightarray.length; i++) {
	  if (heightarray[i] > largest ) {
	    largest = heightarray[i];
	  }
	}
	for (var i = 0; i < text_zone.length; ++i) {
	    text_zone[i].style.height = largest+'px';
	}
	}, 50);
	};


heightSetting('heightequalizer');
heightSetting('titler');

});

