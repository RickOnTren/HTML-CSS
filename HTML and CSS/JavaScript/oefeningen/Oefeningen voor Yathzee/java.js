// console.log(document.querySelector(".kaas"));
//document.querySelector(".kaas").textContent = "MW2 is leip gimma";
// console.log(document.querySelector(".raden").value);
//document.querySelector(".raden").value = 24;

let score = 20;
let hoogtescore = 0;
const Secretnumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".kaas").textContent = Secretnumber;

document.querySelector(".check").addEventListener("click", function () {
  const raden = Number(document.querySelector(".raden").value);
  console.log(raden, typeof raden);

  if (!raden) {
    document.querySelector(".kikker").textContent = "Geen number Cancer Mongol";
  } else if (raden === Secretnumber) {
    document.querySelector(".kikker").textContent =
      "wel een number maar nogsteeds een Cancer Mongol";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > hoogtescore) {
      hoogtescore = score;
      document.querySelector(".hoogtescore").textContent = hoogtescore;
    }
  } else if (raden > Secretnumber) {
    if (score > 1) {
      document.querySelector(".kikker").textContent =
        "je hebt hoger number ingevoerd cancer mongol";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".kikker").textContent = "je hebt verloren";
      document.querySelector(".score").textContent = 0;
    }
    // wanneer een speler 
  } else if (raden < Secretnumber) {
    if (score > 1) {
      document.querySelector(".kikker").textContent =
        "je hebt lager number ingevoerd cancer mongol";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".kikker").textContent = "je hebt verloren";
      document.querySelector(".score").textContent = 0;
    }
  }
});
