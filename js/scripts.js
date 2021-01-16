var myValue = "Hello gello";
var myNum = 20;
myNum = myNum + 77;
console.log(myNum);
let a = 21;
//let result = prompt("Mikä sun nimes on?", "None");

//console.log(result);
//console.log(myValue);
//console.log(document);
//console.dir(document);
//console.log(document.lastModified);

let myTestArray = ["Hello", "World", "branket", "banana"];
myTestArray.push("at the end");
console.log(myTestArray[0] + " " + myTestArray[1]);
console.log(myTestArray);

if (a) {
  console.log(a);
  let d = "anything";
  console.log(d);
  console.log(typeof a);
}

if (typeof myNum == "number") {
  console.log("tessss");
}

let myObject = { first: "Toni", Last: "Hintikka" };
console.log(myObject.first);

var chair = { color: "#000", age: 12, material: "wood", height: 60 };
const myHeading = document.querySelector("h1");
myHeading.textContent = myObject.first + " " + myObject.Last;
var myParagraph = document.createElement("p");
var text = document.createTextNode(chair.material);
myParagraph.appendChild(text);
console.log(myParagraph);
document.body.appendChild(myParagraph);
myFooter = document.createElement("footer");
myFooterText = document.createTextNode(document.lastModified);
myFooter.appendChild(myFooterText);
document.body.appendChild(myFooter);
