---
layout: default
title: About
permalink: /about
---

Initial content was curated by the C4 Steering Group.

### C4 Steering Group

<ul>
{% for member in site.data.members-c4 %}
<li>{{ member.name }} {% if member.github %} {% include icon-github.html username=member.github %}{% endif %}</li>
    {% endfor %}
</ul>
