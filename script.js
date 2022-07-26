"use strict";
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector(".message").textContent = "😅 No content";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "😀 Too High Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 You lose the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "🤜 Too low Number";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 You lose the game";
    }
  }
});
