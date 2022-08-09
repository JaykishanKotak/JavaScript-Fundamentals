// var num1 = 7;
// var num2 = 3;
// console.log(num1+num2);

// var answer = num1 > num2;
// console.log(answer);

var sellPrice = 199;
var listPrice = 799;

Discount = ((listPrice - sellPrice)/listPrice) * 100;
//console.log(Discount);
displayDiscountPercentage = Math.round(Discount);

console.log("Discount is " + Discount);

console.log(`
    Selling Price is : ${sellPrice},
    List Price is : ${listPrice},
    Total Discount is : ${displayDiscountPercentage}%off
`)

var result =  sellPrice > listPrice;

console.log(`Type of result operator is ${typeof result}`)
