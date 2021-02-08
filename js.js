const squares = document.getElementsByClassName("square");
let turn = 0;
const winningCombinations = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  0,
  3,
  6,
  1,
  4,
  7,
  2,
  5,
  8,
  0,
  4,
  8,
  2,
  4,
  6,
];

function doSomething(e) {
  let value = e.path[0].innerText;

  if (value === "") {
    if (turn % 2) {
      e.path[0].innerText = "O";
      e.srcElement.style.color = "black";
      turn++;
      checkWin("O");
    } else {
      e.path[0].innerText = "X";
      e.srcElement.style.color = "red";
      turn++;
      checkWin("X");
    }
  }

  if (turn === 9) {
    setTimeout(function () {
      alert("Cats game!");
      reset();
    }, 200);
  }
}

function reset() {
  location.reload();
}

const checkWin = (player) => {
  let i = 0;

  while (i <= 21) {
    if (
      squares[winningCombinations[i]].innerText === player &&
      squares[winningCombinations[i + 1]].innerText === player &&
      squares[winningCombinations[i + 2]].innerText === player
    ) {
      setTimeout(function () {
        alert(player + " Has Won!!");
        reset();
      }, 200);
      return true;
    } else {
      i = i + 3;
    }
  }
};

for (let i = 0; i <= 8; i++) {
  squares[i].addEventListener("click", doSomething);
}
