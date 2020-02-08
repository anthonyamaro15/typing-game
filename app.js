/*
   - create func to get random words/
   - display random word on the screen/
   - get the word from input
   - create variables for time and score/
   - create func for timing each second
   - add an event listener for input
   - check if random word is (randomWord === e.target.value)
*/

const timeLeft = document.querySelector(".time-left");
const score = document.querySelector(".score");
const form = document.querySelector(".form");

const word = document.querySelector(".word");
const input = document.querySelector(".input");
const gameOver = document.querySelector(".game-over");
const playAgain = document.querySelector(".play-again");
const finalScore = document.querySelector(".final-score");

let timer = 10;
let timeId = 0;
let countScore = 0;

let randomWords = [
  "name",
  "number",
  "plus",
  "description",
  "timing",
  "last",
  "javascript"
];

let wordsGenerated = generateRandomWord(randomWords);
word.textContent = wordsGenerated;

input.focus();
function generateRandomWord(word) {
  const random = Math.floor(Math.random() * word.length);
  return word[random];
}

function generateTimer() {
  let interval = setInterval(minusOne, 1000);
  timeId = interval;
}

function minusOne() {
  timer--;
  timeLeft.textContent = `time left: ${timer}`;
  if (timer === 0) {
    clearInterval(timeId);
    finalScore.textContent = `final score: ${countScore}`;
    gameOver.style.display = "flex";
  }
}

generateTimer();

form.addEventListener("submit", e => {
  e.preventDefault();
  let value = input.value;

  if (value === wordsGenerated) {
    countScore++;
    timer += 2;
    wordsGenerated = generateRandomWord(randomWords);
    word.textContent = wordsGenerated;
    score.textContent = `score: ${countScore}`;
    input.value = "";
  }
});

playAgain.addEventListener("click", () => {
  gameOver.style.display = "none";
  window.location.reload();
});
