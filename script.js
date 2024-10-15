const container = document.querySelector(".container");
const btn = document.querySelector(".black");
const btnGrid = document.querySelector(".new");
const btnRgb = document.querySelector(".rgb");

btnGrid.addEventListener("click", () => {
  let rowsNumber = parseInt(prompt("Enter rows number between 1 and 100"));
  while (
    rowsNumber == 0 ||
    rowsNumber < 0 ||
    rowsNumber > 100 ||
    Number.isNaN(rowsNumber)
  ) {
    rowsNumber = parseInt(prompt("Enter Valid rows number!!!!"));
  }

  rowsAndColumns(rowsNumber);
});

function rowsAndColumns(rowsNumber) {
  container.innerHTML = "";
  const squareSize = 100 / rowsNumber;

  for (let i = 1; i <= rowsNumber * rowsNumber; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.flexBasis = `${squareSize}%`;
    btn.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
    });
    btnRgb.addEventListener("click", () => {
      square.addEventListener("mouseover", () => {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        square.style.backgroundColor = color;
      });
    });

    container.appendChild(square);
  }
}
