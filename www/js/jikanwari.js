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
    }
};

// 初期化
app.initialize();
