 window.onload = (() => {
 	const currentMovie = new MovieDetails();

	currentMovie.fetchData().then((response) => {
		console.log(response);

		const movieDetailsContainer = document.getElementById("main");
		const movieDetailsContainerTwo = document.getElementById("second");
		const movieDetailsContainerThree = document.getElementById("third");
		const movieDetailsContainerImg = document.getElementById("img");

		//append Title
		const movieTitle = document.createElement("h1");
		movieTitle.innerHTML = response.Title;
		movieDetailsContainerTwo.appendChild(movieTitle);

		//append Year
	    const movieYear = document.createElement("p");
		movieYear.innerHTML = "Year: " + response.Year;
		movieDetailsContainer.appendChild(movieYear);

		//append Rate
		const movieRate = document.createElement("p");
		movieRate.innerHTML = "Rate: " + response.Rated;
		movieDetailsContainer.appendChild(movieRate);

		//append Release date
		const movieRelased = document.createElement("p");
		movieRelased.innerHTML = "Release Date: " +  response.Released;
		movieDetailsContainer.appendChild(movieRelased);

		//append Runtime
		const movieRuntime = document.createElement("p");
		movieRuntime.innerHTML = "Runtime: " + response.Runtime;
		movieDetailsContainer.appendChild(movieRuntime);

		//append Genre
		const movieGenre = document.createElement("p");
		movieGenre.innerHTML = "Genre: " + response.Genre;
		movieDetailsContainer.appendChild(movieGenre);

		// append Writer
		const movieWriter = document.createElement("p");
		movieWriter.innerHTML = "Writer: " + response.Writer;
		movieDetailsContainer.appendChild(movieWriter);

		//append Poster(img)
  		const moviePoster = document.createElement("img");
  		moviePoster.setAttribute("src",response.Poster);
  		movieDetailsContainerTwo.appendChild(moviePoster);
		
		//append Plot
		const moviePlot = document.createElement("p");
		moviePlot.innerHTML = "Plot: " + response.Plot;
		movieDetailsContainerTwo.appendChild(moviePlot);
		
		//append Actors
		const movieActors = document.createElement("p");
		movieActors.innerHTML = "Actors: " + response.Actors;
		movieDetailsContainerTwo.appendChild(movieActors);


		//append Language
		const movieLanguage = document.createElement("p");
		movieLanguage.innerHTML = "Language: " + response.Language;
		movieDetailsContainerTwo.appendChild(movieLanguage); 

		//append Country
		const movieCountry = document.createElement("p");
		movieCountry.innerHTML = "Country: " + response.Country;
		movieDetailsContainerTwo.appendChild(movieCountry);

		//append Awards
		const movieAwards = document.createElement("p");
		movieAwards.innerHTML = "Awards: " + response.Awards;
		movieDetailsContainerTwo.appendChild(movieAwards);


		//append Metascore
		const movieMetascore = document.createElement("p");
		movieMetascore.innerHTML = "Metascore: " + response.Metascore;
		movieDetailsContainerThree.appendChild(movieMetascore); 

		//append Imdb Rating
		const movieImdbRating = document.createElement("p");
		movieImdbRating.innerHTML = "Imdb Rating: " + response.imdbRating;
		movieDetailsContainerThree.appendChild(movieImdbRating); 

		//append Imdb Votes
		const movieImdbVotes = document.createElement("p");
		movieImdbVotes.innerHTML = "Imdb Votes: " + response.imdbVotes;
		movieDetailsContainerThree.appendChild(movieImdbVotes);

		//append Imdb Id
		const movieImdbId = document.createElement("p");
		movieImdbId.innerHTML = "Imdb ID: " + response.imdbId;
		movieDetailsContainerThree.appendChild(movieImdbId);

		//append Type
		const movieType = document.createElement("p");
		movieType.innerHTML = "Type: " + response.Type;
		movieDetailsContainerTwo.appendChild(movieType);

		//append Dvd
		const movieDvd = document.createElement("p");
		movieDvd.innerHTML = "Dvd: " + response.DVD;
		movieDetailsContainerThree.appendChild(movieDvd);

		//append BoxOffice
		const movieBoxOffice = document.createElement("p");
		movieBoxOffice.innerHTML = "BoxOffice: " + response.BoxOffice;
		movieDetailsContainerTwo.appendChild(movieBoxOffice); 

		//append Production
		const movieProduction = document.createElement("p");
		movieProduction.innerHTML = "Production: " + response.Production;
		movieDetailsContainerThree.appendChild(movieProduction); 

		//append Website
		const movieWebsite = document.createElement("p");
		movieWebsite.innerHTML = "Website: " + response.Website;
		movieDetailsContainerTwo.appendChild(movieWebsite);

	})
 })
