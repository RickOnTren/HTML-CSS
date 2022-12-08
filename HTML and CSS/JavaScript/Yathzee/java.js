"strict";

// Variabelen van Yathzee game
const Totalrolls = document.querySelector(".rollsover");
const DobbelSteenEl = document.querySelector(".dice-0");
const DobbelSteenEl_1 = document.querySelector(".dice-1");
const DobbelSteenEl_2 = document.querySelector(".dice-2");
const DobbelSteenEl_3 = document.querySelector(".dice-3");
const DobbelSteenEl_4 = document.querySelector(".dice-4");
const BtnRoll = document.querySelector(".rollthedices");
const BtnReset = document.querySelector(".resetthedices");

// begin value's voor starten van de game

DobbelSteenEl.classList.add("verborgen");
DobbelSteenEl_1.classList.add("verborgen");
DobbelSteenEl_2.classList.add("verborgen");
DobbelSteenEl_3.classList.add("verborgen");
DobbelSteenEl_4.classList.add("verborgen");

let rolls = 3;

// Function van BtnRoll
BtnRoll.addEventListener("click", function () {
  // test of de button wel werkt
  console.log("kaas");
  // random dobbelstenen generator
  const dobbelStenen = Math.trunc(Math.random() * 6) + 1;
  const dobbelStenen_1 = Math.trunc(Math.random() * 6) + 1;
  const dobbelStenen_2 = Math.trunc(Math.random() * 6) + 1;
  const dobbelStenen_3 = Math.trunc(Math.random() * 6) + 1;
  const dobbelStenen_4 = Math.trunc(Math.random() * 6) + 1;
  //weergave van dobbelstenen in de display
  DobbelSteenEl.classList.remove("verborgen");
  DobbelSteenEl_1.classList.remove("verborgen");
  DobbelSteenEl_2.classList.remove("verborgen");
  DobbelSteenEl_3.classList.remove("verborgen");
  DobbelSteenEl_4.classList.remove("verborgen");
  //de dobbelstenen img die zit op het scherm
  DobbelSteenEl.src = `img/Db-${dobbelStenen}.png`;
  DobbelSteenEl_1.src = `img/Db-${dobbelStenen_1}.png`;
  DobbelSteenEl_2.src = `img/Db-${dobbelStenen_2}.png`;
  DobbelSteenEl_3.src = `img/Db-${dobbelStenen_3}.png`;
  DobbelSteenEl_4.src = `img/Db-${dobbelStenen_4}.png`;
  //if statement voor de huidige scoren
});

BtnReset.addEventListener("click", function () {
  location.reload();
});
