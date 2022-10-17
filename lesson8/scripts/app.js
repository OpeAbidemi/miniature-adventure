// // Correction

// const cities = [
//   "Buenos Aries",
//   "London",
//   "Istanbul",
//   "Amsterdam",
//   "Hong Kong",
//   "Hiroshima",
//   "Oslo",
//   "Tokyo",
//   "Nagazaki",
//   "Seoul",
//   "Berlin",
//   "New Orleans",
//   "California",
//   "Addis Ababa",
//   "Abuja",
//   "Abeokuta",
//   "Cairo",
//   "Stockholm",
//   "Manila",
//   "Beijing",
//   "New Delhi",
//   "Mumbai",
// ];

// // Solution 1

// let sumOfChars = 0;

// for (let i = 0; i < cities.length; i++) {
//   sumOfChars += cities[i].length;
// }

// console.log(sumOfChars);

// // Solution 2

// console.log(cities.join("").length);

// Functions

// function add(a, b) {
//   console.log(a + b);
// }

// add(340, 50);
// // add(40, 20);

// function greet(name, lastName) {
//   console.log("Hello Mr " + lastName);
// }

// greet("James", "Bond");

// function getLength(arr) {
//   console.log(arr.length);
// }

// getLength([1, 2, 3, 4, 7, 9]);
// getLength(["James", "Lond", "Jimmy"]);

// // Traditional
// function sub(a, b) {
//   console.log(a - b);
// }

// // Arrow Functions
// const subtract = (a, b) => {
//   console.log(a - b);
// };

// sub(6, 6.2); // -0.2
// subtract(4, 2); // 2

// function checkAge(age) {
//   if (age >= 18) {
//     return "You're eligible to vote";
//   } else {
//     return "You can't vote yet. It's not for children";
//   }
// }

// const response = checkAge(40);

// console.log(response);

const names = ["Ben", "Andrew", "Claus", "Elijah", "Marcelo", "Hope"];

function checkIfNameExists(name) {
  return names.includes(name);
}

const response = checkIfNameExists("Ben");

console.log(response);
