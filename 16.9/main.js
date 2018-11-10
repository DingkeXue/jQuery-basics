var trigger = $('#trigger');
var anno = $('#anno');
var loaded = false;

trigger.on ('mouseenter', 
	function() {
		if(!loaded) {
			anno.load('anno.html');
			loaded = true;
		}
		anno.show();
})
trigger.on('mouseleave',
	function() {
		if(anno.is(':visible')){
			anno.slideUp();	
		}
	})