//当前版块
$(document).ready(function(){
	$(".nav li").width(100/$(".nav li").length+"%");
	document.getElementById(document.getElementById(window.location.href.replace('http://','').replace('https://','').split('/')[1])!=undefined?window.location.href.replace('http://','').replace('https://','').split('/')[1]:'blog').className="on";	
})
//切换版块
$(document).ready(function(){
  function animateBar($item,noAni){
    var spanLeft = $item.find('span').offset().left;
    var conLeft = $item.parent().offset().left;
    var left = spanLeft - conLeft;
    var width = $item.find('span').width() + 8;
    if(noAni){
    $('#cate_on').css({left:left,width:width})
    }else{
    $('#cate_on').stop().animate({left:left,width:width},300)
    }
  }
  var waitForFinalEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
      }
      if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
  $('.nav li')
  .mouseenter(function(){
    animateBar($(this));
  })
  .mouseleave(function(){
    animateBar($('.nav .on'));
  });
  $(window).resize(function(e){
    waitForFinalEvent(function(){
      animateBar($('.nav .on'));
    })
  })
  animateBar($('.nav .on'),true);
});
//标签文章
$.ajax.async = false;
$.getJSON("tag.json",
function(data) {
	$('.tags .y').each(function(index, el) {
	  var tagstr = $(this).attr('tag');
	  $('.tags .'+tagstr).empty();
	  var content = "<a class=\"list_head\"><h3>文章列表</h3></a>";
	  $.each(data,
	  function(i, item) {
	    $.each(item.tags,
	    function(j, tag) {
	      if (tag == tagstr) {
	        content += "<a href=\"" + item.url + "\">" + item.title + "</a>";
	      }
	    });
	  });
	  $('.tags .'+tagstr).append(content);       
	})           
}) 
//左侧封顶
$(document).ready(function(){
  function fixed(id){
    var navH = $(id).offset().top;
    $(window).scroll(function(){
      var scroH = $(this).scrollTop();
      if(scroH>=navH){
        $(id).css({"position":"fixed","top":0});
      }else if(scroH<navH){
        $(id).css({"position":"static"});
      }
    })
  }
  fixed("#home");      
})
//左侧切换
function toggle(index){
    index.toggleClass('on').parent().siblings('.x').toggle(500).children('a').removeClass('on');
    $('.'+index.attr('id')).toggle(500).siblings('.y').hide(500);
}
$(document).ready(function(){
    $('.x').on('click', 'a', function(){
      toggle($(this));
    });
/*    $('.cate .y').on({
      'mouseenter':function(){
        $(this).find('p').show(1000);
      },
      'mouseleave':function(){
        $(this).find('p').hide(); 
      }
    },'a');    */
})
//滚动条插件
$(document).ready(function(){
  $(".scrollContent").mCustomScrollbar({
/*    theme:"rounded-dark",
    setWidth:$(".scrollContent").width()+"px"*/
  })        
})

//返回顶部
if ($("#goTop").length > 0){
	$(window).scroll(function(){
	  if($(window).scrollTop()>200){
	    $("#goTop").fadeIn(600);
	  }else{
	    $("#goTop").fadeOut(600);
	  }
	});
	$("#goTop .goTop_btn").click(function(){
		$("body,html").animate({scrollTop:0},300);
		return false;
	});
	$(window).scroll();
}
//背景轮换
function change_bg(){
$("body").css('background','url("/public/images/bg'+Math.round(new Date().getMinutes()/5)+'.jpg") no-repeat fixed 0 0 / 100% 100% #fff');
}
$(document).ready(function(){
	change_bg();
	window.setInterval(change_bg, 1000*60*5);	
})