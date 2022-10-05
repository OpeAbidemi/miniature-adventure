// // Tenary
// let age = parseInt(prompt("Enter age"));

// // condition ? truth : false

// // age < 18 ? console.log("You're young") : console.log("You're qualified");

// // Decision Making

// // if - statement
// // if else
// // if else if
// // nested if
// // switch-case

// // Fira Code

// if (age < 18) {
//   console.log("You're young");
// } else {
//   console.log("You're qualified");
// }

// if (age >= 18 && age <= 50) {
//   console.log("You're within the range");
// }

// let score = 45;

// if (score >= 70) {
//   console.log("Grade is A");
// } else if (score >= 60) {
//   console.log("Grade is B");
// } else if (score >= 50) {
//   console.log("Grade is C");
// } else {
//   console.log("You failed");
// }

// if (true) {
//   if (true) {
//     console.log("ran succesfully");
//   }
// }

let num = parseInt(prompt("Enter a number 0 - 7"));

switch (num) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid date");
}
