--- 
layout: page 
---
<link rel="stylesheet" href="/css/post.css?v=0.1">
<div class="outer-container">
    <div class="container expandable background">
        <div class="title center">{{ page.title }}</div>
        <div class="bar"></div>
        <div class="container center">
            <div class="post">
                <div class="entry">
                    {{ content }}
                </div>
                <div class="date">
                    Written on {{ page.date | date: "%B %e, %Y" }}
                </div>
            </div>
        </div>
    </div>
</div>