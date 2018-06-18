// get cookies

console.log(document.cookie);

//set cookie

document.cookie = "color=green";
document.cookie = "username=John Doe";
document.cookie = "lang=eng-US";
console.log(document.cookie);


const getCookies = () => {
		const cookieItem ={};
	const cookiesString = document.cookie;
// 	color=green; username=John Doe; lang=eng - GB
	const separatedEntries = cookiesString.split(';');
// 	[color=green, ' username=John Doe', ' lang=eng - GB']
	separatedEntries.forEach((entry) => {
		// entry <=> ' username = John Doe'
		const trimmedEntry = entry.trim();
		// trim removes the extra space entry <=> 'username= John Doe'
		const splitEntry = trimmedEntry.split('=');
		//splitEntry ['username', 'John Doe']
		cookieItem[splitEntry[0]] = splitEntry[1];
		//cookieItem <=> {username: 'John Doe'}
	});
	
	return cookieItem;
}

// getCookies();
// 	console.log(getCookies());

window.onload = () => {
	//check the radio button for lang retrived from cookies
const cookies = getCookies();
const userLang = cookies.lang;
if (userLang) {
		document.querySelector(`[value=${userLang}]`).setAttribute('checked', true);
	}
//update cookie when user changes lang option
	const radioBtns = document.querySelectorAll('input[type=radio]');
	radioBtns.forEach((btn) => {
   btn.addEventListener('change', (e) => {
// 		console.log(e)
		 const newLang = e.target.value;
		 document.cookie = `lang=${newLang}`;  // 'lang=' + newLang
		
	})
	});
}

	