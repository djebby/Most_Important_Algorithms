// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  nums.sort((a, b) => (a-b));
  let closestSum = 0;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length - 2; i++) {

    l = i + 1;
    r = nums.length - 1;

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      // keep track of the closest sum to return it at the end...
      if (Math.abs(target - sum) < minDiff) {
        minDiff = Math.abs(target - sum);
        closestSum = sum;
      }

      // update the left and right pointers and if we found sum == target just return sum immediately
      if (sum < target) l += 1;
      else if (sum > target) r -= 1;
      else return sum;

    }
  }

  return closestSum;

};