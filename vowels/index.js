// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Solution #2
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

// Solution #1
// function vowels(str) {
//   let counter = 0;
//   const checker = ["a", "e", "i", "o", "u"];
//   for (let char of str.toLowerCase()) {
//     if (checker.indexOf(char) > -1) {
//       counter++;
//     }
//   }
//   return counter;
// }

module.exports = vowels;
