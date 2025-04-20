const gridContainer = document.querySelector(".grid-container");
const inputSize = document.querySelector(".inputSize");
const btnSize = document.querySelector("#btnSize");
const btnRandom = document.querySelector("#btnRandom");
const btnGrey = document.querySelector("#btnGrey");

function createGrid(size) {
  const cellSize = 400 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = `${cellSize}px`;
    div.style.height = `${cellSize}px`;
    gridContainer.appendChild(div);
  }
}

function resetGrid() {
  gridContainer.innerHTML = "";
}

function divColorBlue() {
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      e.target.style.background = "blue";
    });
  });
}

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function divColor() {
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
      e.target.style.background = rndCol;
    });
  });
}

function divGrey() {
  const divs = document.querySelectorAll(".square");
  divs.forEach((div) => {
    div.addEventListener("mouseover", function (e) {
      if (this.style.backgroundColor.includes("rgba")) {
        // Extract the alpha (opacity) value from rgba string
        const match = this.style.backgroundColor.match(
          /rgba\(\d+,\s*\d+,\s*\d+,\s*([\d.]+)\)/
        );
        if (match) {
          let currentOpacity = parseFloat(match[1]);
          if (currentOpacity <= 0.8) {
            this.style.backgroundColor = `rgba(0, 0, 0, ${
              currentOpacity + 0.1
            })`;
            this.classList.add("gray");
          }
        }
      } else if (
        this.classList.contains("gray") &&
        this.style.backgroundColor === "rgba(0, 0, 0, 1)"
      ) {
        return;
      } else {
        this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      }
    });
  });
}

btnSize.addEventListener("click", function (e) {
  resetGrid();
  createGrid(inputSize.value);
  divColorBlue();
});

btnRandom.addEventListener("click", function (e) {
  resetGrid();
  createGrid(inputSize.value);
  divColor();
});

btnGrey.addEventListener("click", function (e) {
  resetGrid();
  createGrid(inputSize.value);
  divGrey();
});

createGrid(inputSize.value);
divColorBlue();
