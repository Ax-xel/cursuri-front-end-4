var posts = new PostList();
posts.fetchData().then(function(){
// console.log(posts.items.length);
	var containerEl = document.getElementById("container");
	for ( var i = 0; i <posts.items.length; i++) {
		var postEl = document.createElement("a");
		postEl.setAttribute("href", 'http://cursuri-alexandrujoltan268324.codeanyapp.com/Curs18_POO_Workshop/pages/postDetails.html?postId=' + posts.items[i].id);
		postEl.setAttribute("target", "blank");
		postEl.innerHTML = posts.items[i].title;
		containerEl.appendChild(postEl);
	}
}).catch(function () {
	console.log("hope not");
});
	