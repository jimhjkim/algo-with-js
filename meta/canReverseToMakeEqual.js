/**
 * Given two arrays A and B of length N, determine if there is a way to make A equal to B
 * by reversing any subarrays from array B any number of times.
 */

// Optimal solution
// Time: 0(n)
// Space: O(n)
const canReverseToMakeEqual = (target, array) => {
  if (target.length !== array.length) return false;
  const targetMap = new Map();
  const arrayMap = new Map();
  for (let i = 0; i < target.length; i++) {
    // element counter
    targetMap.set(
      target[i],
      targetMap.has(target[i]) ? targetMap.get(target[i]) + 1 : 1
    );
    arrayMap.set(
      array[i],
      arrayMap.has(array[i]) ? arrayMap.get(array[i]) + 1 : 1
    );
  }
  for (const [key, value] of targetMap) {
    if (value !== arrayMap.get(key)) return false;
  }
  return true;
};

// Naive solution
// Time complexity: O(nlogn)
// const canReverseToMakeEqual = (arrayA, arrayB) => {
//   if (arrayA.length !== arrayB.length) return false;
//   const length = arrayA.length;
//   const arrayASorted = arrayA.sort();
//   const arrayBSorted = arrayB.sort();
//   for (let i = 0; i < length; i++) {
//     if (arrayASorted[i] !== arrayBSorted[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// Tests
const test1 = canReverseToMakeEqual([1, 2, 3, 4], [1, 4, 3, 2]);
console.log(test1); // true

const test2 = canReverseToMakeEqual([1, 2, 3, 4], [1, 4, 3, 3]);
console.log(test2); // reverse
