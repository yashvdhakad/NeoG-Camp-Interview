// 1. Write a program to input 2 numbers and display the sum of the numbers to the console.

// const sum = (a, b) => {
//   return `Sum: ${a + b}`;
// };

// console.log(sum(20, 40));

// ----------------------------------------------------------------------------

// 2. Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// const simpleInterest = (p, t, r) => {
//   return (p * t * r) / 100;
// };

// console.log(simpleInterest(100, 6, 2));

// ----------------------------------------------------------------------------

// 3. Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'. Formula : 0.5 * m * v * v

// const kE = (m, v) => {
//   return 0.5 * m * v * v;
// };

// console.log(kE(10, 20));

// ----------------------------------------------------------------------------

// 4. Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// const convertFtoC = (f) => {
//   return ((f - 32) * 5) / 9;
// };

// console.log(convertFtoC(56));

// ----------------------------------------------------------------------------

// 5. Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula : Area: a*a | Perimeter: 4*a | Surface Area: 6*a*a | Volume: a*a*a

// const calculate = (a) => {
//   return `Area: ${a * a}, Perimeter: ${4 * a}, Surface Area: ${6 * a * a}, Volume: ${Math.pow(a, 3)}`;
// };

// console.log(calculate(10));

// ----------------------------------------------------------------------------

// 6. Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// const calculateProfitAndLoss = (cp, sp) => {
//   if (cp > sp) {
//     return `${cp - sp} Loss`;
//   } else if (cp < sp) {
//     return `${sp - cp} Profit`;
//   } else {
//     return `no gain no pain no pain no gain`;
//   }
// };

// console.log(calculateProfitAndLoss(3125, 1125))

// ----------------------------------------------------------------------------

// 7. Write a program to calculate sum of N natural digits, as input by the users.

// const sumOfN = (n) => {
//   return [...Array(n + 1).keys()].slice(1).reduce((a, b) => {
//     return a + b;
//   });
// };

// console.log(sumOfN(3));

// ----------------------------------------------------------------------------
