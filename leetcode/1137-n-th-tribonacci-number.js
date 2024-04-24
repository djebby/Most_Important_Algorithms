// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const values = [0, 1, 1];
  if (n < 3) return values[n];

  n -= 2;

  while (n > 0) {
    values.push(values[values.length - 1] + values[values.length - 2] + values[values.length - 3]);
    n -= 1;
  }

  return values[values.length - 1];
};
