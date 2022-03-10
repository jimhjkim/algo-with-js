/**
 * Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value.
 * Return true if the sum exists, and false if it does not.
 */
const checkIfSumExists = (nums, sum) => {
    const comp = new Set(); // store complements
    let num;
    for (num of nums) {
        if (comp.has(num)) {
            return true;
        }
        comp.add(sum - num);
    }
    return false;
}

const test1 = checkIfSumExists([5, 7, 1, 2, 8, 4, 3], 10);
console.log(test1); // true

const test2 = checkIfSumExists([5, 7, 1, 2, 8, 4, 3], 19);
console.log(test2); // false

const test3 = checkIfSumExists([1, 2, 3, 9], 8);
console.log(test3); // false

const test4 = checkIfSumExists([1, 2, 4, 4], 8);
console.log(test4); // true

