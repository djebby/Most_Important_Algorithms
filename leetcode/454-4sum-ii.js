// https://leetcode.com/problems/4sum-ii/ (top-interview-questions)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  const map = {};
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      const sum = num1 + num2;
      if (!map.hasOwnProperty(sum)) map[sum] = 0;
      map[sum] += 1;
    }
  }

  let count = 0;
  for (const num3 of nums3) {
    for (const num4 of nums4) {
      const negation = -(num3+num4);
      if (map.hasOwnProperty(negation)) {
        count += map[negation];
      }
    }
  }

  return count;
};
