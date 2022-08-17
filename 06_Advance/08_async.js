// Ref :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

const Uno = () => {
    console.log("I Am One.");
}

const Dos = () => {
    setTimeout(()=>{ // async function
        console.log("Woooohooo"); // wait in event loop, no resoure will be blocked
    },3000)
    console.log("I Am Two.");
}

const Tres = () => {
    console.log("I Am Three.");
}

Uno();
Dos();
Tres();
