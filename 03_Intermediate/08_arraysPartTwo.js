// var isEven = function(num) //Function inside a varibale
// {
//     if(num %2 === 0)
//     {
//         return true;
//     }
//      return false;
    
// }

//Arrow Function
var isEven = (num) => {
    return num % 2 === 0 ;
}

console.log(isEven(21));

// var result = [2, 3, 6, 8].every(isEven) //every goes into array and look for every single element and run a test on it. it returns combine results if one of case will fail, it will return false.
// Callback -> a function passed into another function.
// console.log(result);

// Ideal arrow function with return ((e) => { return e%2 === 0}) || without return ((e) => e%2 === 0)
var result = [2, 4, 6, 8].every((e) => e%2 === 0)
console.log(result);