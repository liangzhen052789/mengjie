var win = $(window);
var initWidth = 1920,
	initHeight = 1129,
	scale = initWidth / initHeight;

$(".main").css({
	"width": win.width(),
	"height": win.height()-1
});
var _w = win.width() + (2400 - 1920) * win.width() / 1920

$(".animate_x img").css("width", _w);
$(".animate_y img").css("width", win.width());
//轮播
	var timer = null;
	$(".list li").eq(0).show();
	$(".pop li").click(function() {
		$(this).addClass('cur').siblings().removeClass("cur");
		var index = $(this).index();
		i = index;
		$(".list li").eq(index).fadeIn(800).siblings().fadeOut(800);
	});
    var i = 0;
    timer = setInterval(play, 4000);
	function play() {
		i++;
		i = i > 4 ? 0 : i;
		$(".pop li").eq(i).addClass('cur').siblings().removeClass("cur");
		$(".list li").eq(i).fadeIn(800).siblings().fadeOut(800);
	}

	$(".main").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(play, 4000);
	});
	
	
//列表
   $(".level1 > a").click(function(){  
          var iclass = $(this).attr("class");  
          if (iclass=="current"){  
              $(this).next().hide();  
          }else {  
              $(this).addClass("current").next().show()  
                      .parent().siblings()  
                      .children("a").removeClass("current").next().hide();    
              return false;  
          }  
      });   
 
  
