---
layout: default
title: Learning Tracks
permalink: /learning-tracks
---

{% assign tracksSorted = site.tracks | sort: 'order' %}
<ul>
{% for item in tracksSorted %}
    <li><a href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></li>
{% endfor %}
</ul>
