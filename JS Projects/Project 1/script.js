//Live User Counter with Set Interval and Set Time Out
var counter = document.getElementById("1");
var follow = document.getElementById("2");

// var counter = document.querySelector(".counter");
// var follow = document.querySelector(".followers");

 let count = 1;
 
 setInterval( () => {
    if(count < 1000)
    {
        count++;
        counter.innerText = count;
    }
 }, 1);

setTimeout( () => {
    follow.innerText = "Followers on Facebook";
},6000);