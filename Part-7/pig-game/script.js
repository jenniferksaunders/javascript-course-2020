'use strict';

// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// starting condtions
let roll, scores, currentPlayer, current_score, state;
resetGame();

function generateRoll() {
  roll = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${roll}.png`;
  return roll;
}

function swapPlayer() {
  addScore();
  current_score = 0;
  current0El.textContent = current_score;
  current1El.textContent = current_score;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function addScore() {
  scores[currentPlayer] += current_score;
  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[currentPlayer];
}

function playerWins() {
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.add('player--winner');
  addScore();
  diceEl.classList.add('hidden');
  state = 0;
}

function resetGame() {
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add('hidden');
  currentPlayer = 0;
  current_score = 0;
  current0El.textContent = current_score;
  current1El.textContent = current_score;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  scores = [0, 0];
  state = 1;
}

// if user rolls the die
btnRoll.addEventListener('click', function () {
  if (state === 1) {
    diceEl.classList.remove('hidden'); //FIXME so that I show only once

    generateRoll();

    //if user hits 100 points then they win
    if (current_score >= 100) {
      playerWins();
    }

    //if user rolls a 1 then switch player, otherwise add roll to current score
    else if (roll === 1) {
      swapPlayer();
    } else {
      current_score += roll;
      document.getElementById(`current--${currentPlayer}`).textContent =
        current_score;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (state === 1) {
    addScore();
    if (scores[currentPlayer] < 100) {
      swapPlayer();
    } else {
      playerWins();
    }
  }
});

btnNew.addEventListener('click', resetGame);
