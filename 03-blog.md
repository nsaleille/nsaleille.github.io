---
layout: page
title: Blog
---

I like to hit the road and I love hiking and rock climbing. 
Here are some pictures of my trips in Greece, France, South-Africa and the US.


<div class="row" id='gallery'>

</div>

<script>
	var url = "{{ site.baseurl }}public/img/gallery/"
	var posts = ['Burning_Man', 'Climbing Sessions', 'New York', 'South Africa', 'The West']

	posts.forEach(function(post){

		// var path = post.concat('/')
		var title = $("<h3>").append(post)
		var article = $('<article class="6u 12u$(xsmall) work-item">').attr('id', post)
		$(article).append(title)

		$.ajax({
		  url: url.concat(post).concat("/large/"),
		  success: function(data){	
		     $(data).find("a:contains(.jpg)").each(function(){
		        // will loop through 
		        var filename = $(this).attr("href");
		     	console.log(filename)
		        var image = $('<img class="img-gallery">').attr("src", url.concat(post).concat("/small/").concat(filename))
		        var link = $('<a class="image fit thumb">').attr("href", url.concat(post).concat("/large/").concat(filename))
		    	$(article).append(link.html(image))
		     });
		  }
		});

		article.appendTo("#gallery")
	});
</script>
