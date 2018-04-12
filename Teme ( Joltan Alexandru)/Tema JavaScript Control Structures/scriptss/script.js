


// 1.display in the console the numbers from 1 to 20

var a = 0;
while (a < 20) {
  a++;
  console.log(a);
} 

// 2.display in the console the odd numbers from 1 to 20

for (var i = 0; i < 20; i++) {
  if (i % 2 != 0) {
   console.log(i);
  }
 }

// 3.compute the sum of the elements of an array and display it in the console
  

var arr = [ 2, 5, 10, 7 ].reduce( function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
 console.log("The sum of the array is", arr);






