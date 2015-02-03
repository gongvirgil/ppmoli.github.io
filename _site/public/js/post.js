$(document).ready(function(){
	$('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class
    $.getScript('/public/js/prettify.js',function(){
        prettyPrint();
    });
})