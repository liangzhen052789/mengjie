/**
 * New node file
 */
$(".list_img").hover(function(){
		$(this).find(".list_none").fadeIn();
	},function(){
		$(this).find(".list_none").stop().animate({"top":"-305"},300,function(){
			$(this).css({"display":"none","top":"0"});
		});
	})

//吸顶条
    $(window).scroll( function() {
        var m =$(document).scrollTop();
        //console.log(m);
        if(m>670){
            $(".new_head").addClass("abc");
        }else{
            $(".new_head").removeClass("abc");
        }
    });
    
//楼梯效果
var _index=0;
 $("#new_head a").mouseover(function(){
 	$(this).addClass("active").siblings().removeClass("active");
 })
  $("#new_head a").click(function(){
     _index=$(this).index()+1;
     var _top=$("#louti"+_index).offset().top-45;
     $("body,html").animate({scrollTop:_top},500);
  });
