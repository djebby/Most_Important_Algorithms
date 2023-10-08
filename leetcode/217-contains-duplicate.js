// https://leetcode.com/problems/contains-duplicate/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) return true;
    numSet.add(num);
  }

  return false;
};
