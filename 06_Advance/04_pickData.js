const userName = ["Jay", 9, "Admin"];

// var role = user[2] ;
// var name = user[0];

var [name, courseCount, role] = userName; // var fills values from userName => Destructuting => can be applied on array, object and string.

console.log(userName);

const myUser = {
    name : "Jay",
    courseCount : 5,
    role :  "Admin"
};

//console.log(myUser.courseCount);

var {name, role, courseCount} = myUser; // Inorder to destructuring name and type of data should match with the object

console.log(role);
