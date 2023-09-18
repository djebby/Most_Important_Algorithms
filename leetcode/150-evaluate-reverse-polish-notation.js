// https://leetcode.com/problems/evaluate-reverse-polish-notation/ (top-interview-questions)

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const stack = [];

  const operations = {
    '+': (a, b) => (a + b),
    '-': (a, b) => (a - b),
    '*': (a, b) => (a * b),
    '/': (a, b) => (Math.trunc(a / b))
  }

  let a;
  let b;

  for (const token of tokens) {
    if (operations.hasOwnProperty(token)) {
      b = stack.pop();
      a = stack.pop();
      stack.push(operations[token](a, b));
    } else {
      stack.push(Number(token));
    }
  }

  return stack.pop();
};
