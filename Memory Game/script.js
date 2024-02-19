const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    newDiv.setAttribute('card', true);
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let card1 = null;
let card2 = null;
let card1_color = null;
let card2_color = null;
let cardsFlipped = 0;
let noClicking = false;

function handleCardClick(event) {
  if (noClicking) return;
  console.log("you just clicked", event.target);
  let currentCard = event.target;
  if (currentCard.getAttribute('card')){
    currentCard.style.backgroundColor = currentCard.classList[0];
    // adds one to cards flipped and stores card 1 and card 2 info
    cardsFlipped++;
    if (cardsFlipped === 1){
      card1 = currentCard;
      card1_color = currentCard.className;
      console.log(card1);
    }
    if (cardsFlipped === 2){
      card2 = currentCard;
      card2_color = currentCard.className;
      console.log(card2);
      noClicking = true;
      //figures out if you have a match
      if (card1_color === card2_color && card1 != card2){
        console.log('i found a match');
        cardsFlipped = 0
        card1 = null;
        card2 = null;
        card1_color = null;
        card2_color = null;
        noClicking = false;
      } else {
        setTimeout(function(){
          console.log('match not found');
          card1.style.backgroundColor = 'white';
          card2.style.backgroundColor = 'white';
          cardsFlipped = 0
          card1 = null;
          card2 = null;
          card1_color = null;
          card2_color = null;
          noClicking = false;
        }, 1000);
      }
    }
  }
}

// when the DOM loads
createDivsForColors(shuffledColors);
