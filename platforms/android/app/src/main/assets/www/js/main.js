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
app.initialize();
