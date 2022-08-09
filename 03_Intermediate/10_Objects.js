//IMP Topic For APIs

var user = {
    // Key : Value Pairs
    firstName : "Jay",
    lastName : "Kotak",
    Role : "admin",
    loginCount : 1,
    facebookSignedIn : false
}

console.log(user.firstName); // dot(.) is used to accessing an object.
console.log(user["lastName"]);

user.loginCount = 10; // Update the value of login count.

console.log(user.loginCount);
console.log(user); // Dumping out all values in log.
console.table(user); // Values in the table format.

var phone = {
    name : "iPhone",
    modalID : 11,
    brand : "Apple",
    baseStorage : "512 GB",
    origin : "USA",
    operatingSystem : "iOS 12",
    warranty : true
}

console.table(phone);