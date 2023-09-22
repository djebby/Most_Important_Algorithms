// https://leetcode.com/problems/find-peak-element/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (true) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > 0 && nums[mid-1] > nums[mid]) {
      right = mid - 1;
    } else if ((mid < nums.length - 1) && (nums[mid] < nums[mid+1])) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
};
