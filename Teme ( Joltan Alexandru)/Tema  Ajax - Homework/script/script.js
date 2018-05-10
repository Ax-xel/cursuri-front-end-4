window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded () {
	getPosts();
}

function getPosts () {
$.ajax("https://anapioficeandfire.com/api/characters/583", {
	method: "GET",
	success: function (response) {
		console.log(response);
		for (var i = 0; i < response.length; i++) {
			var post = response[i];
			document.getElementById("bastard").innerHTML = post;
		}		
	}
});
}

	


