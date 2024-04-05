// https://leetcode.com/problems/make-the-string-great/

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [];
  for (let c of s) {
    if (
      stack.length > 0 
      && stack[stack.length - 1] !== c
      && (stack[stack.length - 1].toUpperCase() === c || stack[stack.length - 1].toLowerCase() === c)
    ) {
      stack.pop();
    }
    else stack.push(c);
  }

  return stack.join('');
};
