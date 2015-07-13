$(function() {
	$(".nav-warp").css("display","none");
	$( ".menuBtn" ).on("click", function(){
		$(".nav-warp").css("display","block");
		$(".nav-warp").animate({left: '0'}, 200 );
		$(".header, .container, footer").animate({left: '550px'}, 200 );
		$(".nav-warp .nav-close").animate({left: '550px'}, 200 );
		$(".dimmed").addClass("on");
		return false;	
	});
	$( ".dimmed" ).on("click", function(){		
		$(".nav-warp .nav-close").animate({left: '-100%'}, 200 );
		$(".nav-warp").animate({left: '-100%'}, 200 );
		$(".header, .container, footer").animate({left: '0'}, 200 );
		$(".dimmed").removeClass("on");
	});
	$(".nav-warp .nav-close").on("click", function(){
		$(this).animate({left: '-100%'}, 200 );
		$(".nav-warp").animate({left: '-100%'}, 200 );
		$(".header, .container, footer").animate({left: '0'}, 200 );
		$(".dimmed").removeClass("on");
		return false;	
	});
});