






const board = document.querySelector(".board");
const defaultSize = 16;
const rangeInput = document.querySelector("#range");
const sizeValue = document.querySelector("#sizeValue");
// Color mode
const colorMode = document.querySelector(".color_mode");
const colorPicker = document.getElementById("colorPicker");
colorPicker.value = "#ffffff"; // Set the default color to white
// App starts with a size of 16 X 16



// Firefox fix for not resetting scrollbar ball
window.addEventListener("load", function () {
  const rangeInput = document.getElementById("range");
  rangeInput.value = rangeInput.getAttribute("value");
});
