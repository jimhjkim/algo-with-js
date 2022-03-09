/**
 * For this question we ask you to determine whether or not a string has valid parentheses. 
 * A string has valid parentheses if each bracket is closed and opened in the same order and has the same type. Parentheses has 3 types (), {} and [].
 */

// O(n) time complexity
const validParenthesis = (str) => {
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    }
    const stack = [];
    for (let char of str) {
        if (char in pairs) { // char is a closing parenthesis
            if (stack.length && stack[stack.length - 1] === pairs[char]) { // matching parenthesis exists at the top of the stack
                stack.pop();
            } else {
                return false;
            }
        } else { // char is an opening parenthesis
            stack.push(char);
        }
    }
    return stack.length ? false : true;
}

const test1 = validParenthesis('()');
console.log(test1); // true

const test2 = validParenthesis('(}');
console.log(test2); // false

const test3 = validParenthesis('{()}{}[]');
console.log(test3);