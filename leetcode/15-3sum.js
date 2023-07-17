// https://leetcode.com/problems/3sum/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => (a - b));
  let triplets = [];
  for (let i = 0; i < nums.length-2; i++) {
    if (i > 0 && nums[i-1] === nums[i]) {
      continue;
    }

    let l = i+1;
    let r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum === 0) {
        triplets.push([nums[i], nums[l], nums[r]]);
        l += 1;
        while (nums[l-1] === nums[l] && l < r) l += 1;
        r -= 1;
        while (nums[r] === nums[r+1] && l < r) r -= 1;
      } else if (sum < 0) {
        l += 1;
      } else {
        r -= 1;
      }
    }

  }

  return triplets;

};


threeSum([-1,0,1,2,-1,-4]);