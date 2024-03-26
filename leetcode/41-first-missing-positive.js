// https://leetcode.com/problems/first-missing-positive/

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
 
  const n = nums.length;
  nums.push(n);
  for (let i = 0; i < n; i += 1) {
    if (0 < Number(nums[i]) && Number(nums[i]) <= n) {
      nums[Number(nums[i])] = String(nums[Number(nums[i])]);
    }
  }

  for (let i = 1; i <= n; i += 1) {
    if (typeof nums[i] === 'number') return i;
  }

  return n+1;
};
