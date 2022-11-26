// 1. Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz". Your output should look something like this: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

// const arr = [...Array(100 + 1).keys()].slice(1);

// arr.map((e, i) => {
//   if (e % 3 === 0 && e % 5 === 0) {
//     arr.splice(i, 1, "FizzBuzz");
//   } else if (e % 3 === 0) {
//     arr.splice(i, 1, "Fizz");
//   } else if (e % 5 === 0) {
//     arr.splice(i, 1, "Buzz");
//   }
// });

// // console.log(...arr);
// console.log(arr);

// -----------------------------------------------------------------

// 2. Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *

// let str = "";
// for (i = 0; i < 5; i++) {
//   for (j = 0; j <= i; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);

// -----------------------------------------------------------------

// 3. Write a program to take a number input from user and print multiplication table 12 times for that number.

// const tableFunction = (num, times) => {
//   const arr = [...Array(times + 1).keys()].slice(1);
//   for (key of arr) {
//     console.log(num * key);
//   }
// };

// tableFunction(5, 10);

// -----------------------------------------------------------------

// 4. Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// const fibonacciFunction = (n) => {
//   const phi = 1.618034;
//   const arr = [...Array(n).keys()];
//   for (key of arr) {
//     let fN = (phi ** key - (1 - phi) ** key) / Math.sqrt(5);
//     console.log(Math.round(fN));
//     // return Math.round(fN);
//   }
// };

// fibonacciFunction(100);
// console.log(fibonacciFunction(100));

// -----------------------------------------------------------------

// 5. Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// const factorialFunction = (n) => {
//   let fN = 1;
//   for (i = 1; i <= n; i++) {
//     fN *= i;
//   }
//   console.log(fN);
// };

// factorialFunction(10);

// -----------------------------------------------------------------

// 6. Write a Program to take a number input from user and find if the number is Prime or not.

// const checkPrimeNumber = (n) => {
//   let isPrime = true;
//   if (n === 1) {
//     console.log("1 is neither prime nor composite number");
//   } else if (n > 1) {
//     for (i = 2; i < n; i++) {
//       if (n % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("Prime Number");
//     } else {
//       console.log("Not prime number");
//     }
//   } else {
//     console.log("Not a prime number");
//   }
// };

// checkPrimeNumber(17);

// -----------------------------------------------------------------

// 7. Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

// const checkDay = () => {
//   let day = prompt("Enter day here:");
//   switch (day) {
//     case "monday":
//       console.log("This is a weekday bro.");
//       break;
//     case "tuesday":
//       console.log("This is weekday bro.");
//       break;
//     case "wednesday":
//       console.log("This is weekday bro.");
//       break;
//     case "thurday":
//       console.log("This is weekday bro.");
//       break;
//     case "friday":
//       console.log("This is weekday bro.");
//       break;
//     case "saturday":
//       console.log("This is weekend bro.");
//       break;
//     case "sunday":
//       console.log("This is weekend bro.");
//       break;

//     default:
//       console.log("This is not a day bro.");
//       break;
//   }
// };

// console.log(checkDay());
