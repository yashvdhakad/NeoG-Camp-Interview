// 1. Given a and b, your function should return the value of a**b
// Example: Input: power(2,3) ––> Output: 8

// const power = (a, b) => {
//   return Math.pow(a, b);
// };

// console.log(power(2, 3));

// -----------------------------------------------------------------------

// 2. Given length of a regular hexagon, your function should return area of the hexagon.
// Example: Input: areaOfHexagon(10) ––> Output: 259.80

// const areaOfHexagon = (a) => {
//   return (3 * Math.sqrt(3) * Math.pow(a, 2)) / 2;
// };

// console.log(areaOfHexagon(10));

// -----------------------------------------------------------------------

// 3. Given a sentence, your functions should return the number of words in the sentence.
// Example: Input: noOfWords(We are neoGrammers) ––> Output: 3

// const noOfWords = (a) => {
//   return a.split(" ").length;
// };

// console.log(noOfWords("We are neoGrammers"));

// -----------------------------------------------------------------------

// 4. Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example: Input: findMin(3,5) ––> Output: 3, Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

// const findMin = (...abc) => {
//   console.log(Math.min(...abc));
// };

// findMin(3, 5, 9, 1);

// -----------------------------------------------------------------------

// 5. Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example: Input: findMax(3,5) ––> Output: 5, Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

// const findMax = (...abc) => {
//   console.log(Math.max(...abc));
// };

// findMax(3, 5, 9, 1);

// -----------------------------------------------------------------------

// 6. Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.
// Example: Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

// const typeOfTriangle = (a, b, c) => {
//   if (a === b && b === c && c === a) {
//     console.log("Equilateral Triangle");
//   } else if (a === b || b === c || c === a) {
//     console.log("Isosceles Triangle");
//   } else {
//     console.log("Scalene Triangle");
//   }
// };

// typeOfTriangle(60, 60, 50);sss
