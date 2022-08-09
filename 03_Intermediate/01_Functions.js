//Functions are block of codes which we can use again and again.

function sayHello(user)
{
    //Block Of Code
    //console.log("Hello")
    //console.log("Hello", user);
    console.log(`Hello ${user}, How are you ?`)

}

sayHello("Ryan");// Calling a function
//sayHello; -> Refrancing a function

function greetings() 
{
    return "Hello Here";
}

var hello = greetings(); // Functional Programing
console.log(hello);