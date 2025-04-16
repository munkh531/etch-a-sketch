function createGrid() {}
const gridContainer = document.querySelector(".grid-container");

let size = 8;
const cellSize = 400 / size;

for (let i = 0; i < size * size; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  div.style.width = `${cellSize}px`;
  div.style.height = `${cellSize}px`;
  gridContainer.appendChild(div);
}

const divs = document.querySelectorAll(".square");

divs.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    e.target.style.background = "blue";
  });
});
