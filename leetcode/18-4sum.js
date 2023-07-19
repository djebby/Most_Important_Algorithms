// https://leetcode.com/problems/4sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []; // base case 

  const quadruplets = [];
  nums.sort((a,b) => (a-b));

  for(let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i-1] === nums[i]) continue;
    // if this condition is true then we are sure that the next iteration the sum will be greater than the sum so we break...
    if ((nums[i] + nums[i+1] + nums[i+2] + nums[i+3]) > target) break; 
    // if this condition is true then it's useless to try with this value of i let's try the next one...
    if ((nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1]) < target) continue;

    for (let j = i+1; j < nums.length - 2; j++) {
      if (j > i+1 && nums[j-1] === nums[j]) continue;
      if ((nums[i] + nums[j] + nums[j+1] + nums[j+2]) > target) continue;
      if ((nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1]) < target) continue;
      let l = j+1;
      let r = nums.length - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[l], nums[r]]);
          l += 1;
          while (nums[l-1] === nums[l] && l < r) l += 1;
          r -= 1;
          while (nums[r] === nums[r+1] && l < r) r -= 1;
        } else if (sum > target) {
          r -= 1;
          while (nums[r] === nums[r+1] && l < r) r -= 1;
        } else {
          l += 1;
          while (nums[l-1] === nums[l] && l < r) l += 1;
        }
      }
    }
  }

  return quadruplets;
};

fourSum([2,2,2,2,2], 8);