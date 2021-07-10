'use strict';

const checkButton = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber
}

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

const displayBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color
}

const numberDisplaySize = function (size) {
  document.querySelector('.number').style.width = size
}

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('No number was entered!⛔');

    // When a player wins
  } else if (guess === secretNumber) {
    displayMessage(` 🙌 Correct Number!`);
    displaySecretNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    displayBackgroundColor('#60b347');
    numberDisplaySize('30rem');

    // When a guess is too high or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? `Your guess is Too High! 📈 `: `Your guess is Too Low! 📉 `);
      score--;
      displayScore(score);

      // When a player loses the game
    } else {
      displayMessage( `💣 You lost the game!`);
      score--;
      displayScore(score);
    }
  }
});

const againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage(`Start guessing...`);
  displayScore(score);
  displaySecretNumber(`?`);
  displayBackgroundColor('#222');
  numberDisplaySize('15rem');

  document.querySelector('.guess').value = '';
});
