// https://leetcode.com/problems/powx-n/ (top-interview-questions)

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if (n < 0) {
    x = 1 / x;
  }
  
  const helper = (x, n) => {
    if (n === 0) return 1;
    let res = myPow(x, Math.trunc(n/2));
    res *= res;
    return (n % 2) === 0 ? res : res * x;
  }

  return helper(x, Math.abs(n));
};
