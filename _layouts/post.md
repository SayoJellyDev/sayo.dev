--- 
layout: page 
---

<div class="main" data-barba="container" data-barba-namespace="home">
    <div class="swapper">
        <div class="loader">
            <p id="loader-message"></p>
        </div>
    </div>
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