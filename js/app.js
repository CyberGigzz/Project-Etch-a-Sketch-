function populateBoard(size) {
  const board = document.querySelector(".board");
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

populateBoard(64);
