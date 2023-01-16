var count = 4;
var countOnes = 0;
var countTwos = 0;
var countThrees = 0;
var countFours = 0;
var countFives = 0;
var countThreeofakind = 0;
var countFourofakind = 0;
var countYahtzee = 0;
var diceOne;
var diceTwo;
var diceThree;
var diceFour;
var diceFive;
var lockedDice = [false, false, false, false, false];

function roll() {
  StopTheGame();
  dices();
  ones();
  twos();
  threes();
  fours();
  fives();
  threeofakind();
  fourofakind();
  yahtzee();
}

function dices() {
  var die1 = document.getElementById("dice1");
  var die2 = document.getElementById("dice2");
  var die3 = document.getElementById("dice3");
  var die4 = document.getElementById("dice4");
  var die5 = document.getElementById("dice5");

  var tot = document.getElementById("total");
  var yat = document.getElementById("yahtzee");

  if (lockedDice[0] === false) diceOne = Math.floor(Math.random() * 6) + 1;
  if (lockedDice[1] === false) diceTwo = Math.floor(Math.random() * 6) + 1;
  if (lockedDice[2] === false) diceThree = Math.floor(Math.random() * 6) + 1;
  if (lockedDice[3] === false) diceFour = Math.floor(Math.random() * 6) + 1;
  if (lockedDice[4] === false) diceFive = Math.floor(Math.random() * 6) + 1;

  die1.innerHTML = diceOne;
  die2.innerHTML = diceTwo;
  die3.innerHTML = diceThree;
  die4.innerHTML = diceFour;
  die5.innerHTML = diceFive;
}

function yahtzee() {
  var yahtzee = document.getElementById("yahtzee");
  if (
    diceOne == diceTwo &&
    diceOne == diceThree &&
    diceOne == diceFour &&
    diceOne == diceFive
  ) {
    yahtzee.innerHTML = countYahtzee;
    countYahtzee++;
  }
}

function ones() {
  var Ones = document.getElementById("ones");
  if (
    diceOne === 1 ||
    diceTwo === 1 ||
    diceThree === 1 ||
    diceFour === 1 ||
    diceFive === 1
  ) {
    Ones.innerHTML = countOnes;
    countOnes++;
  }
}

function twos() {
  var Twos = document.getElementById("twos");
  if (
    diceOne === 2 ||
    diceTwo === 2 ||
    diceThree === 2 ||
    diceFour === 2 ||
    diceFive === 2
  ) {
    countTwos++;
    Twos.innerHTML = countTwos;
  }
}

function threes() {
  var Threes = document.getElementById("threes");
  if (
    diceOne === 3 ||
    diceTwo === 3 ||
    diceThree === 3 ||
    diceFour === 3 ||
    diceFive === 3
  ) {
    countThrees++;
    Threes.innerHTML = countThrees;
  }
}

function fours() {
  var Fours = document.getElementById("fours");
  if (
    diceOne === 4 ||
    diceTwo === 4 ||
    diceThree === 4 ||
    diceFour === 4 ||
    diceFive === 4
  ) {
    countFours++;
    Fours.innerHTML = countFours;
  }
}

function fives() {
  var Fives = document.getElementById("fives");
  if (
    diceOne === 5 ||
    diceTwo === 5 ||
    diceThree === 5 ||
    diceFour === 5 ||
    diceFive === 5
  ) {
    countFives++;
    Fives.innerHTML = countFives;
  }
}

function threeofakind() {
  var Threeofakind = document.getElementById("Threeofakind");

  if (diceOne == diceTwo && diceTwo == diceThree) {
    countThreeofakind++;
    Threeofakind.innerHTML = countThreeofakind;
  } else if (diceTwo == diceThree && diceThree == diceFour) {
    countThreeofakind++;
    Threeofakind.innerHTML = countThreeofakind;
  } else if (diceThree == diceFour && diceFour == diceFive) {
    countThreeofakind++;
    Threeofakind.innerHTML = countThreeofakind;
  }
}

function fourofakind() {
  var Fourofakind = document.getElementById("fourofakind");

  if (diceOne == diceTwo && diceTwo == diceThree && diceThree == diceFour) {
    countFourofakind++;
    Fourofakind.innerHTML = countFourofakind;
  } else if (
    diceTwo == diceThree &&
    diceThree == diceFour &&
    diceFour == diceFive
  ) {
    countFourofakind++;
    Fourofakind.innerHTML = countFourofakind;
  }
}

function clicks() {
  count--;
  var display = document.getElementById("displayCount");

  display.innerHTML = count;
}

function ResetButton() {
  count = 4;
  countOnes = 0;
  countTwos = 0;
  countThrees = 0;
  countFours = 0;
  countFives = 0;
  countThreeofakind = 0;
  countFourofakind = 0;
  countYahtzee = 0;
  diceOne = 0;
  diceTwo = 0;
  diceThree = 0;
  diceFour = 0;
  diceFive = 0;
  lockedDice = [false, false, false, false, false];
  removeClassLocked();
}

function StopTheGame() {
  if (count == 0) {
    ResetButton();
  }
}

const [...die] = document.querySelectorAll(".dice");
for (let i = 0; i < die.length; i++) {
  die[i].addEventListener("click", function (e) {
    const targetButton = e.target;
    const indexNumber = targetButton.id.substring(4) - 1;
    if (lockedDice[indexNumber] === false) {
      lockedDice[indexNumber] = true;
      //lock
    } else {
      lockedDice[indexNumber] = false;
      //unlock
    }
    targetButton.classList.toggle("locked");
  });
}
function removeClassLocked() {
  die.forEach((value) => {
    value.classList.remove("locked");
  });
}
