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

const checkAlphanumeric = (str) => {
  return str
};

console.log(checkAlphanumeric("jamesbond@007"));
