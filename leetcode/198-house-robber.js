// https://leetcode.com/problems/house-robber/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

  let hOne = 0;
  let hTwo = 0;

  let maxAmount;
  for (const num of nums) {
    maxAmount = Math.max(hOne+num, hTwo);
    hOne = hTwo;
    hTwo = maxAmount;
  }

  return hTwo;
};
