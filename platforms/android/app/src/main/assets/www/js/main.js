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



//時間割の内容からニ次元配列を作成
var ary1 = [[0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0]];

//localstorageからvalue値を取得
    str00=localStorage.getItem("jyugyo00");
    str01=localStorage.getItem("jyugyo01");
    str02=localStorage.getItem("jyugyo02");
    str03=localStorage.getItem("jyugyo03");
    str04=localStorage.getItem("jyugyo04");
    str05=localStorage.getItem("jyugyo05");
    str10=localStorage.getItem("jyugyo10");
    str11=localStorage.getItem("jyugyo11");
    str12=localStorage.getItem("jyugyo12");
    str13=localStorage.getItem("jyugyo13");
    str14=localStorage.getItem("jyugyo14");
    str15=localStorage.getItem("jyugyo15");
    str20=localStorage.getItem("jyugyo20");
    str21=localStorage.getItem("jyugyo21");
    str22=localStorage.getItem("jyugyo22");
    str23=localStorage.getItem("jyugyo23");
    str24=localStorage.getItem("jyugyo24");
    str25=localStorage.getItem("jyugyo25");
    str30=localStorage.getItem("jyugyo30");
    str31=localStorage.getItem("jyugyo31");
    str32=localStorage.getItem("jyugyo32");
    str33=localStorage.getItem("jyugyo33");
    str34=localStorage.getItem("jyugyo34");
    str35=localStorage.getItem("jyugyo35");
    str40=localStorage.getItem("jyugyo40");
    str41=localStorage.getItem("jyugyo41");
    str42=localStorage.getItem("jyugyo42");
    str43=localStorage.getItem("jyugyo43");
    str44=localStorage.getItem("jyugyo44");
    str45=localStorage.getItem("jyugyo45");
    str50=localStorage.getItem("jyugyo50");
    str51=localStorage.getItem("jyugyo51");
    str52=localStorage.getItem("jyugyo52");
    str53=localStorage.getItem("jyugyo53");
    str54=localStorage.getItem("jyugyo54");
    str55=localStorage.getItem("jyugyo55");

//value値を整数型に変換して配列に格納
    ary1[0][0] = parseInt(str00);
    ary1[0][1] = parseInt(str01);
    ary1[0][2] = parseInt(str02);
    ary1[0][3] = parseInt(str03);
    ary1[0][4] = parseInt(str04);
    ary1[0][5] = parseInt(str05);
    ary1[1][0] = parseInt(str10);
    ary1[1][1] = parseInt(str11);
    ary1[1][2] = parseInt(str12);
    ary1[1][3] = parseInt(str13);
    ary1[1][4] = parseInt(str14);
    ary1[1][5] = parseInt(str15);
    ary1[2][0] = parseInt(str20);
    ary1[2][1] = parseInt(str21);
    ary1[2][2] = parseInt(str22);
    ary1[2][3] = parseInt(str23);
    ary1[2][4] = parseInt(str24);
    ary1[2][5] = parseInt(str25);
    ary1[3][0] = parseInt(str30);
    ary1[3][1] = parseInt(str31);
    ary1[3][2] = parseInt(str32);
    ary1[3][3] = parseInt(str33);
    ary1[3][4] = parseInt(str34);
    ary1[3][5] = parseInt(str35);
    ary1[4][0] = parseInt(str40);
    ary1[4][1] = parseInt(str41);
    ary1[4][2] = parseInt(str42);
    ary1[4][3] = parseInt(str43);
    ary1[4][4] = parseInt(str44);
    ary1[4][5] = parseInt(str45);
    ary1[5][0] = parseInt(str50);
    ary1[5][1] = parseInt(str51);
    ary1[5][2] = parseInt(str52);
    ary1[5][3] = parseInt(str53);
    ary1[5][4] = parseInt(str54);
    ary1[5][5] = parseInt(str55);

  //曜日を指定
  var j = youbi-1;
  var flag=0;
  //最初の授業は何限か
  var hajime = -1 ;
    for(var l=0;l<7;l++){
      for(var i=0;i<6;i++){
        if(ary1[i][j]==1){
          hajime = i+1;
          var kaishiyoubi = j;
          localStorage.removeItem("kaishiyoubi");
          localStorage.setItem("kaishiyoubi",kaishiyoubi);
          flag=1;
          break;
        }
     }
     j=(j+1)%7;
     if(flag==1){
       break;
     }
    }
  document.getElementById('hajime').textContent = hajime;

  //最初の授業開始時刻を求める
  var kaishiji = -1;
  var kaishihun = -1;

  if(hajime==1){kaishiji=9;kaishihun=0;}
  if(hajime==2){kaishiji=10;kaishihun=40;}
  if(hajime==3){kaishiji=13;kaishihun=20;}
  if(hajime==4){kaishiji=15;kaishihun=0;}
  if(hajime==5){kaishiji=16;kaishihun=40;}
  if(hajime==6){kaishiji=18;kaishihun=20;}

  document.getElementById('kaishiji').textContent = kaishiji;
  document.getElementById('kaishihun').textContent = kaishihun;
  //document.getElementById('kaishiyoubi').textContent = kaishiyoubi;
  localStorage.removeItem("kaishiji");
  localStorage.removeItem("kaishihun");
  //localStorage.removeItem("kaishiyoubi");
  localStorage.setItem("kaishiji",kaishiji);
  localStorage.setItem("kaishihun",kaishihun);
  //localStorage.setItem("kaishiyoubi",kaishiyoubi);


  //差分ミリ秒参考
  /*
  str0=localStorage.getItem("kaishiji");
  str1=localStorage.getItem("kaishihun");
  str2=localStorage.getItem("kaishiyoubi");

  var k1 = parseInt(str0);
  var k2 = parseInt(str1);
  var k3 = parseInt(str2);

  var t1 = k1-hours;
  var t2 = k2-mins;
  var t3 = k3-(youbi-1);
  if(t3<0){
    t3=7-(-1*t3);
  }
  //現在時刻が授業開始前

    //返す値はその日の授業開始時刻と現在時刻の差分
    var data1 = new Date(years,monthes,today,hours,mins,secs);
    var data2 = new Date(years,monthes,today+t3,k1,k2,0);
    var diff = data2-data1;
    document.getElementById('settime').textContent = diff;
  */




