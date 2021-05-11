// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'
{
    /* トップへ戻るボタン 
    ---------------------------*/
    var pageTop = $('#page_top');
    pageTop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    /* 文字サイズ変更
    ---------------------------*/
    $(function () {
        let txtSize = $(".txt-size__btn"); // .txt-size__btnのクラスを全て取得し、変数 txtSizeに配列で定義
        $(".txt-size__btn").on("click", function () { // txt-size__btnをクリックしたらイベント発火
            $(".is-active").removeClass("is-active"); // is-activeクラスを消す
            $(this).addClass("is-active"); // クリックした箇所にis-activeクラスを追加
        })
    })
    $(function () {
        // 小ボタンクリック
        $('#btn_s').click(function () {
            $("html").css('font-size', '14px');
        });
        // 中ボタンクリック
        $('#btn_m').click(function () {
            $("html").css('font-size', '16px');
        });
        // 大ボタンクリック
        $('#btn_l').click(function () {
            $("html").css('font-size', '18px');
        });
    });
}