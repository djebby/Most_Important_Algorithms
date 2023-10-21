// https://leetcode.com/problems/missing-number/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  let missingNum = nums.length;

  for (let i = 0; i < nums.length; i += 1) {
    missingNum ^= i ^ nums[i];
  }

  return missingNum;

  //-----------------------------------------------other-solution
  let practicleSum = 0;
  let thoraticalSum = nums.length;
  for (let i = 0; i < nums.length; i += 1) {
    thoraticalSum += i;
    practicleSum += nums[i];
  }
  return thoraticalSum - practicleSum;
};
