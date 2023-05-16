--- 
layout: compress
---
<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}

    {% include meta.html %}
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
    <body data-barba="wrapper">
        {% include copyright.html %}
        {% include navbar.html %}
        {{ content }}
    </body>
    {% include footer.html %}
</html>