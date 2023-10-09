// # https://leetcode.com/problems/basic-calculator-ii/ (top-interview-questions)

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = [];
  let num = 0;
  let lastOp = '+';

  for (let i = 0; i < s.length; i += 1) {
    if (/\d/.test(s.charAt(i))) {
      num = num * 10 + Number(s.charAt(i));
    }
    
    if (/[+\-*/]/.test(s.charAt(i)) || i === s.length - 1) {
      if (lastOp === '+') {
        stack.push(num);
      } else if (lastOp === '-') {
        stack.push(-num);
      } else if (lastOp === '*') {
        stack[stack.length - 1] *= num;
      } else {
        stack[stack.length - 1] = Math.trunc(stack[stack.length - 1] / num);
      }
      num = 0;
      lastOp = s.charAt(i);
    }

  }

  return stack.reduce((acc, val) => (acc + val));
};
