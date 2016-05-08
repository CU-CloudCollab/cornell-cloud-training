---
layout: page
title: About
permalink: /about/
---
Content has been curated...

<h3>C4 Steering Group Membership</h3>
<ul>
{% for member in site.data.members-c4 %}
  <li>
    {{ member.name }}
    {% if member.github %}
    {% include icon-github.html username=member.github %}
    {% endif %}
  </li>
{% endfor %}
</ul>
