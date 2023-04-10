const colorChange = document.querySelector(".circle");

function changeColor() {
  if (colorChange.style.background === "red") {
    colorChange.style.background = "blue";
  } else {
    colorChange.style.background = "red";
  }
}
