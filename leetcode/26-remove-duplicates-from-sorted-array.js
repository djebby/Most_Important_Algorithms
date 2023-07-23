// https://leetcode.com/problems/remove-duplicates-from-sorted-array/ (top-interview-questions)



/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    nums[i] = nums[j];
    while (nums[i] === nums[j] && j < nums.length) j += 1;
    i += 1;
  }

  return i;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {

  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i-1] < nums[j]) {
      nums[i] = nums[j];
      i += 1;
    }
  }

  return i;

};