const colors = [
  "red",
  "green",
  "purple",
  "orange",
  "blue",
  "pink",
  "lightblue",
];

function addElement() {
  var divs = document.createElement("div");
  var element = document.getElementById("element");

  for (let i = 0; i < 5; i++) {
    divs.innerHTML = "hello";
    element.appendChild(divs);
  }
}
