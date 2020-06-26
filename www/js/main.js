var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
      var gio_start_btn = document.getElementById('geo-start');

      gio_start_btn.addEventListener('click', function(){

          var onSuccess = function(position) {
            alert('Latitude: '          + position.coords.latitude          + '\n' +
                'Longitude: '         + position.coords.longitude         + '\n' +
                'Altitude: '          + position.coords.altitude          + '\n' +
                'Accuracy: '          + position.coords.accuracy          + '\n' +
                'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
                'Heading: '           + position.coords.heading           + '\n' +
                'Speed: '             + position.coords.speed             + '\n' +
                'Timestamp: '         + position.timestamp                + '\n');
          };
          // 失敗した時の処理
          function onError(error) {
            alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
          }

          var option = { enableHighAccuracy : true, timeout: 30000 };
          // 現在の位置情報を1度だけ取得
          navigator.geolocation.getCurrentPosition(onSuccess, onError, option);
      },false);
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
