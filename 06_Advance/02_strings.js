//var name = "Jay";
// backticks(`) are called as string litlares. it prevents escape of char.

var name = `Jay`;
var fullName = `${name} Kotak`;

console.log(fullName);
console.log(fullName.length);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("k"));
console.log(fullName.includes("ay K"));
console.log(fullName.toUpperCase());