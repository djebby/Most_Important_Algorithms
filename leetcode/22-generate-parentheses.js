// https://leetcode.com/problems/generate-parentheses/ (top-interview-questions)

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const combinations = [];
  const parentheses = [];

  const backtracking = (opened, closed) => {
    if ( opened === closed && opened === n ) {
      combinations.push(parentheses.join(''));
      return;
    }

    if (opened < n) {
      parentheses.push('(');
      backtracking(opened + 1, closed);
      parentheses.pop();
    }
    if (closed < opened) {
      parentheses.push(')');
      backtracking(opened, closed+1);
      parentheses.pop();
    }
  }

  backtracking(0, 0);
  
  return combinations;
};

const result = generateParenthesis(8);
console.log(result);