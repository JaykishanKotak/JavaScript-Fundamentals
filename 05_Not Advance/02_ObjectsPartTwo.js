//Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is : ${this.name}`);
    },
};

var newUser = Object.create(User);
console.log(newUser);
newUser.name = "Jay";
newUser.getUserName();

var Joey = Object.create(User, {
    name : { value : "Joey"},
    courseCount : { value : "5"},
});
Joey.getUserName();