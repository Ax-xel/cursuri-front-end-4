// GET ONE POST
$.ajax("https://carbon-intensity.github.io/api-definitions/#get-intensity-date", {
	method: "GET",
	success: function (response) {
		console.log(response);
	}
});
