// https://leetcode.com/problems/power-of-three/ (top-interview-questions)

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 1 || Math.floor(n) !== n) return false;
  if (n === 1) return true;
  return isPowerOfThree(n/3);
};

var isPowerOfThreeWithoutRecursion = function(n) {
  // maximum possible power of three value (3^19 = 1.162261467×10⁹)
  // (3^20 = 3.486784401×10⁹) and the maximum possible value of n is just (2^31 - 1 = 2.147483647×10⁹)
  const maxPowerOfThree = Math.pow(3, 19);
  // check if n is positive and is a devider of the max possible poser of three
  return n > 0 && (maxPowerOfThree % n === 0);
}
