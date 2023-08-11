// https://leetcode.com/problems/climbing-stairs/ (top-interview-questions)

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let one = 1, two = 0;

  while (n > 0) {
    const temp = one;
    one = one + two;
    two = temp;

    n -= 1;
  }

  return one;
};
