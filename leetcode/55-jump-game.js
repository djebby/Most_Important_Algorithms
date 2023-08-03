// https://leetcode.com/problems/jump-game/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {

  let max = 0; // maximum index we can cover
  
  let i = 0;
  while (i <= max) {
    
    max = Math.max(max, i + nums[i]);

    i += 1;
  }

  return i >= nums.length ? true : false;

};
