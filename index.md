---
layout: home
---

<div class="index-content blog">
    <div class="section">
        {% include category_list.html %}
        
        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.blog %}
            <li>
                <span>{{page.date}}</span>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
            </li>
        {% endfor %}
        </ul>
    </div>
<!--     <div class="aside">
    </div> -->
</div>
