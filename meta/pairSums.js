/**
 * Given a list of n integers arr[0..(n-1)], determine the number of different pairs of elements within it which sum to k.
 * If an integer appears in the list multiple times, each copy is considered to be different; that is, two pairs are considered 
 * different if one pair includes at least one array index which the other doesn't, even if they include the same values.
 */

// time: O(n) + space: O(n)
const numberOfWays = (arr, k) => {
    const m = new Map();
    let count = 0;
    for (let num of arr) {
        if (m.has(k - num)) { // complement exists
            count += m.get(k - num);
        }
        if (m.has(num)) { // store counts of elements
            m.set(num, m.get(num) + 1);
        } else {
            m.set(num, 1);
        }
    }
    return count;
}

// naive approach
// time: O(n^2) + space: O(1)
// const numberOfWays = (arr, k) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === k) {
//                 count ++;
//             }
//         }
//     }
//     return count;
// }

const arr1 = [1, 2, 3, 4, 3];
const sum1 = 6;
const test1 = numberOfWays(arr1, sum1);
console.log(test1);

const arr2 = [1, 5, 3, 3, 3];
const sum2 = 6;
const test2 = numberOfWays(arr2, sum2);
console.log(test2);