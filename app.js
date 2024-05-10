const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
const msgContainer = document.querySelector(".msg-container");
const resetBtn = document.querySelector(".rst");
const newBtn = document.querySelector(".new");

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turn0 = true;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "X";
      box.style.color = "red";
      turn0 = false;
    } else {
      box.innerText = "0";
      box.style.color = "blue";
      turn0 = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (patten of winPatterns) {
    let pos1Val = boxes[patten[0]].innerText;
    let pos2Val = boxes[patten[1]].innerText;
    let pos3Val = boxes[patten[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

const showWinner = (pos1Val) => {
  msg.innerText = `Congratulation! winner is ${pos1Val}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const resetGame = () => {
  enableBoxes();
  turn0 = true;
  msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
