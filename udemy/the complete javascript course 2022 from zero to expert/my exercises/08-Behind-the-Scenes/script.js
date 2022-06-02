// // // 'use strict';

// // // function calAge(birthYear) {
// // //     const age = 2037 - birthYear;

// // //     console.log(firstName);

// // //     function printAge() {
// // //         let output = firstName + ", you are " + age + ", born in " + birthYear;
// // //         console.log(output);
// // //         if (birthYear >= 1981 && birthYear <= 1996) {
// // //             var millanial = true;
// // //             const firstName = "mariam";
// // //             const str = "oh, and you are amillenial, " + firstName;
// // //             console.log(str);

// // //             function add(a, b) {
// // //                 return a + b;
// // //             }
// // //             const output = "new output"; 
// // //             //output = "new output"
// // //         }
// // //         // console.log(add(2, 3));
// // //         console.log(millanial);
// // //         console.log(output);
// // //     }
// // //     printAge();

// // //     return age;
// // // }
// // // const firstName = "tafreha";
// // // calAge(1991);
// // console.log(me);
// // // console.log(job);
// // // console.log(year);
// // //variables
// // var me = "tafreha";
// // let job = "engineer";
// // const year = "1991";
// // //functions
// // console.log(addDecl(2, 3));
// // //console.log(addExp(2, 3));
// // //console.log(addArrow(2, 3));


// // function addDecl(a, b) {
// //     return a + b;
// // }
// // var addExp = function(a, b) {
// //     return a + b;
// // }
// // var addArrow = (a, b) => a + b;


// // if (!numberProsuct) deleteShopinCart();
// // var numberProsuct = 10;

// // function deleteShopinCart() {
// //     console.log("all prosucts deleted");
// // }

// // var x = 0
// // let y = 9;
// // const z = 6;
// // console.log(x === window.x);
// // console.log(y === window.y);
// // console.log(z === window.z);

// //console.log(this);

// // function calcAge(birthYear) {
// //     const age = 2037 - birthYear;
// //     console.log(age);
// //     console.log(this);
// // }

// // calcAge(1991);



// // const tafreha = {
// //     year: 1991,
// //     name:"tafreha",
// //     calcAge: function() {
// //         console.log(this);
// //         console.log(2037 - this.year);
// //     }

// // }
// // tafreha.calcAge();
// // const matila = {
// //     year: 2016,

// // };
// // matila.calcAge = tafreha.calcAge;
// // matila.calcAge();

// // const f = tafreha.calcAge;
// // f();

// // var name = "matila"
// const tafreha = {
//     year: 1991,
//     name: "tafreha",
//     calcAge: function() {
//         console.log(this);
//         console.log(2037 - this.year);
//         const self = this;

//         const isMillenial = () => {
//             console.log(self.year >= 1981 && self.year <= 1996);
//             // console.log(this.year >= 1981 && this.year <= 1996);

//         };
//         isMillenial();
//     },
//     great: () => {


//         console.log("hey, " + this.name)

//     },

// };
// tafreha.great();
// tafreha.calcAge();






// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);
// const me = {
//     name: 'tafreha',
//     age: 30,
// };
// const friend = me;
// friend.age = 27;
// friend.name = "mariam";
// console.log("friend", friend);
// console.log("me:", me);

//premetive types
// let lastName = "malek";
// let oldLastName = lastName;
// lastName = "mohamed";
// console.log(lastName, oldLastName);
// //reference type
// const mariam = {
//     firstName: "mariam",
//     lastName: "MOHAMED",
//     age: 27,
// }
// //copy object
// const mayada = mariam;
// mayada.lastName = "ahmed";
// console.log("before marriage", mariam);
// console.log("after mariage", mayada);



//copy object
const mariam = {
    firstName: "mariam",
    lastName: "MOHAMED",
    age: 27,
    family: ['mrmr', 'mai'],
}
const mayada = Object.assign({}, mariam);
mayada.lastName = "ahmed";
mayada.family.push('mary');
mayada.family.push("manar");

console.log("before marriage", mariam);
console.log("after mariage", mayada);