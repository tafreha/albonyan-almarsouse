'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnOpenModel = document.querySelectorAll('.show-modal');

const openmodal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModel = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

console.log(btnOpenModel);
for (let i = 0; i < btnOpenModel.length; i++) {
    btnOpenModel[i].addEventListener('click', openmodal);
}

btnCloseModel.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);
//active esc button in keypoard
document.addEventListener('keydown', function(e) {
        console.log(e.key);
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModel();



        }
    }


);