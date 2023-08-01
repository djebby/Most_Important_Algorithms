// https://leetcode.com/problems/maximum-subarray/ (top-interview-questions)


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  
  let maxSum = Number.MIN_SAFE_INTEGER;
  let curSum = 0;

  for (const num of nums) {
    if (curSum < 0) curSum = num;
    else curSum += num;

    maxSum = Math.max(maxSum, curSum);
  }

  return maxSum;
};