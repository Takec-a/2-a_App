var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var button = document.getElementById("click_Btn1");
        button.addEventListener("click", clickBtn1);
    }
};
//画面読み込み時に前回決定した状態で表示
function start2(){

//localStorageからvalue値を取得
//2次元配列を定義
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

    

    //i=parseInt(str00);
    document.getElementById('jyugyo00').options[ary1[0][0]].selected=true;
    document.getElementById('jyugyo01').options[ary1[0][1]].selected=true;
    document.getElementById('jyugyo02').options[ary1[0][2]].selected=true;
    document.getElementById('jyugyo03').options[ary1[0][3]].selected=true;
    document.getElementById('jyugyo04').options[ary1[0][4]].selected=true;
    document.getElementById('jyugyo05').options[ary1[0][5]].selected=true;
    document.getElementById('jyugyo10').options[ary1[1][0]].selected=true;
    document.getElementById('jyugyo11').options[ary1[1][1]].selected=true;
    document.getElementById('jyugyo12').options[ary1[1][2]].selected=true;
    document.getElementById('jyugyo13').options[ary1[1][3]].selected=true;
    document.getElementById('jyugyo14').options[ary1[1][4]].selected=true;
    document.getElementById('jyugyo15').options[ary1[1][5]].selected=true;
    document.getElementById('jyugyo20').options[ary1[2][0]].selected=true;
    document.getElementById('jyugyo21').options[ary1[2][1]].selected=true;
    document.getElementById('jyugyo22').options[ary1[2][2]].selected=true;
    document.getElementById('jyugyo23').options[ary1[2][3]].selected=true;
    document.getElementById('jyugyo24').options[ary1[2][4]].selected=true;
    document.getElementById('jyugyo25').options[ary1[2][5]].selected=true;
    document.getElementById('jyugyo30').options[ary1[3][0]].selected=true;
    document.getElementById('jyugyo31').options[ary1[3][1]].selected=true;
    document.getElementById('jyugyo32').options[ary1[3][2]].selected=true;
    document.getElementById('jyugyo33').options[ary1[3][3]].selected=true;
    document.getElementById('jyugyo34').options[ary1[3][4]].selected=true;
    document.getElementById('jyugyo35').options[ary1[3][5]].selected=true;
    document.getElementById('jyugyo40').options[ary1[4][0]].selected=true;
    document.getElementById('jyugyo41').options[ary1[4][1]].selected=true;
    document.getElementById('jyugyo42').options[ary1[4][2]].selected=true;
    document.getElementById('jyugyo43').options[ary1[4][3]].selected=true;
    document.getElementById('jyugyo44').options[ary1[4][4]].selected=true;
    document.getElementById('jyugyo45').options[ary1[4][5]].selected=true;
    document.getElementById('jyugyo50').options[ary1[5][0]].selected=true;
    document.getElementById('jyugyo51').options[ary1[5][1]].selected=true;
    document.getElementById('jyugyo52').options[ary1[5][2]].selected=true;
    document.getElementById('jyugyo53').options[ary1[5][3]].selected=true;
    document.getElementById('jyugyo54').options[ary1[5][4]].selected=true;
    document.getElementById('jyugyo55').options[ary1[5][5]].selected=true;
     
}

