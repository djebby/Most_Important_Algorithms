// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
  let xor = 0;
  for (const num of nums) xor ^= num;

  let operationsCount = 0;
  while (xor > 0 || k > 0) {
    if ((xor & 1) ^ (k & 1)) operationsCount += 1;
    xor >>= 1;
    k >>= 1;
  }

  return operationsCount;
};
