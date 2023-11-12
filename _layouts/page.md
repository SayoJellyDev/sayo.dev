--- 
layout: compress
---
<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}
    {% include navbar.html %}
    {% if page.layout == "page" %}
    <div class="background">
        <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
    </div>
    {% endif %}
    {% include copyright.html %}
    <body hx-boost="true" hx-target="this" hx-swap="innerHTML swap:1s settle:4s" _="on click from <a/> add .transition to <#swapper/>">
        <div class="swapper" id="swapper">
        <div class="loader">
            <p id="loader-message"></p>
        </div>
    </div>
        {{ content }}
    </body>
    {% include footer.html %}
</html>