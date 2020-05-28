function alertDismissed() {
    // 処理
}

function showAlertDialog() {
    navigator.notification.alert(　 //カスタマイズ可能なメッセージダイアログボックスを表示
        "メッセージ",
        alertDismissed, // コールバック
        "タイトル", // タイトル
        "閉じる" // ボタン名
  );
}
document.addEventListener("backbutton", onBackClickEvent, false); //戻るボタンを押したときに発生
function confirmCallback(id) {
    if (1 == id) { //終了のボタンが押されたら
        navigator.app.exitApp(); //アプリ終了
    }
}

function onBackClickEvent() {
        navigator.notification.confirm( //カスタマイズ可能な確認用ダイアログボックスを表示
            "アプリケーションを終了しますか？", // メッセージ
            confirmCallback, // コールバックは、押されたボタンのインデックスで呼び出す
            "終了メニュー", // タイトル
            "終了,キャンセル" // ボタンの表示名
        )
}

//トップページかどうかを設定する場合
function onBackClickEvent() {
    if (location.href == "file:///android_asset/www/index.html") { //トップページなら
        navigator.notification.confirm( //カスタマイズ可能な確認用ダイアログボックスを表示
            "アプリケーションを終了しますか？", // メッセージ
            confirmCallback, // コールバックは、押されたボタンのインデックスで呼び出す
            "終了メニュー", // タイトル
            "終了,キャンセル" // ボタンの表示名
        )
    } else {
        history.back(); //一つ前のページへ戻る
    }
}
