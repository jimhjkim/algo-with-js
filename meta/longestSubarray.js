/**
 * Given an array, find the length of the longest subarray which has no repeating numbers.
 */

// sliding window pattern
const longestUniqueSubarray = (arr) => {
    const n = arr.length;
    let longest = 0;
    let l = r = 0; // left and right pointers
    const window = new Set();
    while (r < n) {
        if (!window.has(arr[r])) {
            window.add(arr[r]);
            r++;
        } else { // duplicate logic
            window.delete(arr[l]);
            l++;
        }
        longest = Math.max(longest, r - l);
    }
    return longest;
}

const arr1 = [1, 2, 3, 3, 4, 5];
const test1 = longestUniqueSubarray(arr1);
console.log(test1);

const arr2 = [1, 2, 3, 4, 5];
const test2 = longestUniqueSubarray(arr2);
console.log(test2);

const arr3 = [1, 1, 1, 1, 1];
const test3 = longestUniqueSubarray(arr3);
console.log(test3);

const arr4 = [1, 2, 2, 3, 4, 5];
const test4 = longestUniqueSubarray(arr4);
console.log(test4);

