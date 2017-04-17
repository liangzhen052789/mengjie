var win = $(window);
var initWidth = 1920,
	initHeight = 1129,
	scale = initWidth / initHeight;

$(".main").css({
	"width": win.width(),
	"height": win.height() - 1
});
var _w = win.width() + (2400 - 1920) * win.width() / 1920

$(".animate_x img").css("width", _w);
$(".animate_y img").css("width", win.width());
//轮播
var timer = null;
$(".list li").eq(0).show();
$(".reset li").eq(0).show();
$(".pop li").click(function() {
	$(this).addClass('cur').siblings().removeClass("cur");
	var index = $(this).index();
	i = index;
	$(".list li").eq(index).fadeIn(800).siblings().fadeOut(800);
	$(".reset li").eq(index).fadeIn(800).siblings().fadeOut(800);
});
var i = 0;
timer = setInterval(play, 5000);

function play() {
	i++;
	i = i > 4 ? 0 : i;
	$(".pop li").eq(i).addClass('cur').siblings().removeClass("cur");
	$(".list li").eq(i).fadeIn(800).siblings().fadeOut(800);
	$(".reset li").eq(i).fadeIn(800).siblings().fadeOut(800);
}

//列表
$('.leftbar_main').hover(function() {
	$('.meanu').stop().fadeOut(800);
	$('.xianshi').stop().fadeIn(800);
}, function() {
	$('.xianshi').stop().fadeOut(800);
	$('.meanu').stop().fadeIn(800);
});
$('.xianshi').find('li').click(function() {
	$('.xianshi').find('li').find('ul').stop().slideUp(500);
	if($(this).find('ul').css('display') == 'block') {
		$(this).find('ul').stop().slideUp(500);
	} else {
		$(this).find('ul').stop().slideDown(500);
	}
})

//中间xiao轮播
$(".banner .reset").hover(function() {
	clearInterval(timer);
	$(".banner .reset li").find("h3").animate({
		"top": "-5%",
		"opacity": "0"
	}, 500);
	$(".banner .list li").find("img").addClass("blur");
	$(".banner .reset li").find(".txt").animate({
		"top": "7.5%",
		"opacity": "1"
	}, 500, function() {
		$(".banner .reset li").find(".btn").fadeIn(500);
	});

}, function() {
	$(".banner .reset li").find("h3").animate({
		"top": "0%",
		"opacity": "1"
	}, 500);
	$(".banner .list li").find("img").removeClass("blur");
	$(".banner .reset li").find(".btn").fadeOut(500);
	$(".banner .reset li").find(".txt").animate({
		"top": "10%",
		"opacity": "0"
	}, 500);
	timer = setInterval(play, 5000);
})

//视频部分
$(".video_job").click(function() {
		$(".video").fadeOut(800);
		$(".video").remove();
		$(".main").fadeIn(800).css('display', 'block');
	})
	//监听视频播放结束
vedio.addEventListener('ended', function() {
	$(".video_job").fadeOut();
	setTimeout(function() {
		$(".video").remove();
		$(".main").fadeIn(800).css('display', 'block');
	}, 1000)

})