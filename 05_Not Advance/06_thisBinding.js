const user = {
    firstName : "Jay",
    lastName : "Kotak",
    role : "admin",
    courseCount : 10,
    getInfo : function(){
        console.log(`First name is : ${this.firstName}  
                     Last name is : ${this.lastName}
                     His Role is : ${this.role} 
                     He is studying ${this.courseCount} Courses.`);
    }
}

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "subadmin",
    courseCount : 5,
}

user.getInfo();

var djInto = user.getInfo.bind(dj);//This line binds the getInfo to the Dj and retruns the refrance back. we need to run the refrance.

//getInfro => Refranceing a method.
//getInfo() => Calling a method
user.getInfo.call(dj); //Call directly calls the function, unlike bind which returns a refrance.
