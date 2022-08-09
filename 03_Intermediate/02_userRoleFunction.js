/* 
Define a function that can answer the roe of a user.
A user can be on following roles:
admin - with all acces
subadmin - with access to create/delete courses
testprep - witch access to create/delete tests
user - consume all content
other - trial user.

Input  : getUserRole(name, role)
*/

var getUser = function getUserRole(name, role) //// Function inside a variable, Functional Programing , used widely in react, anguler 
{
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; // this is not necessary 
        case "subadmin":
            return `${name} is subadmin with access to create/delete courses`
            break;
        case "testprep":
            return `${name} is testuser with access to create/delete tests`
            break;
        case "user":
            return `${name} is user with access to consume all content`
            break;
        default:
            return `${name} is a trial user`
            break;
    }
}

//var getUser = getUserRole("Ryan", "admin");
console.log(getUser);