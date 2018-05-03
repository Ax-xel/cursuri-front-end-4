// GET ONE POST
$.ajax("https://jsonplaceholder.typicode.com/posts/1", {
 method: "GET",
	success: function (response) {
		console.log("Get post =", response);
		console.log("Title =", response.title);
		console.log("Body =", response.body);
	}
});

$.ajax("https://jsonplaceholder.typicode.com/posts/", {
 method: "GET",
	success: function (response) {
		console.log("Get post =", response);
		for (var i = 0; i< response.length; i++) {
			var item = response[i];
			console.log("Title =", item.title);
			console.log("Body =", item.body);
			
		}
	}
});
// CREATE NEW POST -> POST
$.ajax("https://jsonplaceholder.typicode.com/posts/", {
	method: "POST",
	data: {
		userId: 1,
		title: "New post",
		body: "New post body",
	},
	success: function(response) {
		console.log("Create post =", response);
	}
});

// UPDATE POST -> PUT 

$.ajax("https://jsonplaceholder.typicode.com/posts/1", {
	method: "PUT",
	data: {
		userId: 1,
		title: "Update post 1",
		body: "Update body post 1",
	},
	success: function(response) {
		console.log("Update post =", response);
	}
});

//DELETE POST 
$.ajax("https://jsonplaceholder.typicode.com/posts/1", {
	method: "DELETE",
	success: function(response) {
		console.log("Delete post =", response);
	}
});

$.ajax("https://jsonplaceholder.typicode.com/posts/1/comments", {
 method: "GET",
	success: function (response) {
		console.log(response);
	}
});

// CREATE NEW POST WITH ERROR 

$.ajax("https://jsonplaceholder.typicode.com/posts/1", {
	method: "POST",
	data: {
		userId: 1,
		title: "New post",
		body: "New post body",
	},
	success: function(response) {
		console.log("Create post =", response);
	},
	error: function() {
		alert("Create post with error");
	}
});