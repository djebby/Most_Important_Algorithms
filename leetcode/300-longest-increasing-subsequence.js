// https://leetcode.com/problems/longest-increasing-subsequence/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  // dynamic programming bottom-up approach
  const dp = new Array(nums.length).fill(1);
  for (let i = nums.length - 2; i >= 0; i -= 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], 1+dp[j]);
      }
    }
  }

  return Math.max(...dp);
};
