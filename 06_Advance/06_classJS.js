//Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
//       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super
class User {
    //name="";
    constructor(name, email){ // constructor run as soon as object is created
        this.name=name;
        this.email=email;
    }
    #courseList = []; // can be refered throughout the class with #courseList keyword

     getInfo() {
        return {name: this.name , email: this.email}
    }
    enrollCourse(name){
        //this.courseList.push(name); // Setters => Expects Params to get the values
        this.#courseList.push(name);

    }
    getCourseList(){
        //return  this.courseList; // Getters => Return a varibale without params
        return  this.#courseList;
    }
    //static login(){
    login(){
        return "You're Logged in"; // static can not access by child class
    }

}

//Inheritance

class SubAdmin extends User{
    constructor(name, email){ // constructor overrideing
        super(name, email); // allow to use params from parent class.
    }
    getAdminInfo (){
        return "I am the Subadmin";
    }
    login(){
        return "Login for admin only" // method override the above login method
    }
} 

module.exports = User;


// Private variables / Getters & Setters
// Getters is a method helps to access private info inside class/ everybody can not access value directly.
const rock = new User("rock", "rock@rock.com");
console.log(rock.getInfo());
rock.enrollCourse("MERN Course");
//console.log(rock.getCourseList());
//console.log(rock.courseList); // Private Variables

const tom = new SubAdmin("tom","tom@jerry.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
