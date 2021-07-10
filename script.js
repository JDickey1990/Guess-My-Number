'use strict';

const checkButton = document.querySelector('.check');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.number').textContent = secretNumber;

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

// When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number was entered!⛔';

// When a player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ` 🙌 Correct Number!`;
    document.querySelector('body').style.backgroundColor = "#60b347";
    document.querySelector('.number').style.width = '30rem';

    // When a guess is too high 
  } else if (guess > secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = `Your guess is Too High! 📈 `;
      score--;
      document.querySelector('.score').textContent = score;
    }else {
      document.querySelector(".message").textContent = `You lost the game!`;
      score--;
      document.querySelector('.score').textContent = score;
    }  
    // When a guess is too low
  }else if (guess < secretNumber) {
    if(score > 1){
      document.querySelector('.message').textContent = `Your guess is Too Low! 📉 `;
    score--;
    document.querySelector('.score').textContent = score;
    }else {
      document.querySelector(".message").textContent = `💣 You lost the game!`;
      score--;
      document.querySelector('.score').textContent = score;
    }  
   
  }
    
});
