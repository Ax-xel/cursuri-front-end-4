$(window).on("load",onHtmlLoaded);

function onHtmlLoaded() {
	console.log("window loaded");
	
	var list = $("#comments-list");
	console.log(list[0]);
	
	var firstP = $(".comment-item p")[0]; // <-- selects the first paragraph
	console.log("first paragraph inside comment-item", firstP);
	
	var h1 = $("h1"); // jQuery element
	console.log(h1[0]); // HTML element
	console.log(h1.text(), h1.html());
	
	
	 h1.text("jQuery DOM manipulation");
	console.log(h1.text());
	
	h1.html("<em>jQuery</em> DOM Manipulation");
	console.log(h1.html());
	
	console.log("ID attribute of list", list.attr("id"));
	list.attr("id", "comments-list-new");
	console.log("New ID attribute of list", list.attr("id"));
	
	list.css("border", "solid 1px red");
	
	list.css({
		"border": "solid 1px red",
		"color": "blue"
	});
	
	
	
	// add new elements
	
	var element = "<section class = 'comment-item'><h2>name</h2><p>content</p></section>";
	list.append(element);
	
	$("<p>My new element</p>").insertBefore(list);
	
	//remove element
	var firstComment = $(".comment-item")[0];
	console.log($(".comment-item"), firstComment); //returneaza un Array
	firstComment.remove();
	
	var button = $("#btn-submit");
	button.on("click", function(event) {
						event.preventDefault();
						console.log("click", event);
						});
	
	
	
	
}


