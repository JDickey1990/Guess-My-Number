'use strict';

const checkButton = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;



checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

// When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number was entered!⛔';

// When a player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ` 🙌 Correct Number!`;
    document.querySelector('.number').textContent = secretNumber;
    if(score > highScore){
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
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

const againButton = document.querySelector(".again");
againButton.addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = "#222";
  document.querySelector('.number').style.width = '15rem';
})