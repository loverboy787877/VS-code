// OLD JAVASCRIPT
// var names = ["Ed,", "John", "Mike"];
// var counter = 10;
// var counter = 5;
// console.log(counter);
// local and global variable is bad
// function sayName() {
//   var name = "Ed";
//   console.log(name);
// }
// sayName();
// function sayName() {
//   console.log("My name is Aaron James");
// }

// var sayAge = function () {
//   console.log("I am 21 years old");
// };

// sayName();
// sayAge();
// var user = {
//     name: "Andre",
//     age: 21,
//     sayName: function () {
//       console.log("My name is" + this.name);
//       var that = this;
//       var fullName = function () {
//         console.log("My name is " + that.name + " and my age is " + that.name);
//       };
//       fullName();
//     },
//   };
//   user.sayName();

// function multiply(x, y) {
//     var a = x || 1;
//     var b = y || 1;
//     console.log(a * b);
//   }
//   multiply();
// function Person(name, age, hairColor) {
//   this.name = name;
//   this.age = age;
//   this.hairColor = hairColor;
// }
// Person.prototype.sayName = function () {
//   console.log("My name is " + this.name);
// };

// function fFunction(occupation, hobbies, name, age, hairColor) {
//   Person.call(this, name, age, hairColor);
//   this.occupation = occupation;
//   this.hobbies = hobbies;
// }

// fFunction.prototype = Object.create(Person.prototype);
// const newPerson = new fFunction("Technician", "Gaming", "Gio", 21, "Black");

// console.log(newPerson);
// newPerson.sayName();

// console.log("Start");

// function getData(data, callback) {
//   setTimeout(() => {
//     console.log("Reading from the database");
//     callback({ data: data });
//   }, 2000);
// }

// getData(5, function (data) {
//   console.log(data);
// });

// console.log("Finish");

// // ES6 (variable)//////////////////////////////////////////////////////
// const list = [1, 2, 3, 4, 5];
// for (let i = 0; i < list.length; i++) {
//   console.log(i);
// }

// //backticks( string concatination)/////////////////////////////////////
// const name = "Ed";
// const age = 21;
// console.log(`My name is ${name} and my age is ${age}`);

// //object literals//////////////////////////////////////////////////////
// function getBook(title, author) {
//   return {
//     title,
//     author,
//   };
// }
// var book = getBook("Harry Potter", "JK");
// console.log(book);

// object deconstruction//////////////////////////////////////////////////
// const listing = {
//   name: "Erika Jane Cabanban",
//   age: 22,
//   items: ["Healing potion", "Dagger", "Leather Boots"],
// };

// const { name, age, items } = listing;
// console.log(name, age, items);
/////Arrow function///////////////////////////////////////////////////////
// const sayMyLocation = (location, sex) => {
//   console.log(`My location is ${location}`);
// };
// sayMyLocation("Santolan");

//this///////just add arrow function///////////////////////////////////////
// const user = {
//   name: "Evan",
//   age: 21,
//   location: "Quezon City",
//   sayName: function () {
//     console.log(`My Name is ${this.name}`);
//     sayAge = () => {
//       console.log(`My Age is ${this.age}`);
//       sayLocation = () => {
//         console.log(`My location is ${this.location}`);
//       };
//       sayLocation();
//     };
//     sayAge();
//   },
// };
// user.sayName();

//default parameter////////////////////////////////////////////////////////
// const add = (c = 1, d = 1) => {
//   console.log(c + d);
// };

// add();

//array function///////////////////////////////////////////////////////////
// const shoppingList = ["Milk", "Cow", "Eggs", "Bannas", "Choco"];

// shoppingList.forEach((value, index) => {
//   console.log(`The index is ${index} and the product is ${value}`);
// });

//map//////////////////////////////////////////////////////////////////////
// const shoppingList = ["Milk", "Cow", "Eggs", "Bannas", "Choco"];

// const newList = shoppingList.map((item) => {
//   return item + " Super8";
// });

// console.log(newList);

//filter///////////////////////////////////////////////////////////////////
// const filterList = shoppingList.filter((item) => {
//   return item === "Eggs";
// });

// console.log(filterList);

//construction function////////////////////////////////////////////////////
// class shoppingList {
//   constructor(items, nr) {
//     this.items = items;
//     this.nr = nr;
//   }
//   sayList() {
//     console.log(this.items);
//   }
// }

// const myList = new shoppingList(["Milk", "Banana", "Choco"], 3);

// class Product extends shoppingList {
//   constructor(items, nr, amount, cost) {
//     super(items, nr);
//     this.amount = amount;
//     this.cost = cost;
//   }
// }

// const product = new Product(["Redbull", "Chocolate", "Milk"], 3, 100, "Dollar");

// console.log(product);

// product.sayList();

//promises/////////////////////////////////////////////////////////////////
// const prom = new Promise((resolve, reject) => {
//   //Here is async code
//   setTimeout(() => {
//     // resolve({ user: "ed", pass: "1241q9te098cvk" });
//     reject(new Error("something went wrong."));
//   }, 2000);
// });

// prom
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err.msg);
//   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("We got the user.");
//     //resolve({ user: "Gordon" });
//     reject(new Error("User not logged in"));
//   }, 3000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//arrow functions

// function sum(a, b) {
//   return a + b;
// }

// let sum2 = (a, b) => a + b;

// function isPositive(number) {
//   return number >= 0;
// }

// let isPositive = (number) => number >= 0;

// function randomNumber() {
//   return Math.random;
// }

// let randomNumber = () => Math.random;

// document.addEventListener("click", function () {
//   console.log("click");
// });

// document.addEventListener("click", () => console.log("click"));

class Person {
  constructor(name) {
    this.name = name;
  }
  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function: " + this.name);
    }, 100);
  }
}

let person = new Person("Bob");
person.printNameArrow();
person.printNameFunction();
