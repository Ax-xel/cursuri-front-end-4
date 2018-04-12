// alert("My first alert from a different file");

var x;
x = 2;
console.log(x);

//  numbers

var age = 23;
console.log("My age is", age);

var price = 3.99;
console.log("The price of the banana is", price, "$");

var fullName = "Joltan Alexandru";
console.log("My name is", fullName);

var paragraph ="Line 1 \nLine 2";
console.log(paragraph);

var backslash="variable with \\";
console.log(backslash);

var quotes = "\"this is a string inside quotes\"";
console.log(quotes);

var differentQuotes = '"another string inside quotes"';
console.log(differentQuotes);

var isTrue = true, isFalse = false;
var isFalse = false;
console.log(isTrue, isFalse);

var nullValue = null;
console.log("Null Value", nullValue);

var undefinedValue;
console.log("Undefined value", undefinedValue);

var x = 2;
console.log(x);
x = undefined;
console.log(x);

console.log(43 % 10); // 3 (restul impartirii 43 la 10)

console.log(2 =="2");
console.log(2 ==="2");  // ==== verifica atat valoarea cat si tipul
console.log(2 === 2 );

console.log(typeof 10); //number
console.log(typeof "text"); //string
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(typeof myVariable); //undefined


console.log(typeof nullValue); // object
var n = -10;
// var isPositive = n > 0 ? true : false;
var isPositive = n > 0 ? 1 : 0;
console.log("is positive", isPositive);

var p = 1 + 1;
var q = p * 2;
console.log(p, q);

var  firstName = "Chuck";
var  lastName = "Norris";

var fullName = firstName + " " + lastName;
console.log("fullName", fullName);

var names = ["Eugen","Horea","Levi","Florina",
             "Sasha","Mela"];
console.log(names[0]);
console.log(names.sort());
console.log("length", names.length);

var robot = {
  model : "TRX100",
  color: "red",
  "full name": "Robot's Name",
//   color: "blue", <-- Duplicate key in the same object!
  walk: function() {
    console.log("Robot is walking");
  }
};

console.log("color", robot.color);
console.log("full name", robot["full name"]);
robot.walk();

var color = "red";  // console.log(color);
if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}

var email = "melania.moldovan@scoalainformala.ro"
console.log("index", email.indexOf("@"));
if (email.indexOf("@") > -1) {
  console.log("email correct");
} else {
  console.log("email incorrect");
}  //; <-- not an error


var weather = "sunny";
switch (weather) {
  case "rainy":
    console.log("Bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly");
    break;
  case "cloudy":
    console.log("Go outside");
    break;
  default:
    console.log("Unknown weather type!");
    break;
    }

//  x++ == X+1;

var i = 0;
while (i < 10) {
  console.log("number", i);
  i++; // i = i + 1 
} 
console.log("while done");

var j = 15;
do {
  console.log("j", j);
  j++;
} while (j < 10);
console.log(" do while done");


var numbers = [4, 6, 8, -2, 3];
for (var k = 0; k < numbers.length; k++) {
  console.log("position k", k);
  console.log("element at position k", numbers[k]);
}

// Homework !! pana luni!













