// 1. Write a program that converts the string into uppercase
// 2. Write a program that reads two strings and append first string to the second. So if first string is Good second string is Morning , the program should print MorningGood
// 3. Program that reads string and count number of characters present in the string

// const strFunction = (str1, str2) => {
//     return `String: ${str2.toUpperCase().concat(str1.toUpperCase())}, Length: ${str2.toUpperCase().concat(str1.toUpperCase()).length}`
// };

// console.log(strFunction("good", "morning"))

// ------------------------------------------------------------------------

// 4. Write a program that converts string like "124" to 124

// const strToNum = (str) => {
//   return Number.parseInt(str);
// };

// console.log(strToNum("52"))

// ------------------------------------------------------------------------

// 5. Write a program to delete all vowels from a string. Assume string is not more than 80 characters long

// const deleteVowels = (str) => {
//   return str
//     .split("")
//     .map((e) => {
//       return e === "a" || e === "e" || e === "i" || e === "o" || e === "u"
//         ? e.replace(e, "")
//         : e;
//     })
//     .reduce((a, b) => {
//       return a + b;
//     });
// };

// console.log(deleteVowels("apple"));

// ------------------------------------------------------------------------

// 6. Write a program to check whether the string is alphanumeric or not , eg:batman@45 contains digit 45

// const checkAlphanumeric = (str) => {
//   //   let arr = [...Array(10).keys()];

//   return str
//     .split("")
//     .filter((e) => {
//       return (
//         e === "0" ||
//         e === "1" ||
//         e === "2" ||
//         e === "3" ||
//         e === "4" ||
//         e === "5" ||
//         e === "6" ||
//         e === "7" ||
//         e === "8" ||
//         e === "9"
//       );
//     })
//     .reduce((a, b) => {
//       return a + b;
//     });
// };

// console.log(checkAlphanumeric("jamesbond@18516118"));

// ------------------------------------------------------------------------

// 7. A program that reads three strings and prints the longest and smallest one

// const checkStr = (...strs) => {
//   let sortedArr = [...strs].sort((a, b) => {
//     return a.length - b.length;
//   });
//   return `${sortedArr[0]}, ${sortedArr[sortedArr.length - 1]}`;
// };

// console.log(
//   checkStr(
//     "abcusdbc",
//     "sucb",
//     "sacnsucbbcuscbuasc",
//     "csuc",
//     "sc",
//     "ascnsucbnsuycbsdysdbcysdbcyd"
//   )
// );

// ------------------------------------------------------------------------

// 8. A program that counts number of vowels and consonants in a String

// const countVC = (str) => {
//   let v = [];
//   let c = [];
//   let arr = str.split("").map((e) => {
//     return e === "a" || e === "e" || e === "i" || e === "o" || e === "u"
//       ? v.push(e)
//       : c.push(e);
//   })
//   return `Vowels: ${v.length}, Consonants: ${c.length}`
// };

// console.log(countVC("xasimxasxosaaomcisc"));

// ------------------------------------------------------------------------

// 9. Write a program which receives a string str that calculates the length of a string and return true if the length is greater than 7

// const countStr = (str) => {
//   let isGreaterThan7;
//   return str.length > 7 ? (isGreaterThan7 = true) : (isGreaterThan7 = false);
// };

// console.log(countStr("csdds"));

// ------------------------------------------------------------------------

// 10. Write a program that takes two strings and copies smaller string into bigger string

// const copyStr = (...strs) => {
//   let sortedArr = [...strs].sort((a, b) => {
//     return b.length - a.length;
//   });
//   return sortedArr[0].concat(sortedArr[sortedArr.length - 1])
// };

// console.log(copyStr("uv", "an"));

// ------------------------------------------------------------------------

// 11. Given a string, determine if it is a palindrome, considering only alphanumeric characters

// const checkPalindrome = (str) => {
//   let arr = str.split("");
//   let reversedArr = arr.reverse().reduce((a, b) => {
//     return a + b;
//   });
//   if (str === reversedArr) {
//     return `Palindrome`
//   } else {
//     return `Not a Palindrome`
//   }
// };

// console.log(checkPalindrome("ana"));

// ------------------------------------------------------------------------

// 12. For a given input string(str), write a function to print all the possible substrings.Without using substr method

// const checkSubStr = (str) => {
//   let ac = str.split("").map((e, i) => {
//     return str.substring(0, i + 1);
//   });
//   let dc = str.split("").map((e, i) => {
//     return str.substring(i);
//   });
//   return ac.concat(dc);
// };

// console.log(checkSubStr("apple"));

// ------------------------------------------------------------------------

// 13. Write a program that removes the time from the given date string "Wed April 15, 7pm". It should return only the date without the time.

// const removeTime = (str) => {
//   return str.split(",")[0]
// };

// console.log(removeTime("Wed April 15, 7pm"));

// ------------------------------------------------------------------------

// 14. Write a program that masks all but last four characters of the string "5565534276455423" to '#'

// const removeAndReplace = (str, n) => {
//   let arr = str.split("");
//   arr.splice(str.length - n, str.length, "#", "#", "#", "#");
//   return arr.join("");
// };

// console.log(removeAndReplace("5565534276455423", 4));

// ------------------------------------------------------------------------

// 15. Given a string "tic tac toe is a fun game" convert the first 6 characters to capital case

// const convertToCapital = (str) => {
//   let arr = str.split("");
//   let arr1 = arr
//     .slice(0, 6 + 1)
//     .join("")
//     .toUpperCase();
//   let arr2 = arr.slice(7).join("");
//   return arr1.concat(arr2);
// };

// console.log(convertToCapital("tic tac toe is a fun game"));