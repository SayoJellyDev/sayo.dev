--- 
layout: compress
---
<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}
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
    {% if page.layout == "page" %}
    <body hx-boost="true" hx-swap="innerHTML swap:1s">
    {% elsif page.layout == "post" %}
    <body hx-boost="true" hx-swap="innerHTML swap:1s">
    {% else %}
    <body hx-boost="false">
    {% endif %}
        {% include copyright.html %}
        {% include navbar.html %}
        <div class="swapper" id="swapper" hx-preserve>
            <div class="loader" hx-preserve>
                <p id="loader-message" hx-preserve></p>
            </div>
        </div>
        <div class="main" id="main">
        {{ content }}
        </div>
    </body>
    {% include footer.html %}
</html>