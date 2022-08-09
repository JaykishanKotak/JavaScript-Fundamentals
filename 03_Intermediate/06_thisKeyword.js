// Part -1 of this keyword
// this keyword gives us access of the global context -> context will depends on the browser/engine

console.log(this);// It will return global context in browsers

var game = "Cricket";

function sayName()
{
    var Name = "Jaykishan";
    console.log(this);
}

sayName();