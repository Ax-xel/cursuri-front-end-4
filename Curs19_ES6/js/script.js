console.log("log1");
var veryImportantPromise = new Promise( function(resolve, reject){
setTimeout(function (){
	console.log("log from setTimeout");
	resolve(); // resolve e nume de functie
}, 10000);
});

	

veryImportantPromise.then(function(){
	console.log("log from then function");
}).catch(function(){
	console.log("log from then function");
});


var onClickPromise= new Promise(function (resolve, reject){
document.getElementById("submit").addEventListener("click", function() {
	resolve();
});
document.getElementById("cancel").addEventListener("click", function() {
	reject();
});
});

onClickPromise.then(function(){
	console.log("Go cookies!");
}).catch (function() {
	console.log("No cookies for you!")
});

//  RETURN IN FUNCTIONS 

function sum (a,b) {
	return a + b; // (return ramane doar in functia lui), cand vrei sa scoti din functie
}
//  BIND 
var sumCopy = sum.bind({ atr1: true}, 5, 6);  // sum.bind creeaza o copie, trebuie apelat prin variabila sumCopy
sumCopy(); 
var rez = sum(3,4);
console.log("rez");






// ==================================================================TEMA NOTITE

//  update= buton de edit
// Modele = request-uri ajax(la server) puse aici
// view = genereaza div-uri si publica jocurile pe pagina


