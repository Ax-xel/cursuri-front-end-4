window.onload = function() {
  var games = new GameList();
  games.fetchData().then(function(){

    var containerEl = document.getElementById("container");
    for(var i = 0; i < games.items.length; i++) {
      var gameEl = document.createElement("a");
      gameEl.setAttribute("href", "http://cursuri-alexandrujoltan268324.codeanyapp.com/Teme%20(%20Joltan%20Alexandru)/Tema%20OOP/pages/gameDetails.html?postId=" + games.items[i]._id);

      gameEl.setAttribute("target", "blank");
      gameEl.innerHTML = games.items[i].title;
      containerEl.appendChild(gameEl);
			
			var imageEl = document.createElement("img");
			imageEl.setAttribute("src", games.items[i].imageUrl);
			containerEl.appendChild(imageEl);
			
    }
  }).catch(function(){
    console.log("hope not");
  });
}