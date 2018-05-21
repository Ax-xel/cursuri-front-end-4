function Post() {
	this.id = null;
	this.title = "";
	this.body = "";
	this.userId = null;
}

Post.prototype.fetchData = function(id) {
	var that = this;
	return $.ajax("https://jsonplaceholder.typicode.com/posts/1", {
		method: "GET",
		success: function(data) {
		that.id = data.id;
		that.title = data.title;
		that.body = data.body;
		that.userId = data.userId;
		
	},
		error: function() {
		alert("Something went wrong when fetching Post details")
	}
	})
}