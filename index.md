---
layout: index
---

<!-- {% include category_list.html %} -->
<div class="posts">
  <ul class="artical-list"  id="post_list">
    {% for post in site.categories.blog %}
      <li>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          <div class="title-desc"><p>{{ post.description }}</p></div>
          <div class="post_meta">
            <div  class="date">
              <span></span>  
              <a href="">{{ post.date | date: "%F" }}</a>
            </div>
            <div class="comment">
              <span></span>  
              <a href="">1条评论</a>
            </div>

            <div class="cate">                
              <a href="">● 标签A</a>
              <a href="">● 标签B</a>
              <a href="">● 标签C</a>
            </div>
          </div>
      </li> 
    {% endfor %}                                   
  </ul>
  <p class="toNext">
    <a href="">下一页</a>
  </p> 
  <p class="toTOP">
    <a href="">回到顶部</a>
  </p> 
  <!--           
  <script type="text/javascript">
    function TriggerPost(i){
      if(i && $("#post_list li[class!='out']").length>2) $("#post_list li[class!='out']").eq(0).addClass('out').fadeOut(600)
      else if(!i) $("#post_list li.out").eq($("#post_list li.out").length-1).removeClass('out').fadeIn(600)
    }
    var scrollFun=function(e){
      e=e || window.event;
      if(arguments.callee.timer) clearTimeout(arguments.callee.timer);
      arguments.callee.timer = setTimeout("TriggerPost("+(e.detail?e.detail>0:e.wheelDelta<0)+")",1);
    }
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFun,false);
    }
    window.onmousewheel=document.onmousewheel=scrollFun;
  </script> 
  -->
</div>
<div class=""></div>