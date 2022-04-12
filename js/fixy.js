$(window).scroll(function (event) {
	var scroll = $(window).scrollTop();
	if (scroll > 200) {
		var navH = $("#large-navigation-container-2").outerHeight();
		$("#large-navigation-container-2").addClass("turnME");
		$(".pusher").css({"height": navH});
	}
		
	else {
		$("#large-navigation-container-2").removeClass("turnME");
		$(".pusher").css({"height": ""});
		}
	
});
