// 1. Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places.
// Example: Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// const encodeString = (str, n) => {
//   var result = "";
//   var charcode = 0;

//   for (var i = 0; i < str.length; i++) {
//     charcode = str[i].charCodeAt() + n;
//     result += String.fromCharCode(charcode);
//   }
//   return result;
// };

// console.log(encodeString("neogcamp", 2));

// -----------------------------------------------------------------

// 2. Given a sentence, return a sentence with first letter of all words as capital.
// Example: Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// const toSentenceCase = (str) => {
//   let newStr = str.split(" ").map((e) => {
//     return e[0].toUpperCase().concat(e).replace(e[0], "");
//   });
//   console.log(newStr.toString().replaceAll(","," "));
// };

// toSentenceCase("hello vscode i am writing my first successful advance js program. congrats me bro!");

// -----------------------------------------------------------------

// 3. Given an array of numbers, your function should return an array in the ascending order.
// Example: Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// const sortArray = (arr) => {
//   return arr.sort((a, b) => {
//     return a - b;
//   });
// };

// console.log(sortArray([100, 83, 32, 9, 45, 61]));

// -----------------------------------------------------------------

// 4. Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example: Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

// const reverseCharactersOfWord = (str) => {
//   let newStr = str.split(" ").map((e) => {
//     return e.split("").reverse().toString().replaceAll(",", "");
//   });
//   console.log(newStr.toString().replaceAll(",", " "));
// };

// reverseCharactersOfWord("we are neoGrammers");
