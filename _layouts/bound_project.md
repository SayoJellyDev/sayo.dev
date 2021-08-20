<!doctype html>
<html lang="en">
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}</title>
    <head prefix="og: {{ site.url }}">
    <link rel="shortcut icon" href="{% if page.icon %}{{ page.icon }}{% endif %}" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/global.css?v=0.5">
    <link rel="stylesheet" href="/css/bound.css?v=0.5">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta property="og:title" content="{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="{{ site.url }}{% if page.url %}{{ page.url }}{% endif %}" />
    <meta property="og:image" content="/images/projects/bound/GameIcon.png" />
    <meta property="og:description" content="{% if page.description %}{{ page.description }} {% elsif page.categories %}{{ page.excerpt | truncate: 120 | strip_html }}{% else %}{{ site.description }}{% endif %}" />
    <!-- Discord Colour -->
    <meta name="theme-color" content="#141414">
    <!-- Twitter stuffs -->
    <meta name="twitter:card" content="summary_large_image">
</head>
    <body>
        {% include navbar.html %}
        {{ content }}
    </body>
    {% include footer.html %}
</html>