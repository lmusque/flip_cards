//target input
let inputVal = document.querySelector("input");
let originalInputValue = document.querySelector("input").value; //to restore the original input value
const button = document.getElementById("generate");
const restart = document.getElementById("restartBtn");

button.addEventListener("click", generateBtn);
//grabbing input value
function getRand(min, max) {
	var num = Math.floor(Math.random() * (max - min + 1) + min);
	return num;
}

const main = document.querySelector("main");
main.classList.add("container");
const body = document.body;

//create counter for number of tries
let counter = 0;
//get the value of our h2
const goodLuck = document.querySelector(".goodLuck");

//button function
function generateBtn() {
	// so if they type in 2, generate numbers between 0 and 1
	let randomNum = getRand(0, inputVal.value - 1);
	main.innerHTML = ""; //this is so we won't add on extra cards after we've already generated cards

	for (let i = 0; i < inputVal.value; i++) {
		const card = document.createElement("div");
		card.classList.add("card");
		card.classList.add("flip-card");

		let letter;
		// if (i === randomNum) {
		//   letter = "O";
		// } else {
		//   letter = "X";
		// }
		letter = i === randomNum ? "O" : "X"; //this is a ternary for the if statement above

		//start card flip
		card.innerHTML = `
     <div class="flip-card-inner"> 
     <div class = "flip-card-front"></div>
    <div class= "flip-card-back"><h3>${letter}</h3></div>
    </div>
    `;
		//endflip
		card.addEventListener("click", cardFlip);
		card.addEventListener("click", cardClick);
		button.addEventListener("click", generateBtn);
		main.appendChild(card);
	}
}
//the setTimeout function let us alert and flip the card at the same time
function cardClick(e) {
	e.target.removeEventListener("click", cardClick);
	// target the h3 inside of the card
	const h3 = e.currentTarget.querySelector("h3");

	if (h3.textContent === "O") {
		setTimeout(function () {
			alert("You win!");
			const newMain = main.cloneNode(true);
			body.replaceChild(newMain, main);
		}, 100);
		// `You win in ${counter} ${counter == 1 ? "try": "tries}!"`
		// for version 3, add that in the time out function.
	}
	counter++;
	if (counter == 1) {
		goodLuck.textContent = `You've had ${counter} try.`;
	} else {
		goodLuck.textContent = `You've had ${counter} tries.`;
	}
}

function cardFlip(e) {
	e.currentTarget.classList.add("flip");
}

//restart the game
restart.addEventListener("click", resetGame);
function resetGame() {
	main.innerHTML = ""; //remove the cards
	counter = 0; //reset the counter
	goodLuck.textContent = "Good Luck!"; //reset the message
	inputVal.value = originalInputValue; //resets original input value

	// e.currentTarget.classList.remove("flip-card-back");
	generateBtn(); //call to restart a new game
}

generateBtn();

//we gave the input a default value of 4 in html, but we still need
//to call the function
