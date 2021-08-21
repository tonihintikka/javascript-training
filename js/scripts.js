let testMap = new Map();
testMap.set('first', 'Laurence');
testMap.set('last','hokadoukkas');
console.log(testMap);
testMap.set('first','John');
testMap.set('age','45');
console.log(testMap.get('first'));
for(let k of testMap.keys()){
  console.log(k);
}

for(let v of testMap.values()){
  console.log(v);
}

for(let v of testMap){
  console.log(v);
}

for(let [k,v] of testMap){
  console.log(k);
  console.log(v);
}