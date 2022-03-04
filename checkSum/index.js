/**
 * Given an array of integers and a value, determine if there are
 * any three integers in the array whose sum equals the given value.
 */
const findSumOfTwo = (nums, val, start) => {
  let i, j;
  for (i = start, j = nums.length - 1; i < j; ) {
    let sum = nums[i] + nums[j];
    if (sum === val) {
      return true;
    }
    if (sum < val) {
      i++;
    } else {
      j--;
    }
  }
  return false;
};

const findSumOfThree = (nums, val) => {
  let i, j;
  nums.sort();
  for (i = 0; i < nums.length - 2; i++) {
    let remainingSum = val - nums[i];
    if (findSumOfTwo(nums, remainingSum, i + 1)) {
      return true;
    }
  }
  return false;
  // return nums.sort((a, b) => a - b);
};

const nums = [3, 7, 1, 2, 8, 4, 5];
// const test = findSumOfTwo(nums, 20, 0);
const test = findSumOfThree(nums, 21, 0);
console.log(test);

// checkSum(test, 21);
