"strict";

// variabelen
const score = document.querySelector(".finalscore");
const diceEl_0 = document.getElementById("dice-0");
const diceEl_1 = document.getElementById("dice-1");
const diceEl_2 = document.getElementById("dice-2");
const diceEl_3 = document.getElementById("dice-3");
const diceEl_4 = document.getElementById("dice-4");
const btnRoll = document.querySelector(".rollthedices");
const btnReset = document.querySelector(".resetthedices");

// begin punten
score.textContent = 0;
diceEl_0.classList.add("verborgen");

// rollen van de dobbelstenen
btnRoll.addEventListener("click", function () {
  console.log("kaas");
});
