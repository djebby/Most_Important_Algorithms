// https://leetcode.com/problems/subarray-product-less-than-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  let result = 0;
  let window = 1;
  let j = 0;
  
  for (let i = 0; i < nums.length; i += 1) {
    window *= nums[i];
    while (j <= i && window >= k) window /= nums[j++];
    result += (i - j + 1);
  }

  return result;
};
