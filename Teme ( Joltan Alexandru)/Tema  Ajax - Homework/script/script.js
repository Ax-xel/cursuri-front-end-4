window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded () {
	getPost();
}

function getPost () {
$.ajax("https://anapioficeandfire.com/api/characters/583", {
	method: "GET",
	success: function (response) {
		console.log(response);
		document.getElementById("bastard").innerHTML = post;
			}		
	}
)}


// for (var i = 0; i < response.length; i++) {
// 			var post = response[i];
// 			document.getElementById("bastard").innerHTML = post;

	


