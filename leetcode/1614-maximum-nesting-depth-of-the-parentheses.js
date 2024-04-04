// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let _maxDepth = 0;
  let depth = 0;
  for (let c of s) {
    if (c === '(') depth += 1;
    else if (c === ')') depth -= 1;
    _maxDepth = Math.max(_maxDepth, depth);
  }

  return _maxDepth;
};
