

$.ajax("https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json", {
 method: "GET",
	success: function (response) {
		console.log("Get weather in c  =", response.current_observation. temp_c);
		console.log("Get weather in f  =", response.current_observation. temp_f)
		let list =document.getElementById("container");
		let weather = document.createElement("h3");
		weather.innerHTML = response.current_observation. temp_c ;
		list.appendChild(weather);
		
// 		let weatherF = document.createElement("h3");
// 		weatherF.innerHTML = response.current_observation. temp_f;
// 		list.appendChild(weatherF);
	}
});

// document.cookie= "temperature=fahrenheit";
document.cookie= "temperature=celsius";
// console.log(document.cookie);

const getCookies = () => {
		const cookieItem ={};
	const cookiesString = document.cookie;
	const separatedEntries = cookiesString.split(';');
	separatedEntries.forEach((entry) => {
		const trimmedEntry = entry.trim();
		const splitEntry = trimmedEntry.split('=');
		cookieItem[splitEntry[0]] = splitEntry[1];
	});
	
	return cookieItem;
}

getCookies();
	console.log(getCookies());

window.onload = () => {
const cookies = getCookies();
const userTemp = cookies.temperature;
if (userTemp) {
		document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
	}
	const radioBtns = document.querySelectorAll('input[type=radio]');
	radioBtns.forEach((btn) => {
   btn.addEventListener('change', (e) => {
		console.log(e)
		 const newTemp = e.target.value;
		 document.cookie = `temp=${newTemp}`; 
	})
	});
}
		
// window.onload = () => {
// const cookies = getCookies();
// const userTemp = cookies.temperature;
// if (userTemp) {
// 		document.querySelector(`[value=${userTemp}]`).setAttribute('checked', true);
// 	}
// 	const radioBtns = document.querySelectorAll('input[type=radio]');
// 	radioBtns.forEach((btn) => {
//    btn.addEventListener('change', (e) => {
// 		console.log(e)
// 		 const newTemp = e.target.value;
// 		 document.cookie = `temp=${newTemp}`; 
		
// 	})
// 	});
// }






















			
// Temperature.prototype.fetchData = function() {
//   var that = this;
//   	 $.ajax("https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json", {
//     method:'GET',
//     success: function (response) {
// 			console.log("Get weather post=",response);
// 	     for(var i = 0; i < response.length; i++) {
//         var item = response[i];
// 				 item.temp_c = that.temp_c;
// 			 }
// 		}
// 	})
// }