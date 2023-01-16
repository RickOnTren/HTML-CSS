// Initialize variables
let rollCount = 3;
let dice = [0, 0, 0, 0, 0];
const scoreboard = {
  ones: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  threeOfAKind: 0,
  fourOfAKind: 0,
  fullHouse: 0,
  smallStraight: 0,
  largeStraight: 0,
  yahtzee: 0,
};

function rollDice() {
  if (rollCount > 0) {
    for (let i = 0; i < dice.length; i++) {
      dice[i] = Math.floor(Math.random() * 6) + 1;
      document.getElementById("die" + (i + 1)).innerHTML = dice[i];
    }
    rollCount--;

    if (rollCount === 0) {
      rollButton.disabled = true;
    }
  }
}

const rollButton = document.getElementById("roll-button");
rollButton.addEventListener("click", rollDice);