function clickBtn1(){
//いろいろあってlocalstorageの値を更新

    localStorage.removeItem("jyugyo00");
    localStorage.removeItem("jyugyo01");
    localStorage.removeItem("jyugyo02");
    localStorage.removeItem("jyugyo03");
    localStorage.removeItem("jyugyo04");
    localStorage.removeItem("jyugyo05");
    localStorage.removeItem("jyugyo10");
    localStorage.removeItem("jyugyo11");
    localStorage.removeItem("jyugyo12");
    localStorage.removeItem("jyugyo13");
    localStorage.removeItem("jyugyo14");
    localStorage.removeItem("jyugyo15");
    localStorage.removeItem("jyugyo20");
    localStorage.removeItem("jyugyo21");
    localStorage.removeItem("jyugyo22");
    localStorage.removeItem("jyugyo23");
    localStorage.removeItem("jyugyo24");
    localStorage.removeItem("jyugyo25");
    localStorage.removeItem("jyugyo30");
    localStorage.removeItem("jyugyo31");
    localStorage.removeItem("jyugyo32");
    localStorage.removeItem("jyugyo33");
    localStorage.removeItem("jyugyo34");
    localStorage.removeItem("jyugyo35");
    localStorage.removeItem("jyugyo40");
    localStorage.removeItem("jyugyo41");
    localStorage.removeItem("jyugyo42");
    localStorage.removeItem("jyugyo43");
    localStorage.removeItem("jyugyo44");
    localStorage.removeItem("jyugyo45");
    localStorage.removeItem("jyugyo50");
    localStorage.removeItem("jyugyo51");
    localStorage.removeItem("jyugyo52");
    localStorage.removeItem("jyugyo53");
    localStorage.removeItem("jyugyo54");
    localStorage.removeItem("jyugyo55");
    
    const jyugyo00 = document.form1.jyugyo00;
    const jyugyo01 = document.form1.jyugyo01;
    const jyugyo02 = document.form1.jyugyo02;
    const jyugyo03 = document.form1.jyugyo03;
    const jyugyo04 = document.form1.jyugyo04;
    const jyugyo05 = document.form1.jyugyo05;
    const jyugyo10 = document.form1.jyugyo10;
    const jyugyo11 = document.form1.jyugyo11;
    const jyugyo12 = document.form1.jyugyo12;
    const jyugyo13 = document.form1.jyugyo13;
    const jyugyo14 = document.form1.jyugyo14;
    const jyugyo15 = document.form1.jyugyo15;
    const jyugyo20 = document.form1.jyugyo20;
    const jyugyo21 = document.form1.jyugyo21;
    const jyugyo22 = document.form1.jyugyo22;
    const jyugyo23 = document.form1.jyugyo23;
    const jyugyo24 = document.form1.jyugyo24;
    const jyugyo25 = document.form1.jyugyo25;
    const jyugyo30 = document.form1.jyugyo30;
    const jyugyo31 = document.form1.jyugyo31;
    const jyugyo32 = document.form1.jyugyo32;
    const jyugyo33 = document.form1.jyugyo33;
    const jyugyo34 = document.form1.jyugyo34;
    const jyugyo35 = document.form1.jyugyo35;
    const jyugyo40 = document.form1.jyugyo40;
    const jyugyo41 = document.form1.jyugyo41;
    const jyugyo42 = document.form1.jyugyo42;
    const jyugyo43 = document.form1.jyugyo43;
    const jyugyo44 = document.form1.jyugyo44;
    const jyugyo45 = document.form1.jyugyo45;
    const jyugyo50 = document.form1.jyugyo50;
    const jyugyo51 = document.form1.jyugyo51;
    const jyugyo52 = document.form1.jyugyo52;
    const jyugyo53 = document.form1.jyugyo53;
    const jyugyo54 = document.form1.jyugyo54;
    const jyugyo55 = document.form1.jyugyo55;


	// 値(数値)を取得
    const num00 = jyugyo00.selectedIndex;
    const num01 = jyugyo01.selectedIndex;
    const num02 = jyugyo02.selectedIndex;
    const num03 = jyugyo03.selectedIndex;
    const num04 = jyugyo04.selectedIndex;
    const num05 = jyugyo05.selectedIndex;
    const num10 = jyugyo10.selectedIndex;
    const num11 = jyugyo11.selectedIndex;
    const num12 = jyugyo12.selectedIndex;
    const num13 = jyugyo13.selectedIndex;
    const num14 = jyugyo14.selectedIndex;
    const num15 = jyugyo15.selectedIndex;
    const num20 = jyugyo20.selectedIndex;
    const num21 = jyugyo21.selectedIndex;
    const num22 = jyugyo22.selectedIndex;
    const num23 = jyugyo23.selectedIndex;
    const num24 = jyugyo24.selectedIndex;
    const num25 = jyugyo25.selectedIndex;
    const num30 = jyugyo30.selectedIndex;
    const num31 = jyugyo31.selectedIndex;
    const num32 = jyugyo32.selectedIndex;
    const num33 = jyugyo33.selectedIndex;
    const num34 = jyugyo34.selectedIndex;
    const num35 = jyugyo35.selectedIndex;
    const num40 = jyugyo40.selectedIndex;
    const num41 = jyugyo41.selectedIndex;
    const num42 = jyugyo42.selectedIndex;
    const num43 = jyugyo43.selectedIndex;
    const num44 = jyugyo44.selectedIndex;
    const num45 = jyugyo45.selectedIndex;
    const num50 = jyugyo50.selectedIndex;
    const num51 = jyugyo51.selectedIndex;
    const num52 = jyugyo52.selectedIndex;
    const num53 = jyugyo53.selectedIndex;
    const num54 = jyugyo54.selectedIndex;
    const num55 = jyugyo55.selectedIndex;
    
	//const num = document.form1.color1.selectedIndex;

    localStorage.setItem("jyugyo00",jyugyo00.options[num00].value);
    localStorage.setItem("jyugyo01",jyugyo00.options[num01].value);
    localStorage.setItem("jyugyo02",jyugyo00.options[num02].value);
    localStorage.setItem("jyugyo03",jyugyo00.options[num03].value);
    localStorage.setItem("jyugyo04",jyugyo00.options[num04].value);
    localStorage.setItem("jyugyo05",jyugyo00.options[num05].value);
    localStorage.setItem("jyugyo10",jyugyo00.options[num10].value);
    localStorage.setItem("jyugyo11",jyugyo00.options[num11].value);
    localStorage.setItem("jyugyo12",jyugyo00.options[num12].value);
    localStorage.setItem("jyugyo13",jyugyo00.options[num13].value);
    localStorage.setItem("jyugyo14",jyugyo00.options[num14].value);
    localStorage.setItem("jyugyo15",jyugyo00.options[num15].value);
    localStorage.setItem("jyugyo20",jyugyo00.options[num20].value);
    localStorage.setItem("jyugyo21",jyugyo00.options[num21].value);
    localStorage.setItem("jyugyo22",jyugyo00.options[num22].value);
    localStorage.setItem("jyugyo23",jyugyo00.options[num23].value);
    localStorage.setItem("jyugyo24",jyugyo00.options[num24].value);
    localStorage.setItem("jyugyo25",jyugyo00.options[num25].value);
    localStorage.setItem("jyugyo30",jyugyo00.options[num30].value);
    localStorage.setItem("jyugyo31",jyugyo00.options[num31].value);
    localStorage.setItem("jyugyo32",jyugyo00.options[num32].value);
    localStorage.setItem("jyugyo33",jyugyo00.options[num33].value);
    localStorage.setItem("jyugyo34",jyugyo00.options[num34].value);
    localStorage.setItem("jyugyo35",jyugyo00.options[num35].value);
    localStorage.setItem("jyugyo40",jyugyo00.options[num40].value);
    localStorage.setItem("jyugyo41",jyugyo00.options[num41].value);
    localStorage.setItem("jyugyo42",jyugyo00.options[num42].value);
    localStorage.setItem("jyugyo43",jyugyo00.options[num43].value);
    localStorage.setItem("jyugyo44",jyugyo00.options[num44].value);
    localStorage.setItem("jyugyo45",jyugyo00.options[num45].value);
    localStorage.setItem("jyugyo50",jyugyo00.options[num50].value);
    localStorage.setItem("jyugyo51",jyugyo00.options[num51].value);
    localStorage.setItem("jyugyo52",jyugyo00.options[num52].value);
    localStorage.setItem("jyugyo53",jyugyo00.options[num53].value);
    localStorage.setItem("jyugyo54",jyugyo00.options[num54].value);
    localStorage.setItem("jyugyo55",jyugyo00.options[num55].value);

    
}


// 初期化
app.initialize();
