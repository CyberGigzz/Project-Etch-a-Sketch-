const board = document.querySelector(".board");
const defaultSize = 16;

const rangeInput = document.querySelector("#range");
const sizeValue = document.querySelector("#sizeValue");

rangeInput.addEventListener("input", function () {
  const value = parseInt(this.value);
  sizeValue.textContent = `${value} X ${value}`;
  populateBoard(value);
});

populateBoard(defaultSize);

function populateBoard(size) {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "#fff";
    // square.style.borderTop = "1px solid rgb(156, 156, 156)";
    // square.style.borderLeft = "1px solid rgb(156, 156, 156)";
    let smallSquares = board.insertAdjacentElement("beforeend", square);
  }
}


