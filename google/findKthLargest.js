/**
 * Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order,
 * not necessarily the kth distinct element.
 */

// TODO: Optimal solution

// Naive solution (O(nlogn))
const findKthLargest = (nums, k) => {
  const sorted = nums.sort((a, b) => b - a);
  return sorted[k - 1];
};

const test1 = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log(test1); // 5

const test2 = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
console.log(test2); // 4
