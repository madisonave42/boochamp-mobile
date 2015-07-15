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

});