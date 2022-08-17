const cards = document.querySelectorAll(".card")
console.log(cards);

cards.forEach((card) => card.addEventListener("click", flip));

//Variables
var isFlipped = false;
var firstCard ;
var secondCard ;


function flip(){
  // console.log("Card Flipped");
  this.classList.add("flip")
  if(!isFlipped){ // Revers logic check => turns false into true
    isFlipped = true ;
    firstCard = this;
  }
  else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

function checkIt (){
  // console.log("Checking...");
  if(firstCard.dataset.image === secondCard.dataset.image ){
    success();
  }
  else{
    fail();
  }
}

 function success(){
   // console.log("Success");
   firstCard.removeEventListner("click", flip);
   secondCard.removeEventListner("click", flip);
   reset();

 }

function fail(){
  // console.log("Fail");
 setTimeout(() => {
  firstCard.classList.remove("flip");
  secondCard.classList.remove("flip");
  reset(); // Reset before flip is called, apply before flip back
 },1000)
}

function reset(){
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle(){
  cards.forEach((card) => {
    var index = Math.floor(Math.remove() * 16)
    card.style.order = index;
  });
})();