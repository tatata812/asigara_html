$(function () {

  $("#js-hamburger-menu, .navigation__link").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active"); //ボタン自身に activeクラスを付与し
  });
  $(".header-sp").click(function () {
    $(".header-sp,.black-bg,.header").toggleClass("active");
    $('.hamburger-menu').toggleClass('hamburger-menu--open');
  });

  // ハンバーガーメニュー
  $(function () {
    $('#js-hamburger-menu, .navigation__link').on('click', function () {
      $('.navigation').slideToggle(500);
      $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  });

  // ヘッダー隠れる動き

  // let startPos = 0;
  // let winScrollTop = 0;
  // const Header = $('.header');
  // $(window).on('scroll', function () {
  //   winScrollTop = $(this).scrollTop();
  //   if (winScrollTop >= startPos && winScrollTop > 100) { // ここにコードを追加
  //     $(Header).addClass('is-hide');
  //   } else {
  //     $(Header).removeClass('is-hide');
  //   }
  //   startPos = winScrollTop;
  // });


  // ヘッダーに色つける
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".header").addClass("scrolled");
    } else {
      $(".header").removeClass("scrolled");
    }
  });

// トップまで戻る
  $('.footer__top-btn').on('click', function(e) {
    e.preventDefault(); // リンクのデフォルト動作を無効化（必要に応じて）
    $('html, body').animate({ scrollTop: 0 }, 500); // 500ミリ秒かけてトップへスクロール
  });


  //フェードイン
  $(window).scroll(function () {
    $('.fadein-anime,.fadein-anime02,.fadein-anime03,.fadein-anime04').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      if (scroll > pos - wHeight + wHeight / 100) {
        $(this).addClass('active');
      }
    });
  });


  $(window).scroll(function () {
    $('.fadein-anime03,.fadein-anime04').each(function () {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var wHeight = $(window).height();
      if (scroll > pos - wHeight + wHeight / 200) {
        $(this).addClass('active');
      }
    });
  });


  $(window).scroll(function () {
    // 要素の位置を取得
    var targetTop = $(".follow-btn-js").offset().top;
    // 要素の上端が画面上端から 200px 以上離れているかどうかを確認
    if (targetTop >= 800) {
      // 要素にクラスを付与
      $(".follow-btn-js").addClass("active");
    } else {
      // 要素からクラスを削除
      $(".follow-btn-js").removeClass("active");
    }
  });


  $(function () {
    var headerHeight = 40; // ヘッダーの高さ
    $('a[href^="#"]').click(function () {
      var speed = 500;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top - headerHeight;
      $("html, body").animate({
        scrollTop: position
      }, speed, "swing");
      return false;
    });
  });



// 会社概要ポップアップ
$("#company-popup").click(function() {
  $("#popup-container").fadeIn(); // フェードインで表示
});

$("#close-popup").click(function() {
  $("#popup-container").fadeOut(); // フェードアウトで非表示
});

// ポップアップの外側をクリックしても閉じるようにする場合 (任意)
$("#popup-container").click(function(event) {
  if (event.target === this) {
    $(this).fadeOut();
  }
});

})

