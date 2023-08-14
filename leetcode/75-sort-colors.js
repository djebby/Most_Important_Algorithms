// https://leetcode.com/problems/sort-colors/ (top-interview-questions)


/** one pass solution
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let l = 0;
  let i = 0;
  let r = nums.length - 1;

  while (i <= r) {
    if (nums[i] === 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l += 1;
      i += 1;
    } else if (nums[i] === 2) {
      [nums[i], nums[r]] = [nums[r], nums[i]];
      r -= 1;
      /**
       * why i should not move the i pointer ?
       * because it's possible that the comming nums[r] is a zero
       * example: [0, 1, 2, 1, 0, 2]
       *              l  i     r
       */
    } else {
      i += 1;
    }
  }
};



/** two pass solution
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let zeroesCount = 0;
  let onesCount = 0;

  for (const num of nums) {
    if (num === 0) zeroesCount += 1;
    else if (num === 1) onesCount += 1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i < zeroesCount) nums[i] = 0;
    else if (i < zeroesCount + onesCount) nums[i] = 1;
    else nums[i] = 2;
  }

};
