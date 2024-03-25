// https://leetcode.com/problems/find-all-duplicates-in-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  const duplicates = [];

    for (let i = 0; i < nums.length; i += 1) {
      const absNum = Math.abs(nums[i]);
      if (nums[absNum-1] < 0) duplicates.push(absNum);
      nums[absNum-1] *= -1;
    }

  return duplicates;
};
