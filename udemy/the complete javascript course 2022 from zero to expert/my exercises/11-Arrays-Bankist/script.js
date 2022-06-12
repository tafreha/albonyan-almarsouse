'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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
const displayMovment = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal'
        const html = `
<div class="movements__row">
  <div class="movements__type movements__type--${type}">${i+1}${type}</div>
  <div class="movements__value">${mov}</div>
</div>

`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

// displayMovment(account1.movements);

const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1.movements);



const calcDisplaySummery = function(acc) {

        const incomes = acc.movements
            .filter(mov => mov > 0)
            .reduce((acc, mov) => acc + mov, 0);
        labelSumIn.textContent = `${incomes}€`;


        const out = acc.movements
            .filter(mov => mov < 0)
            .reduce((acc, mov) => acc + mov, 0);
        labelSumOut.textContent = `${Math.abs(out)} €`;

        const interest = acc.movements
            .filter(mov => mov > 0)
            .map(deposit => (deposit * acc.interestRate) / 100)
            .filter((int, i, arr) => {
                // console.log(arr);
                return int >= 1;
            })
            .reduce((acc, int) => acc + int, 0);
        labelSumInterest.textContent = `${interest}€`;
    }
    // calcDisplaySummery(account1.movements)


// const user = 'steven thomas williams';
const createUserName = function(accs) {
    accs.forEach(function(acc) {

        acc.userName = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });

};
const updateUI = function() {
    //DISPLAY MOVMENTS
    displayMovment(currentAccount.movements);
    //DISPLAY balance
    calcDisplayBalance(currentAccount)
        //DISPLAY SUMMENRY
    calcDisplaySummery(currentAccount)
};

