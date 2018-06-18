// setTimeout function returns a unique id for the current setTimeout
const setTimeoutId = setTimeout(() => {  //trebuie pus intr-o constanta sau var ca sa prindem id-ul
	console.log("Hey from setTimeout");
	 // stops the interval for setIntervalId
	 clearInterval(setIntervalId);
}, 6000);

console.log(setTimeoutId);

	let sum = 0;
// setInterval function returns a unique id for the current setInterval
 const setIntervalId = setInterval(() => {
	sum +=1; // sum = sum + 1
	console.log(sum);
}, 1000);


window.addEventListener("unload", () => {
//teardown /cleanup
// this statement is used for debugging, the code will 
// automatically stop there if browser console is opened
debugger;
clearTimeout(setTimeoutId);
});

// Play with localStorage

// set a STRING in local storage
window.localStorage.setItem("key1", "Ding Dong");
// set an OBJECT in local storage
const user = {
	name: "John",
	lastName: "Doe",
	age: 34
}
// we need to transform the object to a "readable" string before saving it
// in local storage otherwise it will save [Object object]
localStorage.setItem("userData", JSON.stringify(user));

//GET a string  from local storage
 const key1Val = localStorage.getItem("key1");
console.log(key1Val);


const userDataLocalStorageStr = localStorage.getItem("userData");
//we need to transform the string returned by getItem back to Object
//before accessing object's properties 
const userDataLocalStorageObj = JSON.parse(userDataLocalStorageStr);

console.log(userDataLocalStorageObj.age);

//UPDATE user object
userDataLocalStorageObj.age = 22;
// in order to update an entry from localStorage you  have to use the same "key"
// when calling setItem so the value will be overwritten
localStorage.setItem("userData", JSON.stringify(userDataLocalStorageObj));

// DELETE item from localStorage
localStorage.removeItem("key1");