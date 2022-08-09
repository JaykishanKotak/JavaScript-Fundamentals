var user = {
    // Key : Value Pairs
    firstName : "Jay",
    lastName : "Kotak",
    Role : "admin",
    loginCount : 1,
    facebookSignedIn : false,
    courseLists : [],
    buyCourse : function (courseName) {
        //Method inside object
        this.courseLists.push(courseName); // this represents the user, can not directly use user beacuse it's inside user object
    },
    getCouresCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseLists.length} courses.` 
    },
    getInfo : function(){
        return `
        First Name of the user is ${this.firstName} Followed by ${this.lastName} and He is an ${this.Role}. 
        His current login count is ${this.loginCount} and Facebook status is ${this.facebookSignedIn}. 
        He has following courses in his account => ${this.courseLists}. `
    }

}

var courseList = true;
//console.log(user.firstName);
//console.log(user.getCouresCount());
user.buyCourse("React JS Course");
//console.log(user.getCouresCount());
user.buyCourse("Angular Course");
console.log(user.getCouresCount());

console.log(user.getInfo());
