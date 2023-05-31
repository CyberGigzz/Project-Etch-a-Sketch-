const DEFAULT_COLOR = '#333333'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE


const colorPicker = document.getElementById("colorPicker");
const colorBtn = document.querySelector(".color_mode");
const rainbowColorBtn = document.querySelector(".rainbow_mode");
const eraserBtn = document.querySelector(".eraser");
const clear = document.querySelector(".clear");




const board = document.querySelector(".board");
const rangeInput = document.querySelector("#range");
const sizeValue = document.querySelector("#sizeValue");
// Color mode
colorPicker.value = "#ffffff"; // Set the default color to white
// App starts with a size of 16 X 16



// Firefox fix for not resetting scrollbar ball
window.addEventListener("load", function () {
  const rangeInput = document.getElementById("range");
  rangeInput.value = rangeInput.getAttribute("value");
});
