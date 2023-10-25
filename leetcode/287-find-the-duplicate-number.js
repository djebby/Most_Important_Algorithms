// https://leetcode.com/problems/find-the-duplicate-number/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let tortoise = 0;
  let hare = 0;

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  let tortoise2 = 0;

  while (tortoise !== tortoise2) {
    tortoise = nums[tortoise];
    tortoise2 = nums[tortoise2];
  }

  return tortoise;
};
