// var returnVal = Math.max(2, 5, 7, 9, 4, 3, 8, 1);
// console.log(returnVal);

// var myObj = {};

// Object.assign(myObj, {a:1, b:2, c:3},{x:4, y:5, z:6},{p:7, q:8, r:9});
// console.log(myObj);

function sumOne(a,b){
    return a+b;
}

var myA= [5,4];
console.log(sumOne(5,4)); // Anything function does not understand or data type not match , will be ignored.
//console.log(sumOne(myA)); // myA will be ignored.
//console.log(sumOne(5,4, 1));// 1 will be ignored.

// Dont want to chnage Function defination => value comes as a pack of value then,
//Spread => takes a group and tries to spread into multiple values
console.log("SPREAD  " + sumOne(...myA));

function sumTwo(...args) // when number of arguments are not decide.
{
    let sum=0; // args converts individual values into array. => rest
    for (const arg of args) {
        sum += arg;
    }
    return sum;
}

console.log(sumTwo(1,2));
console.log(sumTwo(1,2,3,4,5,6,7));
console.log(sumTwo(110,120,130,140,150));

//Rest => converts individual values into array.
//Spread 

function sumThree(a,b, ...args) // args wil ignore first 2 values(a and b).
{
    let multi = a*b;
    let sum=0; // 
    for (const arg of args) {
        sum += arg;
    }
    return [sum, multi];
}

console.log(sumThree(1,2,3,4,5,6)); // first 2 value will be multiplied and rest will be added.
