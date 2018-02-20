
$('.navbar-toggler').on('click',function(){
	$(this).toggleClass('active');
});

//ゼロ幅スペース削除
$(window).on("load reload",function() {
  var spChar = [
    11,   // 垂直タブ
    8203  // ゼロ幅スペース
  ];
 
  $("特殊文字を除去したいセレクタ指定").each(function() {
    var txtBefore = $(this)[0].innerHTML;
    var txtAfter = "";
    for (var i=0; i < txtBefore.length; i++) {
      var chr = txtBefore.charCodeAt(i);
      if (spChar.indexOf(chr) == -1) {
        txtAfter += String.fromCharCode(chr);
      }
    }
    $(this)[0].innerHTML = txtAfter;
  });
});

$(function() {
	// フェードインしながら上へスライド    
  $('.inviewfadeInUp').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('fadeInUp');
    } else {
      $(this).stop().removeClass('fadeInUp');
    }
  });
	// フェードインしながら左へスライド    
  $('.inviewfadeInLeft').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('fadeInLeft');
    } else {
      $(this).stop().removeClass('fadeInLeft');
    }
  });
  // フェードインしながら右へスライド    
  $('.inviewfadeInRight').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('fadeInRight');
    } else {
      $(this).stop().removeClass('fadeInRight');
    }
  });
  // ブログサムネイル表示用    
  $('.inviewContentAppear').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).stop().addClass('ContentAppear');
    } else {
      $(this).stop().removeClass('ContentAppear');
    }
  });
});