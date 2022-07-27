let music = new Audio("music.mp3");
let turn1 = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gameend = false;
let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
let boxtext = document.getElementsByClassName("boxtext");
const checkWin = () => {
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [5, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + "won";
      gameend = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "150px";
      gameover.play();
    }
  });
};
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      turn1.play();
      checkWin();
      if (!gameend) {
        document.getElementsByClassName("info")[0].innerText =
          "turn for" + turn;
      }
    }
  });
});
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  gameend = false;
  document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
  document.getElementsByTagName("img")[0].style.width = "0";
});
