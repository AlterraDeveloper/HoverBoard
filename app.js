const squareCount = 500;
const defaultColor = "#1d1d1d";
const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "pink",
  "purple",
  "cyan",
  "aquamarine",
];

const container = document.querySelector("#container");

const createSquare = () => {
  const div = document.createElement("div");
  div.classList.add("square");
  return div;
};

const getRandomColor = () => {
  return colors[Math.round(Math.random() * colors.length)];
};

for (let i = 0; i < squareCount; i++) {
  const square = createSquare();

  square.addEventListener("mouseover", (event) => {
    square.style.backgroundColor = getRandomColor();
  });

  square.addEventListener("mouseleave", (event) => {
    square.style.backgroundColor = defaultColor;
  });

  container.appendChild(square);
}
