function Post() {
	this.id = null;
	this.title = "";
	this.body = "";
	this.userId = null;
}

Post.prototype.fetchData = function(id) {
	var that = this;
	return $.ajax("https://jsonplaceholder.typicode.com/posts/", {
		method: "GET",
		success: function(data) {
		that.id = data.id;
		that.title = data.title;
		that.description = data.description;
		that.userId = data.userId;
		
	},
		error: function() {
		alert("Something went wrong when fetching Post details")
	}
	})
}