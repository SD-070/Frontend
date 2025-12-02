// this is the name of the user
// const userName = `Bob`;
// let age = 20; // this is the age of the user

// const function = 10

// age = 21;

let val1 = 20;
// let Val1 = 20;

let val2 = 50;
// console.log(val1 * val2);

const myExpression = 10 + 10 + 100 - (90 / 2) * 10;
// console.log(myExpression);

const someName = "";

// console.log(someVar);
// var someVar = 10;
// let someOtherVar = 20;

const trueOrFalse = false;

// Data types:
// String
// Number
// Boolean

//function
function sayMyName() {
  console.log("Hey, My name is Bob");
}

const sayMyNameArrow = () => console.log("Hey, My name is Bob");

// sayMyNameArrow();

function greet(name, dayOfTime) {
  console.log(`Hey, ${name} how is it going this ${dayOfTime}`);
}

// sayMyName();
// greet("Johannes", 7);

function someFunc() {
  let myName = "John";
  pokemon = "some other pokemon";
}
let pokemon = "pikachu";

myName = "Bob";

// console.log(myName);

function sum(num1, num2) {
  return num1 + num2;
}

// console.log(sum(89, 78));

// Object
const pirate = {
  name: "Jack Sparrow",
  age: 30,
  isDead: false,
  catchPhrase: function () {
    //method
    return "This is the day you will always remember as the day you almost caught Captain Jack Sparrow";
  },
};

// pirate.catchPhrase();

// console.log(pirate.catchPhrase());

// console.log(3 === "3");
// console.log(3 >= 4);

// conditionals

let userName = "Bob";

// if (userName === "Zeinab") {
//   console.log("This is Zeinab");
// } else if (userName === "Bob") {
//   console.log("this is bob");
// } else {
//   console.log("Nope, don't know that name");
// }

// other falsy values are null, undefined, empty string and 0
// if ("") {
//   console.log("yep");
// } else {
//   console.log("nope");
// }

// const expr = "Oranges";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// ternary operators
let age = 17;
let isAdult = age >= 18 ? "I am an adult" : "I am NOT an adult";

console.log(isAdult);

for (let i = 5; i <= 10; i++) {
  console.log(i);
}

let currentTemperature = 16; // starting temperature in Celsius
const targetTemperature = 22; // target temperature in Celsius

while (currentTemperature < targetTemperature) {
  console.log(`Current temperature is ${currentTemperature}�C - Heating up...`);
  currentTemperature++; // simulate the heating process increasing the temperature
}
