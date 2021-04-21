<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}
    {% include meta.html %}
    <body>
        {% include navbar.html %}
        {{ content }}
    </body>
    {% include footer.html %}
</html>