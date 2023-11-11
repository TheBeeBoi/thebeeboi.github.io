---
title: Home
layout: base.njk
---

Hi!

Here's the list of posts:
<ul>
{%- for post in collections.posts -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>