// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let starting = -1;
  let ending = -1;

  let l = 0;
  let m;
  let r = nums.length - 1;

  while (l<=r) {
    m = l + Math.floor((r-l) / 2);
    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      starting = m;
      r = m - 1;
    }
  }

  l = 0;
  r = nums.length - 1;
  while (l<=r) {
    m = l + Math.floor((r-l) / 2);
    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      ending = m;
      l = m + 1;
    }
  }

  return [starting, ending];
};



searchRange([5,7,7,8,8,10], 8);