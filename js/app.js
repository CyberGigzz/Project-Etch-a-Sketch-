const board = document.querySelector(".board");
const defaultSize = 16;

const rangeInput = document.querySelector("#range");
const sizeValue = document.querySelector("#sizeValue");

// Color mode
const colorMode = document.querySelector(".color_mode");

const colorPicker = document.getElementById("colorPicker");
colorPicker.value = "#ffffff"; // Set the default color to white

// App starts with a size of 16 X 16
populateBoard(defaultSize);

// Changes the displayed grid text and grid division according to scrollbar
rangeInput.addEventListener("input", function () {
  const value = parseInt(this.value);
  sizeValue.textContent = `${value} X ${value}`;
  populateBoard(value);
});

colorMode.addEventListener("click", () => {
  colorMode.style.backgroundColor = "#343a40";
  const squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.addEventListener("click", function () {
      const selectedColor = colorPicker.value;
      this.style.backgroundColor = selectedColor;
    });
  });
});

// Functions which toggles the size of a canvas grid
function populateBoard(size) {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "#fff";
    let smallSquares = board.insertAdjacentElement("beforeend", square);
  }
}

// Firefox fix for not reseting scrollbar ball
window.addEventListener("load", function () {
  const rangeInput = document.getElementById("range");
  rangeInput.value = rangeInput.getAttribute("value");
});
