var a = 2; // global variable

function displayVariables() {
	var b = 3;
	
	c = 4; // window.c = 4;
	
	console.log("a inside function", a); // 2
	console.log("a inside function", b); // 3
	console.log("a inside function", c); // 4 
}

displayVariables();

	console.log("a outisde function", a); // 2
	console.log("b outisde function", typeof b); // undefined, uncaught reference
	console.log("c outisde function", c); // 4 


// ----------------------------------


var x = 1; //global

function firstFunction() {
	var y = 2; // local variable for firstFunction
	
	function secondFunction() {
		var z = 3;
		console.log("Second x = ", x); // 1 
		console.log("Second y = ", y); // 2 
		console.log("Second z = ", z); // 3 
		
		function thirdFunction(z) {
			z = 5;	// not global
		console.log("Third x = ", x); // 1
		console.log("Third y = ", y); // 2 
		console.log("Third z = ", z); // 5 
			
		}
		thirdFunction(z);
	}
	secondFunction();
		console.log("Third x = ", x); // 1
		console.log("Third y = ", y); // 2 
		console.log("Third z = ", typeof z); // ?
}

firstFunction();
	
// ----------------------------------

(function demoHoisting() {
	var a = 1000;
	console.log(a + "" + b);
	var b = 2000;
})(); //IIFE

// ^ this is identical to v 
(function demoHoisting() {
	var a = 1000;
	var b;
	console.log(a + "" + b);
	var b = 2000;
})(); //IIFE


//  Diferenta dintre Function expresion si Function declaration cand vine vorba de Hoisting Homework 









	




