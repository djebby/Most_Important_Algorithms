// https://leetcode.com/problems/majority-element/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let element;
  let counter = 0;
  for (const num of nums) {
    if (counter === 0) element = num;
    counter += (element === num ? 1 : -1);
  }

  return element;
};
