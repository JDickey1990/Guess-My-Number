'use strict';

const checkButton = document.querySelector('.check');
const number = Math.trunc(Math.random()*20)+1
console.log(number);

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number was entered!⛔';
  }
});
