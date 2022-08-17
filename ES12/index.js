// Ref :- https://regexr.com
// ECMA Github :- https://github.com/tc39
const str = "Do yahoo people use yahoo search";

const newStr = str.replace("yahoo", "Yahoo !");

console.log("Old String => " + str);

console.log("New String => " + newStr);

const newestStr = str.replaceAll("yahoo", "Yahoo !"); //  EC12 2021


console.log("Newest String => " + newestStr);

//Promises

const rejectMe = new Promise((_ , reject) => reject("Path issue"));
const resloveMe  = new Promise(reslove => reslove ());

Promise.any([rejectMe, resloveMe, rejectMe]) //  EC12 2021
//takes array of promises and rejections , if any of promise is rejected it will still return reslove
.then(() => console.log("Handle Reslove"))
.catch(() => console.log("Rejected"))

// Promise.race([rejectMe, resloveMe, rejectMe]) 
//takes array of promises and rejections , if any of promise is rejected it will return reject
// .then(() => console.log("Handle Reslove"))
// .catch(() => console.log("Rejected"))

// Logical Assign operator
// ||=(or or equle) and &&=(and and equle)

function cartTotal (value){ ////  EC12 2021
    value ??= 0; // if value is not there assign it as 0
    console.log("Your Total is : ", value);
}

cartTotal();
cartTotal(20);

// Numeric seprator => see number in clean way in code part
num = 100_000 ////  EC12 2021
console.log(num);
