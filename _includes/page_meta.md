<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="{% if page.description %}{{ page.description }} {% elsif page.categories %}{{ page.excerpt | truncate: 120 | strip_html }}{% else %}{{ site.description }}{% endif %}">
<meta property="og:title" content="{% if page.title %}{{ page.title }} – {% endif %}{{ site.title }}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{{ site.url }}{% if page.url %}{{ page.url }}{% endif %}" />
<meta property="og:image" content="{{ site.url }}{% if page.background-image %}{{ page.background-image }}{% else %}/assets/images/icon-trimmed.webp{% endif %}" />
<meta property="og:description" content="{% if page.description %}{{ page.description }} {% elsif page.categories %}{{ page.excerpt | truncate: 120 | strip_html }}{% else %}{{ site.description }}{% endif %}" />
<meta name="theme-color" content="{% if page.discord_colour %}{{ page.discord_colour }}{% else %}#e60045{% endif %}">

<!-- Include this to make the og:image larger -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{{ site.url }}{% if page.icon %}{{ page.icon }}{% else %}/images/icon-trimmed.webp {% endif %}">