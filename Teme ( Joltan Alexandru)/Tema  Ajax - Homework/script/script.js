window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded () {
<<<<<<< HEAD
	getPosts();
}

function getPosts () {
=======
	getPost();
}

function getPost () {
>>>>>>> efea60132a91cb48e976476c04776b9824fcac6e
$.ajax("https://anapioficeandfire.com/api/characters/583", {
	method: "GET",
	success: function (response) {
		console.log(response);
<<<<<<< HEAD
		for (var i = 0; i < response.length; i++) {
			var post = response[i];
			document.getElementById("bastard").innerHTML = post;
		}		
	}
});
}
=======
		document.getElementById("bastard").innerHTML = post;
			}		
	}
)}


// for (var i = 0; i < response.length; i++) {
// 			var post = response[i];
// 			document.getElementById("bastard").innerHTML = post;
>>>>>>> efea60132a91cb48e976476c04776b9824fcac6e

	


