var testArray = [2,4,6,3,1,7,5,9,0,8];

console.log(testArray.fill("j" , 2, 5)); // fill the blocks with data passing in fill,  start range in inclusive, end range is exclusive(applied in all range based functions.)

const myNumbers = [12, 22, 45, 78, 99, 11, 41]

//const result = myNumbers.filter((num) => num %2 === 0); // filter out values based on callback passed inside filter
//console.log(result);

const result = myNumbers.filter((num) => num <= 25);
console.log(result);


//Slice and Splice in JS

var users = ["Tad", "Tim", "Joe", "Joey", "Jimmmy", "Peater"];

console.log(users.slice(1,3)); // 1 is inclusive and 3 is exclusive.

console.log(users.slice(1)); // Only 1 value will slice(drop) off in output.

users.splice(1, 3 , "Hii", "Bye") // 1 is start value, 2 is count value and Hi is replace value.
// Count From 1 -> Count 2 value after 1 ->2 and 3 value will be replaced with Hii and Bye
console.log(users);