// var dict = $.getJSON("{{site.baseurl}}images.json");
	// jQuery.each(dict, function(url, img) {
	//   console.log(img)
	// });

	// var images = [{"url": {"large": "public/img/gallery/Burning_Man/large/", "small": "public/img/gallery/Burning_Man/small/"}, "file": ".DS_Store"}]
	var url = "http://127.0.0.1:4000/images.json"
  	var images = null;

	$.ajax({
	  dataType: 'json',
	  url: url,
	  // data: data,
	  success: function(data) {
	  	images = data;
	  }
	});

	// $.getJSON(url, function(json) {
	//   images = json;
	// });

	jQuery.each(images, function(error, image) {
		console.log(image)
	});

	// var images = (function () {
	// 	var json = null;
	//     $.ajax({
	// 	        // 'async': false,
	// 	        'global': false,
	// 	        'url': "/images.json",
	// 	        'dataType': "json",
	// 	        'success': function (data) {
	// 	            json = data;
	// 	        }
	// 	    });
	// 	    return json;
	// 	})();

	var posts = ['Burning_Man', 'Climbing Sessions', 'New York', 'South Africa', 'The West']

	posts.forEach(function(post){

		var title = $("<h3>").append(post)
		var article = $('<article class="6u 12u$(xsmall) work-item">').attr('id', post)
		$(article).append(title)

		jQuery.each(images, function(error, image) {
		  var path = image.url.small.concat(image.file);
		  var img = $('<img class="img-gallery">').attr("src", image.url.small.concat(image.file));
		  var link = $('<a class="image fit thumb">').attr("href", image.url.large.concat(image.file))
		  $(article).append(link.html(image))
		});

		article.appendTo("#gallery")

	});

	// json.forEach(function(obj) { console.log(obj.); });
	// console.log(json[0])

	// var url = "{{ site.baseurl }}public/img/gallery/"
	// var posts = ['Burning_Man', 'Climbing Sessions', 'New York', 'South Africa', 'The West']

	// posts.forEach(function(post){

	// 	// var path = post.concat('/')
		// var title = $("<h3>").append(post)
		// var article = $('<article class="6u 12u$(xsmall) work-item">').attr('id', post)
		// $(article).append(title)

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

	// 	article.appendTo("#gallery")
	// });
<