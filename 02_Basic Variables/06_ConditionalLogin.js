//Allow Users to access the course if:
//logged in from email
//logged in from facebook
//logged in from google


var email = false;
var facebook = false;
var google = false;

// && And , || Or
if(email || google || facebook)
{
    console.log("Logged Success!")
}