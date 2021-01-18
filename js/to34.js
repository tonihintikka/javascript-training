let myObject = { first: "Toni", Last: "Hintikka" };
console.log(myObject.first);

var chair = { color: "#000", age: 12, material: "wood", height: 60 };
const myHeading = document.querySelector("h1");
myHeading.textContent = myObject.first + " " + myObject.Last;
var myParagraph = document.createElement("p");
var text = document.createTextNode(chair.material);
myParagraph.appendChild(text);
//console.log(myParagraph);
document.body.appendChild(myParagraph);
myFooter = document.createElement("footer");
myFooterText = document.createTextNode(document.lastModified);

let a = 11;
let b = 55;
let c;
if (a > 10) {
  c = "YES";
} else {
  c = "NO";
}
let d = a > 10 ? "YES" : "NO";
console.log(c, d);
let g;
while (g < 10) {
  console.log("rivi " + g);
  g++;
}

let age = Number(prompt("Kuinka vanha olet?"));
let ofAge = age > 16 ? "Voit ajaa erikoisluvalla" : "Olet alaikäinen";

let ageHeading = document.createElement("h2");
let answerText = document.createTextNode(ofAge);
ageHeading.appendChild(answerText);
document.body.appendChild(ageHeading);

myFooter.appendChild(myFooterText);
document.body.appendChild(myFooter);
let hi;
