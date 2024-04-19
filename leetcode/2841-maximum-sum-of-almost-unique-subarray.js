// https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/

/**
 * @param {number[]} nums
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, m, k) {
  let maxSumSub = 0;
  let subCharFreqs = new Map();
  let currSumSub = 0;

  for (let i = 0; i < nums.length; i += 1) {
    currSumSub += nums[i];
    if (!subCharFreqs.has(nums[i])) subCharFreqs.set(nums[i], 0);

    subCharFreqs.set(nums[i], subCharFreqs.get(nums[i]) + 1);
    
    if (i >= k) {
      currSumSub -= nums[i-k];
      subCharFreqs.set(nums[i-k], subCharFreqs.get(nums[i-k]) - 1);
      if (subCharFreqs.get(nums[i-k]) === 0) subCharFreqs.delete(nums[i-k]);
    }

    // evaluation 
    if (subCharFreqs.size >= m) {
      maxSumSub = Math.max(maxSumSub, currSumSub);
    }
  }

  return maxSumSub;
};
