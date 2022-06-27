'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2, // %
    pin: 1111,

    movementsDates: [
        '2019-11-18T21:31:17.178Z',
        '2019-12-23T07:42:02.383Z',
        '2020-01-28T09:15:04.904Z',
        '2020-04-01T10:17:24.185Z',
        '2020-05-08T14:11:59.604Z',
        '2020-05-27T17:01:17.194Z',
        '2020-07-11T23:36:17.929Z',
        '2020-07-12T10:51:36.790Z',
    ],
    currency: 'EUR',
    locale: 'pt-PT', // de-DE
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,

    movementsDates: [
        '2019-11-01T13:15:33.035Z',
        '2019-11-30T09:48:16.867Z',
        '2019-12-25T06:04:23.907Z',
        '2020-01-25T14:18:46.235Z',
        '2020-02-05T16:33:06.386Z',
        '2020-04-10T14:43:26.374Z',
        '2020-06-25T18:49:59.371Z',
        '2020-07-26T12:01:20.894Z',
    ],
    currency: 'USD',
    locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions
const formatMovmenetsDate = function(date, locale) {

    const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
    const daysPassed = calcDaysPassed(new Date(), date);
    console.log(daysPassed)

    if (daysPassed === 0) return 'today';
    if (daysPassed === 1) return 'yesterday';
    if (daysPassed <= 7) return `${daysPassed} days ago `;
    else {
        // const day = `${date.getDate()}`.padStart(2, 0);
        // const month = `${date.getMonth()+1}`.padStart(2, 0);
        // const year = date.getFullYear();
        // return `${day}/${month}/${year}`;

        return new Intl.DateTimeFormat(locale).format(date);

    }

}




