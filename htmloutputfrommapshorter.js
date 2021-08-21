
const output = document.getElementById('output');
//output.innerHTML = "Your hacked man";
console.dir(output);

let myArray = ["Jooel", "world", 6, 2, 55, 2332, 3434];

/*
this is the older way.

let html = myArray.map(function(value,index){
  return '<div>'+index+' '+value+'</div>'; 


})
let myString = html.join('');



*/

output.innerHTML = myArray.map((value,index)=> '<div>' + index + ' ' +value + '</div>').join('');

