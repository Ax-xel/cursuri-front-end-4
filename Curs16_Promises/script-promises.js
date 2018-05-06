window.addEventListener("load",onHtmlLoaded);

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
	$.ajax("https://anapioficeandfire.com/api/characters/583")
		.then(function(response) {
			console.log(response);
			for ( var i = 0; i<response.length; i++) {
				var post = response[i];
				console.log(response);
		}
		})
}
//  // // // // // // // // // // // // // // // // //
window.onload = onHtmlLoaded;
var apiUrl = "https://jsonplaceholder.typicode.com/posts";
function onHtmlLoaded() {
  getPosts(); 
}

function getPosts () {
 $.ajax(apiUrl)
  .then(callOnSuccess, callOnError)
  .then(function(posts) {
    console.log("The 10 posts are =", posts);
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      console.log("POST =", post);
      $.ajax(apiUrl + "/" + post.id + "/comments")
       .then(callOnCommentsSuccess);
    }
 })
}

function callOnSuccess(response) {
  console.log("Success =", response);
  var posts = response.slice(0,10);
  //console.log("POST =", posts);
  return posts;
  
 }

 function callOnError(xhr) {
   console.log("Error =", xhr);
   var elPosts = document.getElementById("list-posts");
   elPosts.innerHTML = "Cannot get post! Error!!!";
 }

function callOnCommentsSuccess(response) {
  console.log("COMMENTS =", response);
}

