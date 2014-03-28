$(document).ready(function initialize(){
			
	var mapOptions = {
		center: new google.maps.LatLng(59.346630, 18.072056),
		zoom: 17,
		panControl: false,
		zoomControl: false,
		mapTypeId:"hybrid",
		mapTypeControl: false,
	};

    var map = new google.maps.Map($("#map-canvas")[0],
        mapOptions);
	
	var marker1 = new google.maps.Marker({
	 	position: map.getCenter(),
	 	map: map,
		draggable: true,
		animation: google.maps.Animation.BOUNCE,
	});
	
	var marker2 = new google.maps.Marker({
		position: new google.maps.LatLng(59.347630, 18.072056),
		map: map,
		draggable: false,
	});
	
	
	this.zoom_in = function() {
	  	map.setZoom(parseInt(map.getZoom())+1);
	  };
	this.zoom_out = function() {
		map.setZoom(parseInt(map.getZoom())-1);
	  };
	this.pan_left = function() {
		map.panBy(-200.0, 0);
	  };
	this.pan_right = function() {
		map.panBy(200.0, 0);
	  };
	
	this.pan_up = function() {
		map.panBy(0, -200.0);
	  };
	
	this.pan_down = function() {
		map.panBy(0, 200.0);
	  };	
	
	
	
});