'use strict';
//selecting elements 

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');



const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


let scores, currentScore, activePlayer, playing;


const init = function() {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');


    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEl.classList.add('hidden');

};
init();


const switchPlayer = function() {
        document.getElementById('current--' + activePlayer).textContent = currentScore;
        currentScore = 0;

        activePlayer = activePlayer === 0 ? 1 : 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active')
    }
    //rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (playing) {
        //generrate rundom dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // display dice
        diceEl.classList.remove('hidden');
        diceEl.src = 'dice-' + dice + '.png';
        //check for roleed 1:if true, switch to next player
        if (dice !== 1) {
            // add dice to current score
            currentScore = currentScore + dice;
            // current0EL.textContent = currentScore //CHANGE LATER

            document.getElementById('current--' + activePlayer).textContent = currentScore;


        } else {
            //switch to next player

            switchPlayer();

        }
    }


});
btnHold.addEventListener('click', function() {
    //add current score to active player score
    if (playing) {

        scores[activePlayer] += currentScore;
        // score[1]=score[1]+currentScore;
        document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
        //check if player score >=100
        if (scores[activePlayer] >= 20) {
            //finish the game
            playing = false;
            document.querySelector('.player--' + activePlayer).classList.add('player--winner');
            document.querySelector('.player--' + activePlayer).classList.remove('player--active');

        } else {

            //switch another player
            switchPlayer();
        }
    }

});
btnNew.addEventListener('click', init);



// {
//     // playing = true;
//     // document.querySelector('.player--' + activePlayer).classList.remove('player--winner');
//     // document.querySelector('.player--' + activePlayer).classList.add('player--active');
//     // score0EL.textContent = 0;
//     // score1EL.textContent = 0;
//     // current0EL.textContent = 0;
//     // current1EL.textContent = 0;
//     // diceEl.classList.add('hidden');

// 

// });