const formatCurrency = function(value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,

    }).format(value);
}
const displayMovements = function(acc, sort = false) {
    containerMovements.innerHTML = '';
    // console.log(acc.movements)
    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const date = new Date(acc.movementsDates[i]);
        const displayDate = formatMovmenetsDate(date, acc.locale);
        const formattedMov = formatCurrency(mov, acc.locale, acc.currency);

        const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>

    <div class="movements__value">${formattedMov}</div>
      </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = formatCurrency(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function(acc) {
    const incomes = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCurrency(Math.abs(out), acc.locale, acc.currency);

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = formatCurrency(interest, acc.locale, acc.currency);;
};

const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function(acc) {
    // Display movements
    displayMovements(acc);

    // Display balance
    calcDisplayBalance(acc);

    // Display summary
    calcDisplaySummary(acc);
};


const startLOGoutTIMER = function() {

    const tick = function() {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const second = String(time % 60).padStart(2, 0);

        //in each call, print the remaining time to ui

        labelTimer.textContent = `${min}:${second}`;

        //when 0 second ,stop time  and log out user
        if (time === 0) {
            clearInterval(timer)
            labelWelcome.textContent = `login to get started`
            containerApp.style.opacity = 0;

        }

        //decrease 1second
        time--;
    };
    let time = 120;
    tick();
    const timer = setInterval(tick, 1000)
    return timer;
}

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// //fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//experminting API
const now = new Date();
const options = {
        hour: 'numeric',
        minute: 'numeric',
        day: 'numeric',
        month: 'numeric', //long
        year: 'numeric',
        weekday: 'long'
    }
    // const locale = navigator.language;
    // console.log(locale);
    // labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

btnLogin.addEventListener('click', function(e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
        containerApp.style.opacity = 100;

        //create acurrent date and time
        const now = new Date();
        const day = `${now.getDate()}`.padStart(2, 0);
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        const hour = `${now.getHours()}`.padStart(2, 0);
        const minuts = `${now.getMinutes()}`.padStart(2, 0);

        labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${minuts}`;
        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        //timer
        if (timer) clearInterval(timer)
        timer = startLOGoutTIMER();
        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
        amount > 0 &&
        receiverAcc &&
        currentAccount.balance >= amount &&
        receiverAcc.username !== currentAccount.username
    ) {
        // Doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        //transfer date
        currentAccount.movementsDates.push(new Date().toISOString());
        receiverAcc.movementsDates.push(new Date().toISOString());


        // Update UI
        updateUI(currentAccount);
        //reset timer
        clearInterval(timer);
        timer = startLOGoutTIMER();

    }
});

btnLoan.addEventListener('click', function(e) {
    e.preventDefault();

    const amount = Math.floor(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

        setTimeout(function() {

            // Add movement
            currentAccount.movements.push(amount);
            //add loan date
            currentAccount.movementsDates.push(new Date().toISOString());

            // Update UI
            updateUI(currentAccount);
            //reset timer
            clearInterval(timer);
            timer = startLOGoutTIMER();


        }, 2500);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function(e) {
    e.preventDefault();

    if (
        inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);
        // .indexOf(23)

        // Delete account
        accounts.splice(index, 1);

        // Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// console.log(23 === 23.0);
// console.log(.1 + .2)
// console.log(.1 + .2 === .3)
// console.log(Number('23'));
// console.log((+23))
// console.log(Number.parseInt('2.5px', ))
// console.log(Number.parseInt('e30', 10))
// console.log(Number.parseFloat('2.5rem'))
// console.log(Number.isNaN(20))
// console.log(Number.isNaN('20x'))
// console.log(Number.isNaN(+'20x'))
// console.log(Number.isNaN(20 / 0))
// console.log(Number.isFinite(20))
// console.log(Number.isFinite('20'))

// console.log(Number.isFinite(20 / 0))
// console.log(Number.isInteger(23 / 0));


// console.log(Math.sqrt(25));
// console.log(Math.PI * Number.parseFloat('10px') ** 2);
// console.log(Math.random() * 6);
// console.log(Math.trunc(Math.random() * 6) + 1);
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1);
// console.log(randomInt(10, 20))
// console.log(Math.trunc(23.9))
// console.log(Math.round(23.9))

// console.log(Math.ceil(23.9))
// console.log(Math.floor(23.9))


// console.log(Math.trunc(-23.9))
// console.log(Math.round(-23.9))
// console.log(Math.ceil(-23.9))
// console.log(Math.floor(-23.9))

// //rounding decimal
// console.log((2.7).toFixed(0));
// console.log((2.7).toFixed(3));
// console.log((2.7).toFixed(2));
// console.log(+(2.7).toFixed(2));



// console.log(5 % 2);
// console.log(5 / 2);

// const iseven = n => n % 2 === 0;
// console.log(iseven(8));
// console.log(iseven(23));
// console.log(iseven(514));

// labelBalance.addEventListener('click', function() {
//     [...document.querySelectorAll('.movements__row')].forEach(function(row, index) {
//         if (index % 2 === 0)
//             row.style.backgroundColor = 'orange';
//         if (index % 3 === 0)
//             row.style.backgroundColor = 'red';

//     });
// });

// //numeric seperator
// const diameter = 2876400000
// console.log(diameter);
// const pi = 3.14;
// console.log(pi)
// console.log(Number('230_000'));
// console.log(parseInt('230_000'));




// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53 + 1)
// console.log(2 ** 53 + 2)
// console.log(2 ** 53 + 3)
// console.log(2 ** 53 + 4)
// console.log(BigInt(435678))
// const huge = 2;
// const num = 23;
// console.log(BigInt(huge) * BigInt(num))


// //create a date
// const now = new Date();
// console.log(now);
// console.log(new Date(' Jun 14 2022 09:13:47'));
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future)
// console.log(future.getFullYear())
// console.log(future.getMonth())
// console.log(future.getDay())
// console.log(future.getMinutes())
// console.log(future.getHours())
// console.log(future.getSeconds())
// console.log(future.getTime())
// console.log(future.toTimeString())
// console.log(new Date(2142246180000))
// console.log(Date.now());
// future.setFullYear(2040)
// console.log(future)


// const future = new Date(2037, 10, 19, 15, 23);
// console.log(Number(future))
// console.log(+future)
// console.log(future.getTime());
// const calcDaysPassed = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcDaysPassed(new Date(2037, 2, 14), new Date(2037, 3, 24));
// console.log(days1);




// const num = 354678.23;
// const option = {
//     style: "currency",
//     unit: 'celsius',
//     currency: 'EUR',
//     //useGrouping:false;

// }
// console.log('us: ', new Intl.NumberFormat('en-us', option).format(num));
// console.log('GERMANY: ', new Intl.NumberFormat('DE-DE', option).format(num));

// console.log('EGYPT: ', new Intl.NumberFormat('AR-EG', option).format(num));
// console.log(navigator.language, new Intl.NumberFormat(navigator.language).format(num));




//setTimeout
// const ingrediants = ['olives', 'spinach']
// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`here is your pizza with ${ing1} and  ${ing2}`), 3000, ...ingrediants);
// console.log('waiting...')

// if (ingrediants.includes('spinach'))
//     clearTimeout(pizzaTimer);
// //setinterval

// setInterval(function() {
//     const now = new Date()
//     console.log(now);
// }, 3000);