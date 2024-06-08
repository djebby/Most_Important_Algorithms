// https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  
  const remainders = {};
  
  let prefix = 0;
  let mod;
  for (let i = 0; i < nums.length; i += 1) {
    prefix += nums[i];
    mod = prefix % k;

    if ((mod === 0 && i > 0) || (Object.hasOwn(remainders, mod) && (i - remainders[mod] > 1))) return true;
    if (!Object.hasOwn(remainders, mod)) remainders[mod] = i;
  }

  return false;
};
