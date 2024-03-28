// https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
  let maxLength = 0;
  const window = {}; // subarray elements frequencies

  let j = 0;
  for(let i = 0; i < nums.length; i += 1) {
    window[nums[i]] = (window[nums[i]] || 0) + 1;
    while (window[nums[i]] > k && j <= i) window[nums[j++]] -= 1;
    maxLength = Math.max(maxLength, (i - j + 1));
  }

  return maxLength;
};
