// 'use strict';

// // Data needed for a later exercise
// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const game = {
    team1: "bayren",
    team2: "borrusia",
    players: [
        [
            'neuer',
            'david',
            'mohamed',
            'davis',
        ],
        [
            'ahmed',
            'fathi',
            'mohsen',
        ]
    ],
    score: '3.0',
    scored: ['ahmed', 'fathi', 'david'],
    date: 'nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },


};

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//     // thu: {
//     //     open: 12,
//     //     close: 22,
//     // },
//     // fri: {
//     //     open: 11,
//     //     close: 23,
//     // },
//     // sat: {
//     //     open: 0, // Open 24 hours
//     //     close: 24,
//     // },
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[6]]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };
// // Data needed for first part of the section
// const restaurant = {
//         name: 'Classico Italiano',
//         location: 'Via Angelo Tavanti 23, Firenze, Italy',
//         categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//         starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//         mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//         order: function(starterIndex, mainIndex) {
//             return (this.starterMenu[starterIndex], this.mainMenu[mainIndex]);
//         },

//         orderDelivery: function(time = '20:00', address, mainIndex = 1, srartertIndex = 2) {
//             console.log('order received! ' + this.starterMenu[srartertIndex] + ", and " + this.mainMenu[mainIndex] + " will be delivered to  " + address + "  at  " + time);

//         },
//         openingHours: openingHours,
//         // openingHours: {
//         //     thu: {
//         //         open: 12,
//         //         close: 22,
//         //     },
//         //     fri: {
//         //         open: 11,
//         //         close: 23,
//         //     },
//         //     sat: {
//         //         open: 0, // Open 24 hours
//         //         close: 24,
//         //     },
//         // },



//         //function 
//         //     orderPasta(ing1, ing2, ing3) {
//         //         console.log("pasta" + ing1, ing2, ing3);
//         //     },
//         //     orderPizza: function(mainingrediant, ...otherIngradiant) {
//         //         console.log(mainingrediant);
//         //         console.log(otherIngradiant);

//         //     }
//         // };
//         // restaurant.orderDelivery({
//         //     mainIndex: 2,
//         //     starterIndex: 2,
//         //     time: '22:30',
//         //     address: 'mansoura',


//         // });

//         // let [main, , secondary] = restaurant.categories;
//         // console.log(main, secondary);
//         // // const temp = main;
//         // // main = secondary;
//         // // secondary = temp;
//         // // console.log(main, secondary);
//         // [main, secondary] = [secondary, main];
//         // console.log(main, secondary);
//         // const [starter, maincourse] = restaurant.order(2, 1);
//         // console.log(starter, maincourse);

//         // // const nested = [1, 2, [6, 5]];
//         // // // const [i, j] = nested;
//         // // // console.log(i, j);
//         // // const [i, , [j, k]] = nested;
//         // // console.log(i, j, k);




//         // const { name, openingHours, categories } = restaurant;
//         // console.log(name, openingHours, categories);
//         // const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
//         // console.log(restaurantName, hours, tags)
//         //     // console.log(restaurant.mainMenu)
//         // const { menu = [], starterMenu: starters = [] } = restaurant;
//         // console.log(menu, starters);
//         // let a = 111;
//         // let b = 333;
//         // const onj = { a: 3, b: 7, c: 8 };
//         // ({ a, b } = onj);
//         // console.log(a, b);
//         // //nested object
//         // const { sat: { open: o, close: c, } } = openingHours;
//         // console.log(o, c);


//         // const arr = [9, 8, 7];
//         // const badNewArr = [1, 2, arr[1], arr[2], arr[0]];
//         // console.log(badNewArr);
//         // const newArr = [1, 2, ...arr];
//         // console.log(newArr);
//         // console.log(...newArr)
//         // const newMenu = [...restaurant.mainMenu, 'gnocci'];
//         // console.log(newMenu);
//         // // join  2 array
//         // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
//         // console.log(menu);
//         // const str = "jons";
//         // const letters = [...str, "", 's.'];
//         // console.log(letters);
//         // console.log(...str);



//         // const ingredient = [prompt("let\'s make pasta ingrediant 1?"),
//         //     prompt(" ingrediant 2?"),
//         //     prompt(" ingrediant 3?")
//         // ];
//         // console.log(ingredient);
//         // restaurant.orderPasta(ingredient[0], ingredient[1], ingredient[2]);
//         // restaurant.orderPasta(...ingredient);

//         // const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'giusp' }
//         // console.log(newRestaurant);
//         // const restaurantCopy = {...restaurant };
//         // restaurantCopy.name = "roma";
//         // console.log(restaurantCopy.name);
//         // console.log(restaurant.name);


//         // const arr = [1, 2, ...[3, 4]];
//         // const [a, b, ...other] = [1, 2, , 4, 5];
//         // console.log(a, b, other);
//         // const { sat, fri, ...weekdays } = restaurant.openingHours;
//         // console.log(weekdays);
//         // //functions
//         // const add = function(...numbers) {
//         //     let sum = 0;
//         //     for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//         //     console.log(sum);
//         // }
//         // add(2, 3);
//         // add(4, 3, 5);
//         // add(3, 4, 5, 6, 7, 8, 9);
//         // const x = [23, 5, 4];
//         // add(...x);
//         // restaurant.orderPizza('a', 'b', 'd', 'r');
//         // restaurant.orderPizza("mashroum");


