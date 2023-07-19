// https://leetcode.com/problems/valid-parentheses/ (top-interview-questions)

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const closerParentheses = {')': '(', ']': '[', '}': '{'};
  const openedParentheses = []; // stack

  for (const char of s) {
    if (char in closerParentheses) {
      if (openedParentheses.length > 0 && closerParentheses[char] === openedParentheses[openedParentheses.length - 1]) {
        openedParentheses.pop();
      } else {
        return false;
      }
    } else {
      openedParentheses.push(char);
    }
  }

  return openedParentheses.length === 0;
};