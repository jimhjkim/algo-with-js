/**
 * Given a list of strings, return a lsit of string lists that groups all anagrams together. Two strings are anagrams if rearranging one string results in another. For the purpose of this question, a string is an anagram of itself.
 * Each group of anagrams should be in alphabetical order. The output should be in alphabetical order by the first elements of each group of anagrams.
 *
 * Constraints
 * Each word in the input consists of lowercase English letters, and they might not be unique.
 */
const groupAnagrams = (strs) => {
  // two strings are anagrams if the sorted veresions result in the same string.
  // in an object, store key (sorted string) and value (array of strings that are anagrams).
  // time complexity = O(n*mlog(m)), n=number of strings, m=max size of each string
  const anagramMap = {};
  let str;
  for (str of strs) {
    const anagramId = str.split("").sort().join("");
    if (anagramId in anagramMap) {
      anagramMap[anagramId].push(str);
    } else {
      anagramMap[anagramId] = [str];
    }
  }
  return Object.values(anagramMap);
};

// Test
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(strs)); // [["ate", "eat", "tea"], ["bat"], ["nat", "tan"]]
