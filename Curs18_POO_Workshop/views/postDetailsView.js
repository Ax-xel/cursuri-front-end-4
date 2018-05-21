// cauta dupa id, clasa, manipuleaza DOM-ul , tot timpul sa avem fetch-ul, putem pune window.onLoad;
var currentPost = new Post();
var currentPostId = getUrlParameter("postId");
console.log(currentPostId);
currentPost.fetchData(currentPostId).then(function() {
// 	console.log(currentPost);
	var postDetailsContainer = document.getElementById("post-details");
// 	Create title HTML node and populate it with currentPostData;
	var postTitleEl =document.createElement("h3");
	postTitleEl.innerHTML = currentPost.title;
	postDetailsContainer.appendChild(postTitleEl);
	
// 	create body HTML node and populate iit with currentPostData; 
	var postBodyEl = document.createElement("p");
	postBodyEl.innerHTML = currentPost.body;
	postDetailsContainer.appendChild(postBodyEl);
	
}).catch (function() {
	console.log("Something went wrong on Post Details View");
});

/**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
// ====================================================================================
// function Comments() {
// 	this.name = "";
// 	this.email = "";
// 	this.body = "";
	
// }

// function CommentsList () {
// 	this.itemss = [];
// }

// CommentsList.prototype.fetchData = function () {
// 	 var that = this;
// 		 return $.ajax("https://jsonplaceholder.typicode.com/posts/1/comments/", {
// 	 method: "GET",
// 		success: function (postsData) {
// 				for (var i =0; i< postsData.length; i++) {
// 					var postItem = postsData[i];
// 					var postModel = new CommentsList();
// // 					set all the data that we recieved from Server
// // 					on the post model
// 					postModel.name  = postItem.name;
// 					postModel.email = postItem.email;
// 					postModel.body = postItem.body;
// // 					push the model in items array
// 					that.itemss.push(postModel);
// 				}
// 		},
// 	 error: function(xhr) {
// 		 		alert("Something  went wrong when fetching posts");
// 	 }
// 		});
//  }
//  cel de sus de la inceput!
