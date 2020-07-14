var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        var button = document.getElementById("take_pictures");
        button.addEventListener("click", takePictures);
    },
    onDeviceReady: function() {
        var button = document.getElementById("click_Btn2");
        button.addEventListener("click", clickBtn2);
    }
};

function start3(){
//画面読み込み時に前回決定した状態で表示
    str=localStorage.getItem("gakko");

    g=parseInt(str);   

    //i=parseInt(str00);
    document.getElementById('gakko').options[g].selected=true;
   
}

function clickBtn2(){
//localStorageの値を更新
    localStorage.removeItem("gakko");
    
    
    const gakko = document.form2.gakko;
    


	// 値(数値)を取得
    const num = gakko.selectedIndex;
    
    
	//const num = document.form1.color1.selectedIndex;

    localStorage.setItem("gakko",gakko.options[num].value);
   
    
    
}

// 初期化
app.initialize();

