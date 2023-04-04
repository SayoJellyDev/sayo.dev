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
    <div class="preview">
        <div id="preview-title">Test Title</div>
        <div class="split-information">
            <div id="preview-description">Test Description</div>
            <div id="preview-image-count">?/? images</div>
        </div>
        <div id="preview-image"></div>
        <div id="preview-close"></div>
        <div id="library-nav" class="split-information arrow">
            <div class="right"></div>
            <div class="left"></div>
        </div>
    </div>
</div>

<script src="/js/post.js?v=0.1"></script>