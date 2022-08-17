// Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Promise retrun if the request is fullfil or not.
const Uno = () => {
    return "I Am One."
}

const Dos = async () => {
    // setTimeout(()=>{ // 
    //     return "I Am Two." 
    // },3000)
    return new Promise((reslove, reject) => {
        setTimeout(()=>{ 
            reslove ("I Am Two.");
        // reject ("I Am Two."); // raise a error
        }, 3000);
    });
}

const Tres = () => {
    return "I Am Three.";
}

const callMe = async () => { // when we make call inside method, we will make it async
    let varOne = Uno();
    console.log(varOne);

    let varTwo = await Dos(); // wait till function will retrun data
    console.log(varTwo);

    let varThree = Tres();
    console.log(varThree);

};

callMe();
