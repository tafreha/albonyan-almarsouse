// 'use strict';
// // const person = function(firstName, birthYear) {
// //     // console.log(this);
// //     this.firstName = firstName;
// //     this.birthYear = birthYear;
// //     //never to this
// //     this.calcAge = function() {
// //         console.log(new Date().getFullYear() - this.birthYear);
// //     }
// // }
// // const jonas = new person('jonas', 1991);
// // console.log(jonas);
// // //1. new {}object is created
// // // 2. function is called, this={}
// // // 3. {} linked to prototype
// // //4. function automaticly return {}

// // const mariam = new person('mariam', 2015);
// // const malek = new person('malek', 2015);
// // console.log(mariam, malek)
// // const tafreha = "tafreha";
// // //return true or false

// // console.log(jonas instanceof person); //true
// // console.log(tafreha instanceof person); //false
// // //prototypes
// // console.log(person.prototype);
// // // person.prototype.calcAge = function() {
// // //     console.log(new Date().getFullYear() - this.birthYear);
// // // };
// // malek.calcAge();
// // jonas.calcAge();
// // console.log(jonas.__proto__);
// // console.log(jonas.__proto__ === person.prototype)
// // console.log(person.prototype.isPrototypeOf(jonas));
// // console.log(person.prototype.isPrototypeOf(person));
// // //.prototypeoflinkedobjects

// // person.prototype.species = "homo sapiens";
// // console.log(malek.species, mariam)
// // console.log(jonas.hasOwnProperty('firstName'));
// // console.log(jonas.hasOwnProperty('species'));
// // console.log(jonas.__proto__)
// // console.log(jonas.__proto__.__proto__)
// // console.log(jonas.__proto__.__proto__.__proto__)
// // console.dir(person.prototype.constructor);
// // const arr = [1, 2, 3, 4, 7, 7, 7];
// // console.log(arr.__proto__);
// // console.log(arr.prototype);
// // console.log(arr.__proto__ === Array.prototype)
// // console.log(arr.__proto__.__proto__);
// // console.log(Array.prototype)
// // Array.prototype.unique = function() {
// //     return [...new Set(this)]
// // }
// // console.log(arr.unique());

// // const h1 = document.querySelector('h1');

// // class expresion

// // const personC1=class{}
// // class declaration

// class personC1 {
//     constructor(fullName, birthYear) {
//             this.fullName = fullName;
//             this.birthYear = birthYear;
//         }
//         //method will be added to the prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }
//     greet() {
//         console.log(`hey, ${this._fullName}`)

//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
// }
// const malek = new personC1('malek abdelrhman', 2015)
// console.log(malek);
// malek.calcAge();
// console.log(malek.age);
// console.log(malek.__proto__ === personC1.prototype);
// const mariam = new personC1('mariam', 2000)

// // personC1.prototype.greet = function() {
// //     console.log(`hey, ${this.firstName}`)
// // }
// malek.greet();
// //1. class are not hoisted
// //2.class are first-class citizen
// //3.classes are excuted in strict mode

// const account = {

//     owner: 'jonas',
//     movments: [20, 600, 300, 700],
//     get latest() {
//         return this.movments.slice(-1).pop();
//     },
//     set latest(mov) {
//         this.movments.push(mov);

//     },
// };
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movments)

// const personProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };
// const steven = Object.create(personProto);
// console.log(steven);
// steven.name = 'steven';
// steven.birthYear = 1997;
// steven.calcAge();
// const sarah = Object.create(personProto);
// sarah.init('sarah', 2000);
// sarah.calcAge();
// console.log(sarah);



// const person = function(firstName, birthYear) {
//     // console.log(this);
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//     //never to this
//     person.prototype.calcAge = function() {
//         console.log(2022 - this.birthYear);
//     }
// };
// const student = function(firstName, birthYear, course) {
//     person.call(this, firstName, birthYear);
//     this.course = course;
// };
// //linking prototype
// student.prototype = Object.create(person.prototype);
// //student.prototype = person.prototype;
// student.prototype.introduce = function() {
//     console.log(`my name is ${this.firstName} and i study ${this.course}`);
// }
// const malek = new student('malek', 2015, 'computer science');
// malek.introduce();
// malek.calcAge();
// console.log(malek.__proto__)
// console.log(malek.__proto__.__proto__)
// console.log(malek.__proto__.__proto__.prototype)
// console.log(malek instanceof student);
// console.log(malek instanceof person)
// console.log(malek instanceof Object)

// student.prototype.constructor = student;
// console.dir(student.prototype.constructor)






// //inhiritance between classes, e6 classes
// class personC1 {
//     constructor(fullName, birthYear) {
//             this.fullName = fullName;
//             this.birthYear = birthYear;
//         }
//         //method will be added to the prototype property
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     }
//     greet() {
//         console.log(`hey, ${this._fullName}`)

//     }

//     get age() {
//         return 2037 - this.birthYear;
//     }
//     set fullName(name) {
//         console.log(name);
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`)
//     }
//     static hey() {
//         console.log('hey there :) ');
//     }
// }
// // personC1.hey();

// class studentCl extends personC1 {
//     constructor(fullName, birthYear, course) {
//         super(fullName, birthYear);
//         this.course = course;
//     }
//     introduce() {
//         console.log(`my name is ${this.fullName} and i study ${this.course}`)
//     }
// }
// const mariam = new studentCl('mariam abd', 2015, 'cs');
// mariam.introduce();
// mariam.calcAge();
// personC1.hey()
// mariam.greet()



// //inhiritance between object.create ,classes
// const personProto = {
//     calcAge() {
//         console.log(2037 - this.birthYear)
//     },
//     init(firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };
// const steven = Object.create(personProto);
// console.log(steven);
// const studentProto = Object.create(personProto);
// studentProto.init = function(firstName, birthYear, course) {
//     personProto.init.call(this, firstName, birthYear)
//     this.course = course;
// }
// studentProto.introduce = function() {
//     console.log(`my name is ${this.firstName} and i study ${this.course}`);
// }
// const jey = Object.create(studentProto);
// jey.init('jey', 2015, 'cs')
// jey.introduce();
// jey.calcAge();




//encapsolation

//public fields
//private fields
//public method
//private method
class account {
    //1- public fields
    locate = navigator.language;
    //2-private field
    // #movments = [];
    // pin;
    constructor(owner, currency, pin) {
            this.owner = owner;
            this.currency = currency;
            this.pin = pin;
            // this.movments = [];
            // this.locate = navigator.language;
            console.log(`thank you opening account ${owner}`);
        }
        //public interface
    getMovments() {
        return this.movments
    }
    deposit(val) {
        this.movments.push(val);
    }
    withdraw(val) {
        this.deposit(-val);
    }
    approvation(val) {
        return true;
    }
    requstion(val) {
        if (this.approvation(val)) {
            this.deposit(val);
            console.log('approved')
        }
    }
}
const acc1 = new account('jonas', 'eur', 1111);
console.log(acc1);
// acc1.movments.push(270)
// acc1.movments.push(400);
acc1.deposit(200);
acc1.withdraw(500)
acc1.requstion(1000)
acc1.approvation(1000)
console.log(acc1.getMovments())
console.log(acc1);
console.log(acc1.#movments);

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());