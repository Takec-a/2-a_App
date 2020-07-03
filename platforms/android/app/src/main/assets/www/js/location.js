//２点間を計算する関数
var getSuccess = function(pos) {
    //現在地 lat:緯度,lng:経度
    var geo = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
    };
    //現在地の緯度経度
    var lat1 = geo.lat;
    var lng1 = geo.lng;

    /*新宿の座標*/
    var lat2 = 35.689487;
    var lng2 = 139.691706;

    //距離の計算//
    function getDistance(lat1, lng1, lat2, lng2) {

       function radians(deg){
          return deg * Math.PI / 180;
       }

       return 6378.14 * Math.acos(Math.cos(radians(lat1))*
        Math.cos(radians(lat2))*
        Math.cos(radians(lng2)-radians(lng1))+
        Math.sin(radians(lat1))*
        Math.sin(radians(lat2)));
    }
    /*結果*/
    alert(getDistance(lat1,lng1,lat2,lng2));
    
};

//GPSエラーの場合
var geoError = function() {
    alert('Getting location failed.');//
};

/*GeoLocationAPIで現在地の座標を取得する*/
document.getElementById("start").onclick = function(){
    navigator.geolocation.getCurrentPosition(getSuccess, geoError, { enableHighAccuracy: true });
};
