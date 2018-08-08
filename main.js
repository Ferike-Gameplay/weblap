$(document).ready(function(){
	console.log( "ready!" );
	$("a").on("click", function(){
		var oldal=$(this).attr("href");
		$(".content").hide();
		$(oldal).show();
	})	
});