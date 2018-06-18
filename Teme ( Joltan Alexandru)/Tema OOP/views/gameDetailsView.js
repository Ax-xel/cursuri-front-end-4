window.onload = function() {
var currentGame = new Game();
var currentGameId = getUrlParameter("gameId");
currentGame.fetchData(currentGameId).then(function() {

  var gameDetailsContainer = document.getElementById("game-details");

  var gameTitleEl = document.createElement("h3");
  gameTitleEl.innerHTML = currentGame.title;
 	gameDetailsContainer.appendChild(gameTitleEl);


	var gameImageContainer = document.createElement("img");
	gameImageContainer.setAttribute("src", currentGame.imageUrl);
	gameDetailsContainer.appendChild(gameImageContainer);
	
	
  var gameBodyEl = document.createElement("p");
  gameBodyEl.innerHTML = currentGame.description;
  gameDetailsContainer.appendChild(gameBodyEl);
	
}).catch(function() {
  console.log("Something went wrong on game Details View");
});
}

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
