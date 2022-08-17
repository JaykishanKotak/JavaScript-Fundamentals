// Use vatiable name Uppper case while creating prototype.

var User = function(firstName, courseCount) // Functional approch to define the object.
{
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`Course count is  : ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function() {
    console.log(`Your First Name is ${this.firstName}`);
}

var mySelf = new User("Jay",2); 
// New creates new copy of the object every time it's called. It invokes constactor and create a unique instance everytime.
// without new , User indiactes to a this object which is empty object insatde of a window object.
// new search for the prototype and inject the value in user object.
//console.log(mySelf);
mySelf.getCourseCount();
mySelf.getFirstName(); // Call name outside object.

var Joey = new User("Joey", 1); // Different user with different properties is created with help of new.
//console.log(Joey);
Joey.getCourseCount();
// Check if the Property exists in Function or not.
if(Joey.hasOwnProperty("firstName"))
{
    Joey.getFirstName();
} 