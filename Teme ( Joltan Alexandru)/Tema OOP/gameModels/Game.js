function Game() {
  this._id = null;
  this.title = "";
  this.description = "";
	this.imageUrl = "";
}

Game.prototype.fetchData = function(_id) {
  var that = this;
  return $.ajax("https://games-world.herokuapp.com/games/" + _id, {
    method:'GET',
    success: function(data) {
      that._id = data._id;
			that.imageUrl = data.imageUrl;
      that.title = data.title;
      that.description = data.description;
    },
    error: function() {
      alert("Something went wrong when fetching game details")
    }
  })
}