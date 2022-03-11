/**
 * Reverse the order of words in a given sentence.
 */
// Time complexity: O(n)
const reverseWords = (str) => {
    return str.split(" ").reverse().join(" ");
}

const test = reverseWords("sphinx of black quartz judge my vow");
console.log(test);