createUserName(accounts);
console.log(accounts);
// event handler
let currentAccount;
btnLogin.addEventListener('click', function(e) {
    //prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
    if (currentAccount.pin === Number(inputLoginPin.value)) {
        console.log(currentAccount.pin);

        //DISPLAY UI AND MESSAGE
        labelWelcome.textContent = `welcome back ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;
        //clear input field
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();
        updateUI(currentAccount);
    }
});



btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(acc => acc.userName === inputTransferTo.value);
    console.log(amount, receiverAcc);
    inputTransferAmount.value = inputTransferTo.value = '';
    if (amount > 0 && currentAccount.balance >= amount && receiverAcc.userName !== currentAccount.userName) {
        //doing transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        updateUI(currentAccount);
        console.log(currentAccount)


    }
});

btnLoan.addEventListener('click', function(e) {
    e.preventDefault()
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
        //add movment
        currentAccount.movements.push(amount);
        // update ui
        updateUI(currentAccount);

    }
    inputLoanAmount.value = '';
})
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    // console.log('delete');
    if (inputCloseUsername.value === currentAccount.userName &&
        Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.userName == currentAccount.userName);
        console.log(index);
        //delete account
        accounts.splice(index, 1);
        //hide ui
        containerApp.style.opacity = 0;
        inputCloseUsername.value = inputClosePin.value = '';

    }

});
let sorted = false;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovment(currentAccount.movements, !sorted);
    sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr1 = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['h', 'i', 'l', 'm', 'n']
let arr = [100, 200, 300, 400, 500, 600];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log([...arr]);
// console.log(...arr);
// console.log(arr.splice(2))
// console.log(arr.splice(1, 2));
// console.log(arr.splice(1, 4));
// console.log(arr.reverse());
// console.log(arr.concat(arr2))
// console.log([...arr].join('_'));
// console.log(arr.at(0));
// console.log(arr[0]);
// console.log(arr.length - 1);
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('jonas'.at(0));
// -------------------------
// //for (const mov of arr)
// for (const [i, mov] of arr.entries()) {
//     if (mov > 100) {
//         console.log(`movement ${i+1} your deposited ${mov}`);

//     } else {
//         console.log(`your withdrew ${Math.abs(mov)}`);
//     }
// }
// console.log("_____________foreach______")

// arr.forEach(function(mov, i, arr) {

//     if (mov > 0) {
//         console.log(`movement ${i+1} your deposited ${mov}`);

//     } else {
//         console.log(`movement ${i+1} your withdrew ${Math.abs(mov)}`);
//     }
// });

// const eurToUsed = 1.1;
// const movmentsUSD = movements.map(function(mov) {

//     return mov * eurToUsed;
// });

// const movmentsUSD1 = movements.map(
//     mov => mov * eurToUsed
// );


// console.log([...movements]);
// console.log([...movmentsUSD]);
// console.log(` arrow map: ${movmentsUSD}`);



// const movmentsUSDfor = [];
// for (const mov of movements) movmentsUSDfor.push(mov * eurToUsed);
// console.log(movmentsUSDfor);


// movements.forEach(function(mov, i) {
//     movmentsUSDfor.push(mov * eurToUsed)
//     console.log(movmentsUSDfor);

// });


// const movementsDescriptions =
//     // movements.map((mov, i, array) => {
//     //     if (mov > 0) {
//     //         return `movment${i+1}: you deposited ${mov}`;
//     //     } else {
//     //         return `movment ${i+1}: withdraw ${Math.abs(mov)}`;
//     //     }


//     // });

//     movements.map((mov, i, array) => ` movment ${i+1}: you  ${mov>0? 'deposited' : 'withdrawals'} ${Math.abs(mov)}`

//     );
// console.log(movementsDescriptions);



// const deposit = movements.filter(function(mov) {
//     return mov > 0

// })
// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals)
// console.log(movements);
// console.log(deposit);
// const depositFor = []
// const withdraw = []
// for (const mov of movements)
//     if (mov > 0) depositFor.push(mov);
//     else withdraw.push(mov);
// console.log(depositFor);
// console.log(withdraw);
// console.log(movements);
// const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`iteration ${i}: ${acc}`)
//     return acc + cur
// }, 0)
// console.log(balance)


// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2)


// let balance3 = 0;
// const balance3reduce = movements.forEach(function(mov, i) {
//     balance3 += mov;

// })
// console.log(balance3);


// const balance1 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance1)
//     // maximum value
// const max = movements.reduce((acc, mov) => {
//     if (acc > mov)
//         return acc;
//     else
//         return mov;


// }, movements[0]);
// console.log(max);

// const eurToUsed = 1.1;

// const toDepositsUSD = movements
//     .filter(mov => mov > 0)
//     // .map(mov => mov * eurToUsed)
//     .map((mov, i, arr) => {
//         // console.log(arr)
//         return mov * eurToUsed

//     })
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(toDepositsUSD);

// const firstwithdrawal = movements.find(mov => mov < 0)
// console.log(movements);
// console.log(firstwithdrawal);
// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jonas Schmedtmann');
// console.log(account);



// console.log(movements);
// console.log(movements.includes(-130));
// console.log(movements.some(mov => mov === -130));

// // const anyDeposit = movements.some(mov => mov > 1500);
// // console.log(anyDeposit)


// // //every
// // console.log(movements.every(mov => mov > 0));
// // const deposit = mov => mov < 0;
// // console.log(movements.some(deposit));
// // console.log(movements.every(deposit));
// // console.log(movements.filter(deposit));

// const m = [
//     [1, 2, 3],
//     [4, 5, 6], 7, 8
// ];
// console.log(m.flat());
// const r = [
//     [
//         [1, 2], 3
//     ],
//     [4, [5, 6]], 7, 8
// ];
// console.log(r.flat(2));





// const accountmovments = accounts.map(acc => acc.movements);
// console.log(accountmovments);
// const alMovments = accountmovments.flat()
// console.log(alMovments);
// // const overalbalance = alMovments.reduce((acc, mov) => acc + mov, 0)
// // console.log(overalbalance);
// //flat
// const overalbalance = accounts
//     .map(acc => acc.movements)
//     .flat()
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overalbalance);
// // flatmap
// const overalbalance2 = accounts
//     .flatMap(acc => acc.movements)
//     .reduce((acc, mov) => acc + mov, 0);
// console.log(overalbalance2);

// const owners = ['jonas', 'adam', 'zineb', 'mariam']
// console.log(owners);

// console.log(owners.sort());
// //numbers
// console.log(movements)
// console.log(movements.sort());
// // return<0,a,b
// // return>0,b,a


// //ascending
// movements.sort((a, b) => {
//     if (a > b)
//         return 1;
//     else if (a < b)
//         return -1;
// });
// // movements.sort((a, b) => a - b);

// console.log(movements);
// //desciending
// movements.sort((a, b) => b - a);
// console.log(movements)



// //
// console.log([1, 2, 3, 4, 5, 6, 7]);
// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// const x = new Array(7);
// console.log(x);
// console.log(x.map(() => 5));
// x.fill(1, 3, 5);
// console.log(x);

// arr.fill(27, 4, 6);
// console.log(arr);
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1)
// console.log(z);
// const movmentsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movmentsUI);



// labelBalance.addEventListener('click', function() {
//     const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Nmber(el.textContent.replace('€', '')));

//     console.log(movementsUI)
//     movementsUI2 = [...document.querySelectorAll('.movments_value')];
// });



// ARRAY METHOD PRACTICE
//1
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositSum)
    //2.


const numdeposit1000 = accounts.flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0)
console.log(numdeposit1000);

//prefix ++ operator
let a = 10
console.log(++a)
console.log(a)

//3.
const { deposits, witdrawals } = accounts
    .flatMap(acc => acc.movements)
    .reduce((sums, cur) => {
            // cur > 0 ? sums.deposits += cur : sums.witdrawals += cur;
            sums[cur > 0 ? 'deposits' : 'witdrawals'] += cur;
            return sums;

        },

        { deposits: 0, witdrawals: 0 });
console.log(deposits, witdrawals);

//4.
//this is a nice title => This Is  a Nice Title
const convertTitleCase = function(title) {
    const capitalize = str => str[0].toUpperCase() + str.slice(1);
    const exceptions = ['a', 'an', 'with', 'the', 'that', 'but', 'or']
    const titleCase = title.toLowerCase().split('        ').map(word => exceptions.includes(word) ? word : capitalize(word)).join(' ');
    return titleCase;

}
console.log(convertTitleCase('this is a nice title'))
console.log(convertTitleCase('this is a LONG nice title BUT NOT too long'));

console.log(convertTitleCase('and here is another title BUT NOT too long'))