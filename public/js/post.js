$(document).ready(function(){
	$('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class
    $.getScript('/public/js/prettify.js',function(){
        prettyPrint();
    });
    //文章页文章导航封顶
	function fixed(id,position,top){
		var navH = $(id).offset().top;
		$(window).scroll(function(){
		  var scroH = $(this).scrollTop();
		  if(scroH>=navH){
		    $(id).css({"position":"fixed","top":top});
		  }else if(scroH<navH){
		    $(id).css({"position":position,"top":"175px"});
		  }
		})
	}
  	fixed($(".BlogAnchor"),"absolute","50px");
	//在文章中查找title并填充到div AnchorContent中
	$(".post_content").find("h2,h3,h4,h5,h6").each(function(i,item){
	    var tag = $(item).get(0).localName;
	    $(item).attr("id","wow"+i);
	    $("#AnchorContent").append('<li><a class="new'+tag+' anchor-link" onclick="return false;" href="#" link="#wow'+i+'">'+(i+1)+" · "+$(this).text()+'</a></li>');
	    $(".newh2").css("margin-left",0);
	    $(".newh3").css("margin-left",20);
	    $(".newh4").css("margin-left",40);
	    $(".newh5").css("margin-left",60);
	    $(".newh6").css("margin-left",80);
	});
	$("#AnchorContentToggle").click(function(){
		var obj = $(this).find('span');
	    var text = obj.html();
	    if(text=="-"){
	        obj.html("+");
	        $(this).attr({"title":"展开"});
	    }else{
	        obj.html("-");
	        $(this).attr({"title":"收起"});
	    }
	    $("#AnchorContent").toggle();
	});
	$(".anchor-link").click(function(){
	    $("html,body").animate({scrollTop: $($(this).attr("link")).offset().top}, 1000);
	});
})