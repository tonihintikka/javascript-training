/*let myArray = [1, 2, 2, 3, 4, 5, 6, 7, 4, 2, 2];
let c = 0;

for (let a = 20; a > 10; a--) {
  console.log("a is " + a);
}

let myObj = { firstName: "Toni", lastName: "Hintikka", age: "42" };
for (let x in myObj) {
  console.log(myObj[x]);
  console.log(x);
}
*/
const output = document.getElementById('output');
//output.innerHTML = "Your hacked man";
console.dir(output);

let myArray = ["Hello", "world", 6, 2, 55, 2332, 3434];

let html = myArray.map(function(value,index){
  return '<div>'+index+' '+value+'</div>'; 
})
let myString = html.join('');
console.log(myString)
output.innerHTML = myString;

console.log(html);




/*let c = 0;
while (myArray[c]) {
    console.log(myArray[c]);
    c++;
}
for (let a = 20; a > 10; a--) {
    console.log('a is ' + a);
}
for (let b = 0; b < myArray.length; b++) {
    console.log(myArray[b]);
}
let myObj = {
    firstName: "Laurence"
    , lastName: "Svekis"
    , age: 35
};
for (let x in myObj) {
    console.log(myObj[x]);
    console.log('tämä');
    console.log(x);
}
for (let y of myArray) {
    console.log(y);
}
let myStr = "JavaScript Course";
for (let letter of myStr) {
    console.log(letter);
}

let myArr2 = myArray.map(function(val){
  console.log(val);
  return typeof val;
});
console.log(myArr2);

let myNumbs = [12,23,12,123123,123,123,123,123];
const newNubs = myNumbs.map(function(x){
    return x*3;

});

console.log(newNubs);


const newNubs2 = myNumbs.map(x => x * 3);
console.log(newNubs2);*/


