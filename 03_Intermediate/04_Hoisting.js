// Exicution context calles when a block of code or line of code is excuated and than go away.
// Rule 1 -> Function Declration are scanned and made available.
// Rule - 2 -> Function Declration are scanned and made undefined.

// mySay();

// function mySay()
// {
//      console.log("Say Me");
// }

tipper ("100"); // Global exuction funcation available to call function from anywhere in code if the function is declared.

function tipper (a)
{
    var bill = parseInt(a);
    console.log(bill + 5);
}

function bigTipper (a)
{
    var bill = parseInt(a);
    console.log(bill + 25);
}

bigTipper("250")

// var bigTipper = function  (a) => Function Declration are scanned and made undefined
// {
//     var bill = parseInt(a);
//     console.log(bill + 25);
// }

console.log(name); //Global Context knows name var is availbale but its not defined till this line.
var name = "Jaykishan";

function sayName() // Exicution Context
{
    var name = "Jay";
    console.log(name);
}
sayName();

console.log(name); // Global Context

// Ref:- https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/