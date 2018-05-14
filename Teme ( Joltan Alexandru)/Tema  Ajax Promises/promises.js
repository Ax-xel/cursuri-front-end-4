window.addEventListener("load",onHtmlLoaded);

var apiUrl = "https://anapioficeandfire.com/api/characters/583";

function onHtmlLoaded () {
	getPost();
}
function getPost() {
	$.ajax(apiUrl)
		.then(callOnSuccess, callOnError)
		.then(function(response) {
			console.log("The bastard is", response);
			for ( var i = 0; i<response.length; i++) {
				var post = response[i];
			}
		function callOnCommentsSuccess(response) {
			console.log("Comments =", response);
		}
		})
}
	
function callOnSuccess(response) {
	console.log("Success =", response);
	return response;
}
function callOnError(xhr) {
	console.log("Error =", xhr);
 var elPosts = document.getElementById("bastard");
	elPost.innerHTML = "Cannot get posts! Error!!!";
}