/*

  if(t1<0){
    var jikai = -1;
    j=j+1;
    while(jikai==-1){
      for(var i=0;i<6;i++){
        if(ary1[i][j]==1){
          jikai = i+1;

         break;
       }
      }
      if(i==6){
        j++;
        if(j==6){
          j=0;
        }
      }
    }
    //最初の授業開始時刻を求める
    var kaishiji = -1;
    var kaishihun = -1;

    if(jikai==1){kaishiji=9;kaishihun=0;}
    if(jikai==2){kaishiji=10;kaishihun=40;}
    if(jikai==3){kaishiji=13;kaishihun=20;}
    if(jikai==4){kaishiji=15;kaishihun=0;}
    if(jikai==5){kaishiji=16;kaishihun=40;}
    if(jikai==6){kaishiji=18;kaishihun=20;}
    document.getElementById('tsuginohi').textContent = weekday[j+1];
    document.getElementById('t1').textContent = kaishiji;
    document.getElementById('t2').textContent = kaishihun;
  }
     */
}

function searchtime(){
  start1();
  var now = new Date();
  var years = now.getFullYear();
  var monthes = now.getMonth()+1;
  var today = now.getDate();
  var youbi = now.getDay();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();
  var weekday = ["日","月","火","水","木","金","土"];

  var ary1 = [[0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0],
             [0,0,0,0,0,0]];

//localstorageからvalue値を取得
    str00=localStorage.getItem("jyugyo00");
    str01=localStorage.getItem("jyugyo01");
    str02=localStorage.getItem("jyugyo02");
    str03=localStorage.getItem("jyugyo03");
    str04=localStorage.getItem("jyugyo04");
    str05=localStorage.getItem("jyugyo05");
    str10=localStorage.getItem("jyugyo10");
    str11=localStorage.getItem("jyugyo11");
    str12=localStorage.getItem("jyugyo12");
    str13=localStorage.getItem("jyugyo13");
    str14=localStorage.getItem("jyugyo14");
    str15=localStorage.getItem("jyugyo15");
    str20=localStorage.getItem("jyugyo20");
    str21=localStorage.getItem("jyugyo21");
    str22=localStorage.getItem("jyugyo22");
    str23=localStorage.getItem("jyugyo23");
    str24=localStorage.getItem("jyugyo24");
    str25=localStorage.getItem("jyugyo25");
    str30=localStorage.getItem("jyugyo30");
    str31=localStorage.getItem("jyugyo31");
    str32=localStorage.getItem("jyugyo32");
    str33=localStorage.getItem("jyugyo33");
    str34=localStorage.getItem("jyugyo34");
    str35=localStorage.getItem("jyugyo35");
    str40=localStorage.getItem("jyugyo40");
    str41=localStorage.getItem("jyugyo41");
    str42=localStorage.getItem("jyugyo42");
    str43=localStorage.getItem("jyugyo43");
    str44=localStorage.getItem("jyugyo44");
    str45=localStorage.getItem("jyugyo45");
    str50=localStorage.getItem("jyugyo50");
    str51=localStorage.getItem("jyugyo51");
    str52=localStorage.getItem("jyugyo52");
    str53=localStorage.getItem("jyugyo53");
    str54=localStorage.getItem("jyugyo54");
    str55=localStorage.getItem("jyugyo55");

//value値を整数型に変換して配列に格納
    ary1[0][0] = parseInt(str00);
    ary1[0][1] = parseInt(str01);
    ary1[0][2] = parseInt(str02);
    ary1[0][3] = parseInt(str03);
    ary1[0][4] = parseInt(str04);
    ary1[0][5] = parseInt(str05);
    ary1[1][0] = parseInt(str10);
    ary1[1][1] = parseInt(str11);
    ary1[1][2] = parseInt(str12);
    ary1[1][3] = parseInt(str13);
    ary1[1][4] = parseInt(str14);
    ary1[1][5] = parseInt(str15);
    ary1[2][0] = parseInt(str20);
    ary1[2][1] = parseInt(str21);
    ary1[2][2] = parseInt(str22);
    ary1[2][3] = parseInt(str23);
    ary1[2][4] = parseInt(str24);
    ary1[2][5] = parseInt(str25);
    ary1[3][0] = parseInt(str30);
    ary1[3][1] = parseInt(str31);
    ary1[3][2] = parseInt(str32);
    ary1[3][3] = parseInt(str33);
    ary1[3][4] = parseInt(str34);
    ary1[3][5] = parseInt(str35);
    ary1[4][0] = parseInt(str40);
    ary1[4][1] = parseInt(str41);
    ary1[4][2] = parseInt(str42);
    ary1[4][3] = parseInt(str43);
    ary1[4][4] = parseInt(str44);
    ary1[4][5] = parseInt(str45);
    ary1[5][0] = parseInt(str50);
    ary1[5][1] = parseInt(str51);
    ary1[5][2] = parseInt(str52);
    ary1[5][3] = parseInt(str53);
    ary1[5][4] = parseInt(str54);
    ary1[5][5] = parseInt(str55);

  str0=localStorage.getItem("kaishiji");
  str1=localStorage.getItem("kaishihun");
  str2=localStorage.getItem("kaishiyoubi");

  var k1 = parseInt(str0);
  var k2 = parseInt(str1);
  var k3 = parseInt(str2);

  var t1 = k1-hours;
  var t2 = k2-mins;
  var t3 = k3-(youbi-1);
  if(t3<0){
    t3=7-(-1*t3);
  }
  //現在時刻が授業開始前
  if(t1>0){
    //返す値はその日の授業開始時刻と現在時刻の差分
    var data1 = new Date(years,monthes,today,hours,mins,secs);
    var data2 = new Date(years,monthes,today+t3,k1,k2,0);
    var diff = data2-data1;
    document.getElementById('settime').textContent = (diff/(3600*1000)).toFixed(0);
    return diff;
  }
  //現在時刻が時間は授業開始時間と同じ
  if(t1==0){
    var data1 = new Date(years,monthes,today,hours,mins,secs+5);
    var diff = (data1.getTime() - data1.getTime() + 10000);
    document.getElementById('settime').textContent = (diff/(3600*1000)).toFixed(0);
    return diff;
  }
  //現在時刻が授業開始時刻を過ぎている
  if(t1<0){
    //最初の授業は何限か
    var j = (youbi+1)%7;
    var flag=0;
    //最初の授業は何限か
    var hajime = -1 ;
      for(var l=0;l<7;l++){
        for(var i=0;i<6;i++){
          if(ary1[i][j]==1){
            hajime = i+1;
            var kaishiyoubi = j;
            flag=1;
            break;
          }
       }
       j=(j+1)%7;
       if(flag==1){
         break;
       }
      }
      t3=kaishiyoubi-(youbi-1);
      if(t3<0){
        t3=7-(-1*t3);
      }
      if(hajime==1){kaishiji=9;kaishihun=0;}
      if(hajime==2){kaishiji=10;kaishihun=40;}
      if(hajime==3){kaishiji=13;kaishihun=20;}
      if(hajime==4){kaishiji=15;kaishihun=0;}
      if(hajime==5){kaishiji=16;kaishihun=40;}
      if(hajime==6){kaishiji=18;kaishihun=20;}
      var data1 = new Date(years,monthes,today,hours,mins,secs);
      var data2 = new Date(years,monthes,today+t3,kaishiji,kaishihun,0);
      var diff = data2-data1;
      document.getElementById('settime').textContent = (diff/(3600*1000)).toFixed(0);
      return diff;
  }
  return 10;
  //いったい何をreturnすればええんや
}

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
      setTimeout(function(){
       navigator.geolocation.getCurrentPosition(getSuccess, geoError, { enableHighAccuracy: true });
     }, searchtime());
    /*setTimeout(function(){window.location.href = 'http://192.168.0.101:3000'}, 10000);
      var tweet_btn = document.getElementById('tweet-start');*/
    }
}


app.initialize();
