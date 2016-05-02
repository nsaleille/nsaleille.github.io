---
layout: blog
title: Burning Man
---

<div id=></div>

<script>

	var url = "http://127.0.0.1:4000/images.json"
	var posts = [{"alias": 'Burning_Man', "title": "Burning Man"}]

	posts.forEach(function(post){

		var title = $("<h3>").append(post.title);
		var article = $('<article class="6u 12u$(xsmall) work-item">').attr('id', post.alias);
		$(article).append(title);
		article.appendTo("#gallery");

	});

	$.getJSON(url, function(data){
		$.each(data, function(key, val){
			var img = $('<img class="img-gallery">').attr("src", val.url.small.concat(val.file));
		  	var link = $('<a class="image fit thumb">').attr("href", val.url.large.concat(val.file));
		  	$(val.post).append(link.html(img))
		});
	});

</script>