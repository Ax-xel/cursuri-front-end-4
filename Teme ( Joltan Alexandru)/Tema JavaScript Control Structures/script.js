var arr = ["rock", "paper", "scissors"];

var x = Math.floor(Math.random() * 3);
var v = Math.floor(Math.random() * 3);

function user(a){
if (a == 0) {
return arr[0];
} else if (a == 1) {
return arr[1];
} else { return arr[2];
}

}


 var b = user(x);
 var g = user(v);

 console.log(b,"-");
 console.log(g,"-");
 
 if ((b == "rock") && (g == "paper")){
  console.log("user wins");
 } else {
   console.log("user lost");
   }