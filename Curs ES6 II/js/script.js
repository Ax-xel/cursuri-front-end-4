// ES6 Classes are NOT hoisted
// var currentPost = new Post();  -- nu face hoisting
// console.log(currentPost);

class Post {
	constructor() {
		this.id = null;
		this.title = "";
		this.body = "";
		this.userId = null;
	}
	
	//class prototype methods
	fetchData(id) {
	var that = this;
	return $.ajax("https://jsonplaceholder.typicode.com/posts/" + id, {
		method: "GET",
		success: (data) => {
			console.log(this);
		this.id = data.id;
		this.title = data.title;
		this.body = data.body;
		this.userId = data.userId;
		
	},
		error: function() {
		alert("Something went wrong when fetching Post details")
	}
	});
}
	
	get getTitle() {   //get-erele fac return
		return this.title.toUpperCase();
	}
	set bodySetter (bodyText) {
		if (bodyText) {
		this.body =body.Text;
		} else {
			this.body ="Lorem ipsum ...";
		}
			
	}
	
	static formatText(textToFormat) {
		return textToFormat + "...";
	}
}

const currentPost = new Post();
currentPost.title = "Some string";
currentPost.body = "random text";
// call invoke class methods
currentPost.fetchData(4).then((response) => {
	console.log(response);
});
// console.log(currentPost.title); // iei titlul
// call getters
console.log(currentPost.getTitle);
// call setters
currentPost.bodySetter ="Summer body";
console.log("Setter with text", currentPost.body);

console.log("Setter without text", currentPost.body);
console.log(currentPost.title);
console.log(currentPost);

//call static methods
const formattedText = Post.formatText(urrentPst.body);
currentPost.body= formatText;
console.log(formattedText);

//class inheritance
class Animal {
	constructor() {
		this.name= ""; // atribute
		this.age= 0;
		this.height= 0;
	}
	
	speak() {
		alert("Speaking like an animal");
	}
	
	eat() {
		console.log("Nom nom!");
	}
}

class Dog extends Animal {
	constructor() {
// 		needs to be invoked before using "this" in subclasses
// 		it calls "constructor" fn from parent Class
		super();
// 		class specific attributes
		this.breed = "";
	}
	playFetch() {
		console.log("I'm happy to play fetch");
	}
	//We are overwritting this method defined in parent class
	speak() {
		console.log("Speaking like a Dog.Ham!")
	}
	
}

const a = new Animal();
console.log(a);
const d = new Dog();
console.log(d);
// eat method is being invoked from parent class
d.eat();
// name attribute  is being used from parent class
d.name;
//breed attribute is being used from subclass
d.breed;
//subclass specific method
d.playFetch()
// a.playFetch(); playFetch is not defined in parent class

// challenge

class App {
	constructor(){
		this.id = null;
		this.name = "";
		this.price = 0;
	}
	
	start() {
		console.log("The game has started");
	}
	stop() {
		console.log("The game has stopped");
	}
}

class Game extends App {
	constructor() {
		super();
		this.score = 0;
		this.winners = "";
	}
	
	play() {
		console.log("Play the game");
	}
}






