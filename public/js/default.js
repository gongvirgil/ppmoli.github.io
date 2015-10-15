var getQueryParm =  function(name){
  var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
  if(result == null || result.length < 1){
  return "";
  }
  return decodeURI(result[1]);
}
//返回顶部
$(document).ready(function(){
  $(window).scroll(function(){
      if ($(document).scrollTop() > 200 ) 
          $('.goTop').show();
      else 
          $('.goTop').hide();
  });
  $('#goTop_btn').click(function(){
      $('html, body').animate({scrollTop: 0}, 600);
  });
})
$(document).ready(function(){
  var hide_side_bar = function(){
    $('.shadow-screen,.side-bar').removeClass('on');
    $('').hide();
  }
  var show_side_bar = function(){
    $('.shadow-screen,.side-bar').addClass('on');
  }
  $('#side-bar-close-btn,.shadow-screen').on('click', hide_side_bar);
  $('#side-bar-btn').on('click', show_side_bar);
})
$(document).ready(function(){
  var ID = getQueryParm("TAG")||getQueryParm("CATE");
  var one = $("#"+ID).parent();
  one.clone().prependTo(one.parent()).show();
  one.remove();
})
//背景轮换
/*
var n=0;
function change_bg(){
  $("body").css('background','url("/public/images/bg'+n%12+'.jpg") no-repeat fixed 0 0 / 100% 100% #fff');
  n++;
}
$(document).ready(function(){
  n = Math.round(new Date().getMinutes()/5);
	change_bg();
	window.setInterval('change_bg()', 1000*60*5);	
})
*/


/*//切换版块
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
$.getJSON("/tag.json",
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
//左侧分类导航封顶
$(document).ready(function(){
  function fixed(id,position,top){
    var navH = $(id).offset().top;
    $(window).scroll(function(){
      var scroH = $(this).scrollTop();
      if(scroH>=navH){
        $(id).css({"position":"fixed","top":top});
      }else if(scroH<navH){
        $(id).css({"position":position,"top":top});
      }
    })
  }
  fixed("#home","static",0);     
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
})
//滚动条插件
$(document).ready(function(){
  $(".scrollContent").mCustomScrollbar({
  })        
})*/