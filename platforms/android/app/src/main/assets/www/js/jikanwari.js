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

// 初期化
app.initialize();
