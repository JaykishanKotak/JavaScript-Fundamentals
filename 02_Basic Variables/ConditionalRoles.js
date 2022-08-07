// Create an application with the following Roles
// admin - gets full access
// subadmin - gets access to create/delete courses
// tester - gets access to create/delete tests
// user - gets access of course content 

var user = 'admin';

switch (user) {
    case "admin":
        console.log("Full Access !") // or return console.log("Full Access !") -> code will only run till return
        break; //break helps to cancle fall through
    case "subAdmin":
        console.log("gets access to create/delete courses !")
        break;
    case "testPrep":
        console.log("gets access to create/delete tests !")
        break;
    case "user":
        console.log("Full Access !")
        break;
    default:
        console.log("Trial User")
        break;
}