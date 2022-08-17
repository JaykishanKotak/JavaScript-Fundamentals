function init(){
    var firstName = "Jay";
    console.log("Init Function");
    function sayFirstName (){
        console.log(firstName);
    }
    return sayFirstName;
};

var value = init(); // Total removal of firstName from memory is not possible.
//console.log(firstName);
value(); //Closure