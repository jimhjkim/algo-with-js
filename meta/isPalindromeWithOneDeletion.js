/**
 * Check if string S is a palindrome if we can delete at most one character.
 */

// helpers
const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// main
// time: O(n) + space: O(1)
const isPalindromeWithOneDeletion = (str) => {
  if (!str.length) return false;
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str.charAt(left) === str.charAt(right)) {
      left++;
      right--;
    } else {
      if (
        isPalindrome(str, left + 1, right) ||
        isPalindrome(str, left, right - 1)
      ) {
        return true;
      }
      return false;
    }
  }
  return true;
};

// tests
const test1 = isPalindromeWithOneDeletion("dr.awkward");
console.log(test1); // true

const test2 = isPalindromeWithOneDeletion("dr..awkward");
console.log(test2); // false

const test3 = isPalindromeWithOneDeletion("");
console.log(test3); // false
