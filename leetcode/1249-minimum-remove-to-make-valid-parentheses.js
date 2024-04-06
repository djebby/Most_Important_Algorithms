// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  s = s.split('');
  const stack = []; // stack of invalid parentheses with their indicies...
  for (let i = 0; i < s.length; i += 1) {
    if (stack.length > 0 && s[i] === ')' && stack[stack.length - 1].parenthese === '(') {
      stack.pop();
    } else if (s[i] === '(' || s[i] === ')') {
      stack.push({parenthese: s[i], index: i});
    }
  }

  for(const { index } of stack) {
    s[index] = null;
  }

  return s.join('');
};

