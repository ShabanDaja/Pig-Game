'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Implementing the logic game

const rollHandler = function () {
  const randomNum = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `./images/dice-${randomNum}.png`;

  if (randomNum !== 1) {
    currentScore += randomNum;
    currentScore0El.textContent = currentScore;
  } else {
  }
};

btnRoll.addEventListener('click', rollHandler);
