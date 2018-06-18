function GameList() {
  this.items = [];
}

GameList.prototype.fetchData = function () {
  var that = this;
  return $.ajax('https://games-world.herokuapp.com/games', {
    method: 'GET',
    success: function(gamesData) {
      for(var i = 0; i < gamesData.length; i++) {
        var gameItem = gamesData[i];
        var gameModel = new Game();

        gameModel._id = gameItem._id;
				gameModel.imageUrl = gameItem.imageUrl;
        gameModel.title = gameItem.title;
        gameModel.description = gameItem.description;

        that.items.push(gameModel);

      }
    },
    error: function(xhr) {
      alert("Something went wrong when fetching games");
    }
  });
}
         