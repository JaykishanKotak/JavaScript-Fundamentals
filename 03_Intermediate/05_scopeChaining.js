var name = "Jaykishan"

console.log("Line No. 3", name);

function sayName()
{
    var name = "Jay"
    console.log("Line No. 98", name );

    //myNameTwo();

    function myNameTwo()
    {
        var name="Kishan"
        console.log("Line No. 15", name );
        // If name is not declared in myNameTwo(), it looks in sayName(), if its not in sayName(), it will print name from line No. 1. -> this will call scope chaining
    }
    myNameTwo();
}

/*{
    // Empty Scope
}*/
sayName();

//Note :- If/Else, Switch can not be counted as full scope

console.log("Line No. 28", name);