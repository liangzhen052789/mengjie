/**
 * New node file
 */

//列表图片遮罩层
$(".list_img").hover(function() {
	$(this).find(".list_none").fadeIn();
}, function() {
	$(this).find(".list_none").stop().animate({
		"top": "-305"
	}, 300, function() {
		$(this).css({
			"display": "none",
			"top": "0"
		});
	});
})

//吸顶条
$(window).scroll(function() {
	var m = $(document).scrollTop();
	//console.log(m);
	if(m > 670) {
		$(".new_head").addClass("abc");
	} else {
		$(".new_head").removeClass("abc");
	}
});

//楼梯效果
var _index = 0;
$("#new_head a").mouseover(function() {
	$(this).addClass("active").siblings().removeClass("active");
})
$("#new_head a").click(function() {
	_index = $(this).index() + 1;
	var _top = $("#louti" + _index).offset().top - 45;
	$("body,html").animate({
		scrollTop: _top
	}, 500);
});
//下拉菜单
$(document).click(function(){
		$(".xiala_ul").removeClass("on");
	})
	$(".xiala").hover(function(){

	},function(){
		$(".xiala_ul").removeClass("on");
	})
$(".xiala_shuru").click(function(){
			if(!$(this).siblings("ul").hasClass("on")){
				$(this).siblings("ul").addClass("on");
				return false;
			}
			else{
				$(this).siblings("ul").removeClass("on");
				return false;
			}
			
	})

$(".xiala_ul li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");	
			$(this).parent("ul").removeClass("on");
			var zhi = $(this).html();
			$(this).parent(".xiala_ul").siblings().val(zhi);
			
	})

// 加入信息栏
	$(".btn_gojoin").on('click',function(){
		$(this).parents('.li').find(".new_job").slideDown();
	})
	$(".new_span").on('click',function(){
		$(this).parent(".new_job").slideUp();
	})