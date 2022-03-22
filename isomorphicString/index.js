/**
 * Given two strings, determine if they are isomorphic. Two strings are "isomorphic"
 * if each unique character from the first string can be replaced to match the second
 * string, without changing the ordering of the characters.
 */
// Time complexity: O(n)
const isIsomorphic = (str1, str2) => {
  const mapping = {};
  const used = new Set();
  let i;
  if (str1.length !== str2.length) return false;
  for (i = 0; i < str1.length; i++) {
    char1 = str1[i];
    char2 = str2[i];
    if (char1 in mapping) {
      if (mapping[char1] !== char2) return false;
    } else {
      if (used.has(char2)) return false;
      mapping[char1] = char2;
      used.add(char2);
    }
  }
  return true;
};

const test1 = isIsomorphic("egg", "all"); // true
console.log(test1);
const test2 = isIsomorphic("wow", "aaa"); // false
console.log(test2);
