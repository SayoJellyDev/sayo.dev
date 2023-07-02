--- 
layout: compress
---
<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    {% include header.html %}
    <body data-barba="wrapper">
        {% include copyright.html %}
    </body>
    <script>
        //window.location.href = "{{ page.link }}";
    </script>
    {% include footer.html %}
</html>