const board = document.getElementById("board");
const colors = ["red", "blue", "green", "yellow", "orange"];
let tiles = [];
let selected = null;

// создаём поле 6x6
for (let i = 0; i < 36; i++) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.style.backgroundColor = getRandomColor();
  tile.dataset.index = i;
  tile.addEventListener("click", () => handleClick(tile));
  board.appendChild(tile);
  tiles.push(tile);
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function handleClick(tile) {
  if (!selected) {
    selected = tile;
    tile.style.border = "3px solid black";
  } else if (selected === tile) {
    selected.style.border = "none";
    selected = null;
  } else {
    swapColors(selected, tile);
    selected.style.border = "none";
    selected = null;
  }
}

function swapColors(tile1, tile2) {
  const color1 = tile1.style.backgroundColor;
  tile1.style.backgroundColor = tile2.style.backgroundColor;
  tile2.style.backgroundColor = color1;
}
