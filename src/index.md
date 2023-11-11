---
title: Home
layout: base.njk
---

Hi!
<br>
Welcome to where I share all the piracy and tech related stuff I do!
<br>
If you're just here for libin9iOak's JetBrains mirror, just go to [this link](/jetbra.in_codes)

Here's the list of posts:
<ul>
{%- for post in collections.posts -%}
  <li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{%- endfor -%}
</ul>