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
    if(getDistance(lat1, lng1, lat2, lng2)>2){
      alert(getDistance(lat1,lng1,lat2,lng2)+"お前を許さない");
      window.location.href = 'http://192.168.0.101:3000'; // 通常の遷移
    }
};

//GPSエラーの場合
var geoError = function() {
    alert('Getting location failed.');//
};

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
      setTimeout(function(){
        navigator.geolocation.getCurrentPosition(getSuccess, geoError, { enableHighAccuracy: true });
      }, 10000);
    /*setTimeout(function(){window.location.href = 'http://192.168.0.101:3000'}, 10000);
      var tweet_btn = document.getElementById('tweet-start');*/



    }
}

function start1(){

  var now = new Date();
var years = now.getFullYear();
var monthes = now.getMonth()+1;
var today = now.getDate();
var youbi = now.getDay();
var hours = now.getHours();
var mins = now.getMinutes();
var secs = now.getSeconds();

//下の1行を追加
var weekday = ["日","月","火","水","木","金","土"];

//曜日の書き換えを変数youbiから変数weekdayに置き換える
document.getElementById('years').textContent = years;
document.getElementById('monthes').textContent = monthes;
document.getElementById('today').textContent = today;
document.getElementById('youbi').textContent = weekday[youbi];
document.getElementById('hours').textContent = hours;
document.getElementById('mins').textContent = mins;
document.getElementById('secs').textContent = secs;
}


app.initialize();
