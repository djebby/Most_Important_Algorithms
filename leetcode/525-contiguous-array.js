// https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] == 0) nums[i] = -1;
  }

  const prefixes = {0:-1};

  let prefix = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i += 1) {
    prefix += nums[i];

    if (Object.hasOwn(prefixes, prefix)) {
      maxLength = Math.max(maxLength, (i - prefixes[prefix]));
    } else {
      prefixes[prefix] = i;
    }

  }

  return maxLength;
};
