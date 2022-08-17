console.log(name); // undefined open issues in backend => let and const is useful in backend.

var name = "Jay";

if(true){
    // Between { and } considered as scope. Var declarded inside the scope cant be useable outside it.
    let lastName = "Kotak";
}


//console.log(lastName); // can not access due to scope.