//         // console.log(3 || 'jona');
//         // console.log('' || 'jonas');
//         // console.log(true || 0);
//         // console.log(undefined || null);
//         // console.log(undefined || 0 || '' || null || 'hello');
//         // restaurant.numGuest = 0;
//         // const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
//         // console.log(guest1);
//         // const guest2 = restaurant.numGuest || 10;
//         // console.log(guest2);
//         // console.log('-----and-----')
//         // console.log(0 && 'jonas');
//         // console.log(6 && 'jonas');
//         // console.log(7 && 'jonas' && null && 'hello');
//         // if (restaurant.orderPizza) {
//         //     restaurant.orderPizza('mashroum', 'spinach')
//         // }
//         // restaurant.orderPizza && restaurant.orderPizza('mashroum', 'spinach')




//         // restaurant.numGuest = 0;
//         // const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
//         // console.log(guest1);
//         // const guest2 = restaurant.numGuest ?? 10;
//         // console.log(guest2);


//         // const rest1 = {
//         //     name: 'capri',
//         //     numGuest: 20,
//         // }


//         // const rest2 = {
//         //         name: 'pizza',
//         //         owner: 'tafreha',
//         //     }
//         // or assignment operator
//         // rest2.numGuest = rest1.numGuest || 10;
//         // rest2.numGuest = rest2.numGuest || 10;

//         // rest1.numGuest || = 10;
//         // rest2.numGuest || = 10;

//         // rest1.numGuest ? ? = 10;
//         // rest2.numGuest ? ? = 10;
//         // console.log(rest1);
//         // console.log(rest2)

//         // 

//         // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//         // for (const item of menu)
//         //     console.log(item);
//         // for (const [i, el] of menu.entries()) {
//         //     // console.log(item[0] + 1 + ": " + item[1]);
//         //     console.log([i + 1] + ": " + el);

//         // }

//         // console.log(...menu.entries());

//         // if ((restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

//         //     console.log(restaurant.openingHours ? mon ? .open);

//         // // PROPERITY NAMES
//         // const pro = Object.keys(openingHours)
//         // console.log(pro);
//         // let OPENSTR = "WE ARE OPEN ON" + pro.length + "DAYS: ";
//         // // for (const day of Object.keys(openingHours)) {
//         // //     console.log(day)
//         // // }

//         // for (const day of pro) {
//         //     OPENSTR += day + ", ";
//         // }
//         // console.log(OPENSTR);
//         // const value = Object.values(openingHours);
//         // console.log(value);

//         // const entris = Object.entries(openingHours)
//         // console.log(entris);


//         // //[key,value]
//         // for (const [key, { open, close }] of entris)
//         //     console.log("on " + key + ", we open at " + open + " and close at " + close)




// const orderSet = new Set(['pizza', 'pasta', 'mixgrill'])
// console.log(orderSet);
// orderSet.add('bread');
// console.log(orderSet);
// orderSet.delete("pasta");
// console.log(orderSet);


// const rest = new Map();
// rest.set('name', 'classico italiano');
// rest.set(1, 'frienze italy')
// console.log(rest.set(2, 'lisbon italy'));
// console.log(rest.get('name'));
// rest
//     .set('categories', ['italian', 'pizza', 'organic'])
//     .set('open', 11)
//     .set('close', 23)
//     .set(true, 'open')
//     .set(false, 'close')
// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2)
//     // rest.clear()
// console.log(rest)
// console.log(rest.size)
// const arr = [1, 2];
// rest.set(arr, 'test');
// console.log(rest)
// console.log(rest.get(arr));


// const question = new Map([
//     ['question', 'what is the best programming language'],
//     [1, 'c'],
//     [2, 'c'],
//     [3, 'g'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, 'try again'],
// ]);
// console.log(question);
// //convert object to map
// console.log(game.odds);
// const map = new Map(Object.entries(game.odds))
// console.log(map)





// console.log(question.get('question'));

// for (const [key, value] of question) {
//     //     if (typeof key === 'number')
//     //         console.log("answer " + key + " : " + value);
//     // }
//     // const answer = Number(prompt("your answer"));
//     // console.log(answer);
//     // console.log(question.get(question.get('correct') === answer));



//     console.log([...question]);
//     console.log(question.entries())
//     console.log(question.keys())
//     console.log(question.values())

const airline = '     tap air   portugal';
console.log(airline);
console.log(airline.replace('air ', 'mind '))
console.log(airline.trim());
console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());
console.log("a+very+nice+string".split('+'));
const [firstName, lastName] = "tafreha shaban".split(' ');
console.log('miss.' + firstName, lastName.toUpperCase());
let text = "Hello world!";
console.log(text.slice(0, 9));
console.log('mariam'.padStart(20, '+'));

// let str = "Apple, Banana, Kiwi";
// document.getElementById("demo").innerHTML = str.substring(7, 13);