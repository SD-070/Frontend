// const myArr = [1, 2, 3, 4, "five", true, false, [4, 3, 2, 1], {name: "Bob"}]

const student = {
  firstName: "John",
  lastName: "Doe",
  classes: [
    { className: "Calculus", difficulty: 7, yearScores: [8, 8, 5] },
    { className: "Linguistics", difficulty: 4, yearScores: [6, 9, 8] },
  ],
};

// zero indexed
// const hobbies = ["coding", "cooking", "contemplating existence"];

// console.log(hobbies[1]);
// console.log(student.classes[1]);

// second yearScore of calculus
// console.log(student.classes[0].yearScores[1]);
// console.log(student.classes[1].difficulty);

let character = "Mario";
let secondChar = character;

character = "Luigi";
// console.log(character, secondChar);

// luigi luigi
// mario mario
// luigi mario

// reference types
const myArr = [1, 2, 3];

const mySecondArr = myArr;

myArr[2] = 5;

// console.log("myArr: ", myArr);
// console.log("mySecondArr: ", mySecondArr);

const hobbies = [, "cooking", "contemplating existence"];

// hobbies.push("playing guitar");
// console.log(hobbies.shift());

// console.log(hobbies);

const array = [1, 4, 9, 16];

// Pass a function to map
const mapped = array.map((num) => num * 2);

// console.log(mapped);

const newNums = array.filter((num) => num > 5);

// console.log(newNums);

const myNum = array.find((num) => num > 5);
// console.log(myNum);
// console.log(array.indexOf(myNum));

const bigArr = Array.from(Array(1000).keys());
// console.log(bigArr);

// console.log(bigArr.find(999)); // O(n)

// 5!

// for (let i = 0; i <= 100; i++) {
//   for (let j = 0; j <= 100; j++) {}
// }

const array1 = [1, 4, 9, 16];

console.log(array1.pop());
