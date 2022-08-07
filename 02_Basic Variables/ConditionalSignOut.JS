// Show user a signout button if he is authenticated 
// Otherwise show him option to SignUp/ Login

var authenticated = true;

// if(authenticated)
// {
//     console.log("Show Signout Button");
// }
// else{
//     console.log("Show Login Option");

// }

//Turnary Operators => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
authenticated? console.log("Show Signout Button") : console.log("LOGIN")