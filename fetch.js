const output =document.getElementById('output');
const clickme = document.getElementById('clickme');
clickme.addEventListener('click', myJSON);
function myJSON(){
  console.log('click');
  const url ='https://randomuser.me/api/?results=10';
  fetch (url).then(function(response){
      return response.json();
  }).then(function(data){
    data.results.forEach(function(person){
      console.log(person)
    })



      console.log(data);
      console.log(data.results[0].dob.age)
  }).catch(function(e){
    console.log(e);
  })
}