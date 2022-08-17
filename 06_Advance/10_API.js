// Ref :- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

fetch("https://api.chucknorris.io/jokes/random")
.then((response) => {
    return response.json();
})
.then((data) => {
    //return console.log("Data is:- ", data);
    var joke = data.value;
    console.log("Fresh Joke :-",joke);
})
.catch((err) =>{
    console.log("Error");
});

// return of first  then goes to second then, means response goes top to bottom. and can be furter handle by try catch blocks.