/*var myValue = "Hello gello";
var myNum = 20;
myNum = myNum + 77;
console.log(myNum);
let a = 21;
//let result = prompt("Mikä sun nimes on?", "None");*/

//console.log(result);
//console.log(myValue);
//console.log(document);
//console.dir(document);
//console.log(document.lastModified);

let myTestArray = ["Hello", "World", "branket", "banana"];
myTestArray.push("at the end");
console.log(myTestArray[0] + " " + myTestArray[1]);
console.log(myTestArray);

let myArray = ["Hello", "World", 50, false];
console.log(myArray[0] + " " + myArray[1]);
myArray[myArray.length] = "New item";
myArray.push("At the end");
let firstone = myArray.shift();
console.log(firstone);
myArray.unshift("New one at the start");
console.log("slice");
let res = myArray.slice(3);
myArray[3] = true;
console.log(res);
let myStr = myArray.toString();
let myArray2 = myStr.split(",");
let myArray3 = myArray.join(" - ");
console.log(myStr);
console.log(myArray2);
console.log(myArray3);
/*
let rep = myArray.splice(3,2,"One","Two");
console.log(rep);*/
//delete myArray[3];
/*let lastone = myArray.pop();
console.log(lastone);*/
console.log(myArray);
/*
if (a) {
  console.log(a);
  let d = "anything";
  console.log(d);
  console.log(typeof a);
}

if (typeof myNum == "number") {
  console.log("tessss");
}*/

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
