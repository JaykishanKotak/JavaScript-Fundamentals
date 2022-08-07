//Falsy Values -> Values treated as false 
// undefined
// null => null = totally empty/ no value 
// 0
// ''
// NaN
//Any Values Apart of above values are Truthy Values

//var user; Value is undefined 

var user = "2";

if(user)
{
    console.log("User")
}

console.log(2+2);
//Not A Number Value -> JS Consider number inside string as string
console.log(2+"2");
console.log("2"+"2")

if(2 == user){
    console.log("Normal Check -> Condition is true"); // Js Checks condition loosley / Loose Checking
}
else
{
    console.log("Normal Check -> Condition is False");
}


if(2 === user)
{
    console.log("Strict Check -> Condition is true"); // Js Checks condition strictly / Strict Checking
}
else
{
    console.log("Strict Check -> Condition is false");
}
//Ref => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality