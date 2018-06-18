// window.console.log, it's the same as console.log
console.log("The usual logging mode");
console.warn("This is a warning");
console.error("This is an error");

window.onload = () => {
// const iframeBody = document.getElementById("frame-body");
// iframeBody.innerHTML = "Some text";
	window.name = "Parent master window";
	const openWinButn = document.getElementById("new-win");
	window.scroll(100, 400);
	openWinButn.addEventListener("click", () => {
// 		window.open("https://www.google.com/?hl=ro");
			const newWin =window.open("http://cursuri-alexandrujoltan268324.codeanyapp.com/Curs21_Javascript_BOM/secondPage.html");
			newWin.moveBy(300, 100);
			newWin.focus();
			newWin.sizeToContent();
	});
	}



