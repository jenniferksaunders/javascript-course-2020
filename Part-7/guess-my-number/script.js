'use strict';

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function generateGuess() {
  return Math.trunc(Math.random() * 20 + 1);
}

let secret_number = generateGuess();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // if user enters a number outside the allowed range or nothing
  if (guess > 20 || guess < 1) {
    displayMessage('Enter a number between 1 and 20');
  }

  // if user is out of guesses then do nothing
  else if (score === 0) {
  }

  // if guess is correct then display congrats
  else if (guess === secret_number) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }

    // if guess is too high or low then let them know
  } else if (guess !== secret_number) {
    displayMessage(`Too ${guess > secret_number ? 'High' : 'Low'}!`);
    score--;
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      displayMessage('You lose!');
      document.querySelector('body').style.backgroundColor = '#f00';
    }
  }
});

// reset button
document.querySelector('.again').addEventListener('click', function () {
  secret_number = generateGuess();
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
