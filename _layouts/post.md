--- 
layout: page 
---

<div class="main">
    <div class="title center">{{ page.title }}</div>
    <article class="blog-post">
        <div class="entry">
            {{ content }}
        </div>
        <div class="date">
            Written on {{ page.date | date: "%B %e, %Y" }}
        </div>
    </article>
    <!-- Yucky br but I'm lazy -->
    <br>
    <br>
    <br>
    <br>
</div>