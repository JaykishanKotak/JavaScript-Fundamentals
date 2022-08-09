//Array is the collection of datas, start with the squre [] brackets.
// Ref. => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

var countries = ["India", "USA", "France", "Russia", "Cuba"];

var states = new Array("Gujarat", "Goa", "Aasam", "Rajasthan"); //Object Orianted Approch

// console.log(states);
// console.log(states[1]);
// console.log(states.length);

// states[0] = "Punjab"; // Replace an element in array
// console.log(states);

var users = ["Jaykishan", "Jaykishan@abc.com", 21, 94294, true]
console.log(users);
users.pop();// Removes last value of an array
console.log(users);

//Remove first elemet, add the passed value in and shift the rest of values in array
users.unshift("New Value");
console.log(users);

users.shift(); // Remove new value and returns the old values
console.log(users);


console.log(users.indexOf(21)); // return the index of an elemnet in array if its exists, if not, will return -1.

console.log(Array.from("Hello")); // Converts sting into comma-seprated values/array.