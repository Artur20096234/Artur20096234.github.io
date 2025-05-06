const board = document.getElementById("board");
const colors = ["red", "blue", "green", "yellow", "orange"];
let tiles = [];
let selected = null;
let score = 0;

const numRows = 6;
const numCols = 6;

// создаём поле 6x6
for (let i = 0; i < numRows * numCols; i++) {
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
    checkMatches();
  }
}

function swapColors(tile1, tile2) {
  const color1 = tile1.style.backgroundColor;
  tile1.style.backgroundColor = tile2.style.backgroundColor;
  tile2.style.backgroundColor = color1;
}

function checkMatches() {
  let matches = [];

  // Проверяем горизонтальные совпадения
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols - 2; col++) {
      const index = row * numCols + col;
      const color = tiles[index].style.backgroundColor;
      if (color === tiles[index + 1].style.backgroundColor && color === tiles[index + 2].style.backgroundColor) {
        matches.push(index, index + 1, index + 2);
      }
    }
  }

  // Проверяем вертикальные совпадения
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows - 2; row++) {
      const index = row * numCols + col;
      const color = tiles[index].style.backgroundColor;
      if (color === tiles[index + numCols].style.backgroundColor && color === tiles[index + 2 * numCols].style.backgroundColor) {
        matches.push(index, index + numCols, index + 2 * numCols);
      }
    }
  }

  if (matches.length > 0) {
    removeMatches(matches);
  }
}

function removeMatches(matches) {
  // Убираем совпавшие квадраты
  matches = [...new Set(matches)]; // убираем дубли
  matches.forEach(index => {
    tiles[index].style.backgroundColor = getRandomColor(); // заменяем на новый случайный цвет
  });

  // Добавляем очки
  score += matches.length / 3;
  alert(`Ваши очки: ${score}`);
}
