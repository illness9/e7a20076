let index=0
const ticker = () =>{
  const images = document.querySelectorAll('.slideshow-container img')
  for(image of images){
    image.style.display ='none'
  }
  images[index].style.display ='block'

  index++
  if(index>=images.length){
    index=0
  }
  setTimeout(ticker,5000) //待機時間
}
document.addEventListener('DOMContentLoaded',()=>{
  ticker()
})





//

function FixedAnime() {
	var elemTop = $('.main-contents').offset().top;//.main-contentsの位置
	var scroll = $(window).scrollTop();
	if(scroll <= 20){//上から20pxスクロールされたら 
      $('.slideshow-container').addClass('DownMove');//DownMoveというクラス名を除き 
  } else if (scroll >= elemTop){
			$('.slideshow-container').removeClass('UpMove');
			$('.slideshow-container').addClass('DownMove');

		}else{
			if($('.slideshow-container').hasClass('DownMove')){ 
				$('.slideshow-container').removeClass('DownMove');//DownMoveというクラス名を除き
				$('.slideshow-container').addClass('UpMove');//UpnMoveというクラス名を付与
			}
		}
}




//logo
$(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//1500msでフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//1200msでフェードアウト
  });


document.getElementById("navbtn").onclick = function(){
document.querySelector('html').classList.toggle('open');
  }





  
 

  function slideAnime() {
    //テキストが左から右に流れるアニメーション
    $('.leftAnime').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
     // If 要素がスクロール位置まで移動した場合
      if (scroll >= elemPos - windowHeight) {
        //クラス付与
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
      } else {
        //クラス削除
        $(this).removeClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
   
      }
    });
   
  }
   
  //スクロールしたらアニメーションさせる
  $(window).scroll(function () {
    slideAnime();
  });
  // ページが読み込まれたらアニメーションさせる
  $(window).on('load', function () {
    slideAnime();
  });

  if (scroll >= elemPos - windowHeight) {
    //クラス付与
    window.setTimeout(slideAnimetop, 5000);
    function slideAnimetop(){
        $(this).addClass("slideAnimeLeftRight");
        $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
}
    $(this).addClass("slideAnimeLeftRight");
    $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft"); 
  } else {
    //クラス削除
    $(this).removeClass("slideAnimeLeftRight");
    $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
  }




