function init() {
	$('.butt').mouseover(function(){
		$(this).css("background", "#FF8E8E");
		$(this).css("font-style", "italic");
	});
	$('.butt').mouseout(function(){
		$(this).css("background", "#4ECDC4");
		$(this).css("font-style", "normal");
	});
	$('#tufts').click(function() {
		window.location.href='education.html'
	});
	$('#logo').click(function() {
		window.location.href='index.html'
	});

}