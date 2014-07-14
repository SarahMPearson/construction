/*jshint -W069 */
/* Glorbal prompt:true */
'use strict';
var prompt = require('sync-prompt').prompt;

//creating a object manually
//

var dogs = [];  // this is the dog array

var d1 = {};
d1.name = 'fido';
d1.age = 3;

var d2 = {name:'spot', age:5};

var d3 = {};
d3['name'] = 'lassy';
d3['age'] = 9;

var n = 'rex';
var a = 11;
var d4 = {name:n, age:a}; // this is json

var name = 'name';
var age = 'age';
var d5 = {};
d5[name] = n;
d5[age] = a;

dogs.push(d1,d2,d3,d4,d5);   // this pushes the answers in to the dog array

console.log('Dogs:', dogs);
console.log(d1 instanceof Object);
console.log(d1 instanceof Dog);




// creating objects using a constructor
//

function Dog(name, age) {
  this.name = name;
  this.age = age;
}
 
var d6 = new Dog('Fluffy', 2);
console.log(d6);
console.log(d6 instanceof Object);
console.log(d6 instanceof Dog);

// create a loop, create a dog, shove all dogs into array, ask for name & age
// my code for this excerse
//var dogName = prompt('Dog Name? ');
//var dogAge = prompt('Dog Age? ');


//for(i = 0; i < ?.length; i++);

//his code for excersise
var option = prompt('(d)og or (q)uit: '); // prompt user to create dog
while(option !== 'q'){ //creating a loop
  name = prompt('Name: '); //prompt user for dog name
  age = prompt('Age: '); // prompt user for dog age
  var dog = new Dog(name, age); // constructor
  dogs.push(dog); //pushing the dog to the array
  option = prompt('(d)og or (q)uit; '); //must have for a loop
}
  

console.log('All Dogs:', dogs); //print all the dogs that have been created
