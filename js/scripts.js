let num = 10;
testOne(4); //11
testOne("New"); //12
let a = testTwo(num);
//console.log(a);
let b = "Hello";
testThree(b);
/*console.log(test4(5));
console.log(test4(5,8));*/
console.log(test5(5));
console.log(test5(5, 8));
function test5(x, y) {
  //y =  (typeof y !== 'undefined') ? y : 10;
  y = y || 20;
  console.log(x);
  console.log(y);
  return x * y;
}
function test4(x, y = 10) {
  console.log(x);
  console.log(y);
  return x * y;
}
function testThree(str) {
  let b = "New";
  //console.log(b + " World");
}
function testTwo(arg) {
  arg++;
  return arg * arg;
}
function testOne(val) {
  //console.log(val);
  let hello = val + " Hello World ";
  num++;
  //console.log(hello + num);
  return hello;
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

let myFun3 = x => x * 10;
console.log(myFun3(3));

let messages = {
  welcome: ["testi yksi", "testi kaksi"],
  hello: function() {
    console.log("Hello how are you?");
  },
  goodbye: function() {
    console.log("Thaks for coming Bye now");
  }
};
