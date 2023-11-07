// https://leetcode.com/problems/intersection-of-two-arrays-ii/ (top-interview-questions)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const nums1Freq = {};
  const nums2Freq = {};

  for (const num1 of nums1) {
    if (!nums1Freq.hasOwnProperty(num1)) nums1Freq[num1] = 0;
    nums1Freq[num1] += 1; 
  }

  for (const num2 of nums2) {
    if (!nums2Freq.hasOwnProperty(num2)) nums2Freq[num2] = 0;
    nums2Freq[num2] += 1;
  }

  const intersection = [];
  for (const num in nums1Freq) {
    if (!nums2Freq.hasOwnProperty(num)) continue;
    intersection.push(...new Array(Math.min(nums1Freq[num], nums2Freq[num])).fill(num));
  }

  return intersection;
};
