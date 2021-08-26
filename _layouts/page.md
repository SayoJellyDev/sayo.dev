<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}
    {% if page.layout == "post" %}
        <link rel="stylesheet" href="/css/post.css?v=0.2">
    {% endif %}
    {% include meta.html %}
    <body>
        {% include navbar.html %}
        {{ content }}
    </body>
    {% include footer.html %}
</html>