// https://leetcode.com/problems/number-of-1-bits/ (top-interview-questions)

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while (n != 0) {
    if (n & 1) {
        count += 1;
    }
    n = Math.floor(n / 2);
  }

  return count;
};
