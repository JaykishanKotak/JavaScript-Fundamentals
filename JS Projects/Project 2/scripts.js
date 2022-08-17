// Color Selection Project used with computed propertys/styles and events
// Ref :- https://developer.mozilla.org/en-US/docs/Web/Events

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

console.log(window.getComputedStyle(red).backgroundColor); 
//If property had dashes, dash will be removed and convertesd into capitalized letter ex:- background-color => backgroundColor

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor; 

}

//console.log(getBGColor(cyan)); 

// var color = getBGColor(cyan) ;

// cyan.addEventListener("mouseenter", ()=> {
//     center.style.background = color ;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", ()=> {
        center.style.background = color ;
    });
}


magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(pink, getBGColor(pink));
