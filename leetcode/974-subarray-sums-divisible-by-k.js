// https://leetcode.com/problems/subarray-sums-divisible-by-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  
  let answer = 0;
  
  const mods = {0: 1};
  let sum = 0;
  let remainder;
  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];
    remainder = ((sum % k) + k) % k;
    if (Object.hasOwn(mods, remainder)) answer += mods[remainder];
    mods[remainder] = (mods[remainder] || 0) + 1;
    
  }

  return answer;
};
