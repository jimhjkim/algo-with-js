// time complexity: O(n)
const countSubarrays = (arr) => { 
    // const startTime = performance.now();
    const len = arr.length;
    const res = arr.map(a => 1);
    let stack = [-1]; // store indices of arr to compare against current.
    let i;

    // fron left
    for (i = 0; i < len; i++) {
        while (stack.length > 1 && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }
        res[i] += i - stack[stack.length - 1] - 1;
        stack.push(i);
        console.log(i, res, stack);
    }
    // from right
    stack = [len];
    for (i = len - 1; i >= 0; i--) {
        while (stack.length > 1 && arr[stack[stack.length - 1]] < arr[i]) {
            stack.pop();
        }
        res[i] += stack[stack.length - 1] - i - 1;
        stack.push(i);
        console.log(i, res, stack);
    }
    // const endTime = performance.now();
    // console.log(`{endTime - startTime} milliseconds`);
    return res;
}

// Time complexity: O(n^2)
// const countSubarrays = (arr) => {
//     const length = arr.length;
//     const counter = arr.map(a => 0);
//     for (let idx = 0; idx < length; idx++) {
//         counter[idx]++;
//         if (idx === 0) continue;   
//         let pointer = idx - 1;
//         while (pointer >= 0 && pointer < length && arr[idx] > arr[pointer]) {
//             counter[idx]++;
//             pointer--;
//         }
//         pointer = idx + 1;
//         while (pointer >= 0 && pointer < length && arr[idx] > arr[pointer]) {
//             counter[idx]++;
//             pointer++;
//         }
//     }
//     return counter;
// }

// tests
const test1 = [3, 4, 1, 6, 2];
const expected1 = [1, 3, 1, 5, 1];
const output1 = countSubarrays(test1);
console.log(expected1, output1);

// const test2 = [2, 4, 7, 1, 5, 3];
// const expected2 = [1, 2, 6, 1, 3, 1];
// const output2 = countSubarrays(test2);
// console.log(expected2, output2);