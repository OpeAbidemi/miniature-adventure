// // Assignment

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

// // Step 1
// function checkWordsThatStartsWith(letter) {
//   // this stores all the found words
//   const foundWords = [];

//   // loop thru the array
//   for (let i = 0; i < cities.length; i++) {
//     const currentWord = cities[i];

//     // checking if the current word starts with the letter
//     if (currentWord.startsWith(letter)) {
//       foundWords.push(currentWord);
//     }
//   }

//   // return the words found
//   return foundWords;
// }

// // const response = checkWordsThatStartsWith("N");
// // console.log(response);

// // Step 2
// function checkWordsThatStartsWith2(letter) {
//   return cities.filter((city) => {
//     return city.startsWith(letter);
//   });
// }

// const response = checkWordsThatStartsWith2("L");
// console.log(response);

// Classes

// const person1 = {
//   name: "James Bond",
//   age: 24,
//   eat() {
//     console.log("Eating");
//   },
// };

// const person2 = {
//   name: "John Bond",
//   age: 34,
//   eat() {
//     console.log("Eating");
//   },
// };

// class Person {
//   name = "Leo";
//   age = 0;

//   eat() {
//     console.log("Eating");
//   }

//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const person1 = new Person("Ella", 45);
// const person2 = new Person("Eve Bond", 34);
// const person3 = new Person("James Bond", 32);

// console.log(person1);
// console.log(person2);
// console.log(person3.eat());
