$(function() {
	// 지도영역 높이 설정
	(function() {
		var map = $('.map-area');
		if (map.length > 0) {
			map.height($(window).height() - 158);
		}
	})();

	// 다음 지도 API 관련 변수 선언
	(function() {
		var container = document.getElementById('map');

		if( container != null ) {
			var options = {
				center: new daum.maps.LatLng(37.5215971, 127.05771319999997),
				level: 3
			};
			var map = new daum.maps.Map(container, options);
		}
	})();



























	// 매울 상세 기능

	$('.btn-box-toggle').data('toggle', 'false').on('click', function(){

		if( $(this).data('toggle') == 'false' ){
			$(this).removeClass('close').parent('.part-title').next('.part-mid').children('.border-box').removeClass('close');
			$(this).data('toggle', 'true');
		} else {
			$(this).addClass('close').parent('.part-title').next('.part-mid').children('.border-box').addClass('close');
			$(this).data('toggle', 'false');
		}

	});

	$('.btn-option-close').on('click', function(){

		var node = $(this).parents('.border-box').addClass('close').parents('.part-mid').prev('.part-title').children('.btn-box-toggle');

		if( node.data('toggle') == 'true' ){
			node.addClass('close').data('toggle', 'false');
		}

	});


});
