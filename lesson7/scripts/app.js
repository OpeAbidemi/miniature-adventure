// // // ARRAYS
// // const countries = ["Nigeria", "Brazil", "England"];

// // countries[1] = "Cuba";

// // // countries[3] = "Jamaica";
// // const newLength = countries.push("Jamiaca", "China", "Ukraine"); // adds to the back

// // const popedItem = countries.pop(); // removes from the back

// // const removed = countries.shift(); // removes from the front

// // const newLen = countries.unshift("Morocco", "Tanzania"); // adds to the front

// // const points = [0.4, 1.3, 5.6, 6.7, 1.3, 6.5, 5.3];

// // console.log(points.indexOf(1.3, 2)); // 4
// // console.log(points.lastIndexOf(1.3, 5)); // -1
// // console.log(points.sort());
// // console.log(points.sort().reverse());

// // console.log(countries.concat(points));

// // // indexOf
// // // lastIndexOf
// // // sort
// // // reverse
// // // forEach - functions
// // // map - functions
// // // concat
// // // filter - functions
// // //

// // Multi-Dimensional Arrays

// const matrix = [
//   [3, 1, 0],
//   [2, 1, 3],
//   [4, 1, 2],
// ];

// const D3 = [
//   [
//     [3, 1, 0],
//     [4, 6, 9],
//     [5, 2, 0],
//   ],
//   [
//     [13, 2, 4],
//     [23, 10, 9],
//     [3, 2, 7],
//   ],
// ];

// // console.log(matrix[0][0]);
// // console.log(matrix[2][2]);
// // console.log(matrix.flat());

// // console.log(D3.flat());

const scores = [
  10, 20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, 80, 90, 10,
  20, 30, 40, 50, 60, 70, 80, 90, 10, 20, 30, 40, 50, 60, 70, 80, 90,
];

let i = 0;
let sum = 0;

while (i < scores.length) {
  sum += scores[i];
  i++;
}

console.log(sum);
