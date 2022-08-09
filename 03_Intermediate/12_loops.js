// for (let i = 0 ; i < 10 ; i++)
// {
//    console.log(i);
// }

const myStates = ["Gujarat", 
                  "Goa", 
                  "Punjab", 
                  1991,
                  "Aasam", 
                  "Rajasthan"
                  ]

// console.log("Loop 1");
                
// for (let index = 0; index < myStates.length; index++) {
//    if(typeof myStates[index] !== "string") continue;
//     // Continue the loop whenever condition is true
//    console.log(myStates[index]); 
   
// }

// console.log("Loop 2");

// for (let index = 0; index < myStates.length; index++) {
//    if(typeof myStates[index] !== "string") break;
//     // Break will break loop where condtions in true
//    console.log(myStates[index]); 
   
// }

//While  and doWhile Loop
//let i = 0;

// while( i < myStates.length )
// {
//    console.log(myStates[i]);
//    i++;
// }

let i = 20;
do
{
   console.log(i);  // Atlest run one time ven if condition is false -> Used in hardware domain.
   i++;
}while( i < 10);