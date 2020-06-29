var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {

      var tweet_btn = document.getElementById('tweet-start');

      tweet_btn.addEventListener('click',
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
