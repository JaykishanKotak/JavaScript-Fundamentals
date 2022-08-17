//import User from "./06_classJS";

const User = require("./06_classJS");

const myUser = new User("Jaykishan", "JayK@jmail.com");

//console.log(myUser.getInfo());
myUser.enrollCourse("JS Bootcamp");
myUser.enrollCourse("DSA Course");

console.log(myUser.getCourseList());

let countCourses = myUser.getCourseList();

let courseCount = countCourses.length;

console.log("Enrolled Course Count is :" + courseCount);

countCourses.forEach((c) => console.log(c))