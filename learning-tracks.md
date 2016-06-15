---
layout: default
title: Learning Tracks
permalink: /learning-tracks
---
<ul>

{% assign tracksSorted = site.tracks | sort: 'order' %}

{% for item in tracksSorted %}
    <li><a href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></li>
{% endfor %}
