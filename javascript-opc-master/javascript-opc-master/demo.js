'use strict'; 
(function() {  

  let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age: 18,
    isAdult() {return person.age >= 18; }
  }
  let helthStatus = {
    height: 68,
    weight:150,
  }
  function mergeHealthStatus(person, mergeHealthStatus){
    return Object.assign({}, person, mergeHealthStatus);
  }
  let mergePerson = mergeHealthStatus(person, helthStatus);

  display(mergePerson)
  display(person)


})();