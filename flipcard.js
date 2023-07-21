/*
STEPS:
1. Generate 4 cards
2. Randomly hide an O, and all other cards get X
3. when user clicks card, change bg color
to reveal x or o
4. if they click o card, alert "you win!"
5. stop the game
==============================================
PSEUDO:
1. XGenerate a random number between 0 and 3 (to match array)
2.for (let i = 0; i<4; i++) {
    3. xcreate html for a single card
    4. if (i ===random number){
        5. add O
    }6. else {
        add X
    }
    8. add an eventListener
        9. change background color to unhide letter
        10. remove event listener from the clicked card
        11. check if winner = you can go inside and check the text content to see if it's an O
            12. alert "You win!";
            13. remove event listener from all cards
            **you can clone entire container**
    14. append the card OUT of event listener
}
*/
function getRand(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}
const randomNum = getRand(0, 3);
const main = document.querySelector("main");
main.classList.add("container");
const body = document.body;

for (let i = 0; i < 4; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  const h3 = document.createElement("h3");
  h3.classList.add("h3");
  if (i === randomNum) {
    h3.textContent = "O";
  } else {
    h3.textContent = "X";
  }
  card.addEventListener("click", cardClick);
  main.appendChild(card);
  card.appendChild(h3);
}

function cardClick(e) {
  e.currentTarget.style.backgroundColor = "hotpink";
  e.currentTarget.removeEventListener("click", cardClick);
  if (e.target.textContent === "O") {
    alert("You win!");
    const newMain = main.cloneNode(true);
    body.replaceChild(newMain, main);
  }
}

//input type number
//generate button --grab value inside of input (inputElement.value) query select it
//have a counter to show how many tries youve done
