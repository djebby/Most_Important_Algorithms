// https://leetcode.com/problems/count-subarrays-with-fixed-bounds/ (THIS IS INSANE...)

/** 
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
  let result = 0;
  let p1 = -1; // index of last number == minK seen so far
  let p2 = -1; // index of last number == maxK seen so far
  let p3 = -1; // index of last number not in the range [minK...maxK]

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === minK) p1 = i;
    if (nums[i] === maxK) p2 = i;
    if (nums[i] < minK || nums[i] > maxK) p3 = i;
    result += Math.max(0, Math.min(p1, p2) - p3);
  }
  return result;
};
