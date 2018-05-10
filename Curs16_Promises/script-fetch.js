window.addEventListener("load",onHtmlLoaded);

var apiUrl = "https://jsonplaceholder.typicode.com/posts";

function onHtmlLoaded () {
	getPosts();
}
	
// function getPosts() {
// 	$.ajax("https://jsonplaceholder.typicode.com/posts").then(function() {
// // 	console.log("Success");
// // 	}, function () {
// 		console.log("Error");
// 	});
// }

// function callOnSuccess() {
// 	console.log("Success");
// }

// function callOnError() {
// 	console.log("Error");
// }

function getPosts() {
	fetch(
	apiUrl, {
		method: "GET"
		}).then(function(response){
		return response.json();
		}).then(callOnSuccess);
	}
		
	
function callOnSuccess(response) {
	console.log("Success =", response);
	var posts = response.slice(0,10);
// 	console.log("POST =", posts);
	return posts;
}
function callOnError(xhr) {
	console.log("Error =", xhr);
 var elPosts = document.getElementById("list-posts");
	elPosts.innerHTML = "Cannot get posts! Error!!!";
}
