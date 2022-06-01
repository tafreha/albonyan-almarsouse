'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "correct number!";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/
// const x = function() {
//     console.log(23);
// }

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    //when the player is no input
    if (!guess) {
        //document.querySelector('.message').textContent = "no number!";

        displayMessage("no number!");

        //when the player wins 
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = "correct number!";
        displayMessage("correct number!");
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? "too high !" : "too low !";
            displayMessage(guess > secretNumber ? "too high !" : "too low !");
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = "you lost the game !";
            displayMessage("you lost the game !");
            document.querySelector('.score').textContent = 0;

        }
    }
    // when guess is to high
    // else if (guess > secretNumber) {

    //     //when guss is to low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = "too low !";
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = "you lost the game !";
    //         document.querySelector('.score').textContent = 0;

    //     }
    // }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...!";
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';


});