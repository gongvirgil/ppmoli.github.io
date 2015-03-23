$(document).ready(function(){
	$('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class
    $.getScript('/public/js/prettify.js',function(){
        prettyPrint();
    });
    //文章页文章导航封顶
  	fixed("#markdown-toc","absolute","175px");
})