class MovieDetails extends Movies {
   	constructor() {
   		super();
   		this.Rated= "";
  		this.Released= "";
   		this.Writer= "";
   		this.Actors= "";
      this.Plot= "";
		  this.Awards= "";
      this.Ratings= [];
		  this.Metascore= null;
  		this.DVD= "";
   		this.BoxOffice= "";
   		this.Production= "";
      this.Website= "";
      this.Response= "";
   	}

    fetchData() {
      return $.ajax("https://ancient-caverns-16784.herokuapp.com/movies/" + "5b04857e5ab76700217bfaac", {
      method:"GET",
      success: (data) => {
        this._id= data._id;
        this.Title= data.Title;
        this.Year= data.Year;
        this.Runtime= data.Runtime;
        this.Genre= data.Genre;
        this.Language= data.Language;
        this.Country= data.Country;
        this.Poster= data.Poster;
        this.imdbRating= data.imdbRating;
        this.imdbVotes= data.imdbVotes;
        this.imdbID= data.imdbID;
        this.Type= data.Type;
        this.Rated= data.Rated;
        this.Released= data.Released;
        this.Writer= data.Writer;
        this.Actors= data.Actors;
        this.Plot= data.Plot;
        this.Awards= data.Awards;
        this.Ratings= data.Ratings;
        this.Metascore= data.Metascore;
        this.DVD= data.DVD;
        this.BoxOffice= data.BoxOffice;
        this.Production= data.Production;
        this.Website= data.Website;
        this.Response= data.Response;
        },
      error: () => {
        alert("Something went wrong when fetching MovieDetails")
      }
    })
  }
}
    
