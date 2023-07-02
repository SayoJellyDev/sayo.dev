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
    <body data-barba="wrapper">
        {% include copyright.html %}
        {% include navbar.html %}
        {{ content }}
    </body>
    {% include footer.html %}
</html>