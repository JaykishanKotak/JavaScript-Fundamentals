// Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
// Map stores object in
var myMap = new Map() // Object from Prototype

myMap.set(1 , "Uno");
myMap.set(2 , "Dos");
myMap.set(3 , "Tres");
myMap.set(4 , "Cautro");

console.log(myMap);

for( let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for( let value of myMap.values()){
    console.log(`Value is ${value}`);
}

for( let [key, value] of myMap){
    console.log(` Key is ${key} , Value is ${value}`);
}

myMap.forEach((key) => console.log(`${key}`) ) // For each allows us to pass a callback
// it will return values everytime, beacuse forEach understands that we need to work with values not indes/keys

myMap.forEach((value, key) => console.log(`Key : ${key} and Value : ${value} `) )

// For of always gives key first, while for each always gives key first.

myMap.delete(2);
console.log(myMap);