// *****For all the regular function calls, this points to the window/global object.

console.log(this);

var users = {
    firstName : "Jay",
    courseCount : 0,
    getCourseCount : function (){
        console.log("Line 9", this); // Object call, not a reg function call.
        function sayHello(){
            console.log("Hello");
            console.log("Line 12", this); // Will return the window object because this is a regular function.
        }
        sayHello()
    },
};

users.getCourseCount(); // Does not count in Reg. function call.

// function sayHello () Reg Function call.
// {
//     console.log("Hello");
// }

// sayHello();// Reg. function call