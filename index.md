---
layout: default
title: Home
---

Vous trouverez sur cette page quelques travaux personnels sur des sujets qui m'intéressent, dans le domaine de la science de données et du machine learning appliqué aux politiques publiques.

##### Contact information

[nicolas.saleille@gmail.com](mailto:nicolas.saleille@gmail.com) <br>
[Github page](https://github.com/nsaleille) <br>


<div class="posts">
  {% for post in site.posts %}

  		{% if post.type == 'research' %}

		  <div class="post">

		    <span class="post-date">{{ post.date | date_to_string }}</span>
			<h1><a href="{{ post.url }}"><div class="research-subtitle">{{ post.subtitle }}</div></a></h1>
			{{ post.teaser }}
		  </div>

  		{% endif %}

  {% endfor %}
</div>
