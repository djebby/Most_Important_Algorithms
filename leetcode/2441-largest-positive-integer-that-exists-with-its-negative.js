// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  const positiveSet = new Set();
  const negativeSet = new Set();

  let max = -1;
  for (const num of nums) {
    if (num > 0) {
      if (negativeSet.has(-num)) max = Math.max(num, max);
      positiveSet.add(num);
    } else {
      if (positiveSet.has(-num)) max = Math.max(-num, max);
      negativeSet.add(num);
    }
    
  }

  return max;
};
