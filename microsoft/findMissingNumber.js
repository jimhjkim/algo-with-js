/**
 * Given an array of positive numbers ranging from 1 to n, 
 * such that all numbers from 1 to n are present except one number x, find x. 
 * Assume the input array is unsorted.
 */

// sum of all n elements = n * (n + 1) / 2
// Time complexity: O(n)
// Space complexity: O(1)
const findMissingNumber = (nums) => {
    const n = nums.length + 1;
    let total = Math.floor(n * (n + 1) / 2);
    for (let num of nums) {
        total -= num;
    }
    return total;

}

const test = findMissingNumber([3, 7, 1, 2, 8, 4, 5]);
console.log(test);

