var myH1 = document.getElementById("myH1");
	myH1.innerText = "Hello, How are you?";

function getInfo() {
	var userInput = document.getElementById("myInput").value;
	console.log(userInput);

	var myNewH1 = document.getElementById("myNewH1");
	myNewH1.innerText = userInput

};

var myArray = ["Hi", "Hello", "Bye", "Danisa", "Bengy"]

for(var i = 0; i < myArray.length; i++) {
	console.log(myArray[i]);
};

var myObject = 
	{
		name: "Bengy",
		age: 25,
		isMarried: false,
	};
console.log(myObject.name, myObject.age, myObject.isMarried);

var bob = document.getElementById("bob");
var joe = document.getElementById("joe");
var chris = document.getElementById("chris");

bob.innerText = myObject.name;
joe.innerText = myObject.age;
chris.innerText = myObject.isMarried;


var mynewArray = [
	{
		name: "Bengy",
		age: 25,
		isMarried: false,
	},
	{
		make: "Porsche",
		model: "911 Turbo",
		color: "sapphire black"
	},
	{
		choiceOfDrink: "Tequila",
		drinksEveryday: false,
		drinksPerWeek: 10
	}
];

for(var i = 0; i < mynewArray.length; i++) {
	console.log(mynewArray[i]);
}

document.body.style.color = "red";