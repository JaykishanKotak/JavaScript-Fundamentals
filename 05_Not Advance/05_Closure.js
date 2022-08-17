//Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function doAddition(x) // Gives Refrances to the function instade of calculation the values
{ 
    return function(y){
        return x + y ;
    }
}

var add5 = doAddition(4);
console.log(add5(5));

console.log(doAddition(5)(5)); // doAddition is never goes off from memory because one refrance is still alive.
//doAddition()()() //Currying