// 1. Given an array, your function should return the length of the array.
// Example: Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// const arrayLength = (arr) => {
//   return arr.length;
// };

// console.log(arrayLength([1, 5, 3, 7, 8]));

// -------------------------------------------------------------------

// 2. Given an array and an item, your function should return the index at which the item is present.
// Example: Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// const indexOf = (arr, i) => {
//   return arr.indexOf(3, 0);
// };

// console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

// -------------------------------------------------------------------

// 3. Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example: Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// const replace = (arr, n1, n2) => {
//   arr.map((e, i) => {
//     if (e === n1) {
//       return arr.splice(i, 1, n2);
//     } else {
//       return "Number is not in the array";
//     }
//   });
//   console.log(arr);
// };

// replace([1, 5, 3, 5, 6, 8], 5, 10);

// -------------------------------------------------------------------

// 4. Given two arrays, your function should return single merged array.
// Example: Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

// const mergeArray = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

// console.log(mergeArray([1, 3, 5], [2, 4, 6]));

// -------------------------------------------------------------------

// 5. Given a string and an index, your function should return the character present at that index in the string.
// Example: Input: charAt("neoGcamp", 4) ––> Output: c

// const charAt = (str, i) => {
//   return str.charAt(i);
// };

// console.log(charAt("neoGcamp", 4));

// -------------------------------------------------------------------

// 6. Given two dates, your function should return which one comes before the other.
// Example: Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const minDate = (str1, str2) => {
//   const [month1, day1, year1] = str1.split("/");
//   const [month2, day2, year2] = str2.split("/");
//   const date1 = new Date(+year1, month1 - 1, +day1);
//   const date2 = new Date(+year2, month2 - 1, +day2);
//   // console.log(date1, date2);
//   if (date1.getTime() > date2.getTime()) {
//     console.log(`${str1} < ${str2}`);
//   } else {
//     console.log(`${str2} < ${str1}`);
//   }
// };

// minDate("03/17/2001", "07/30/2001");