// https://leetcode.com/problems/intersection-of-two-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const intersection = [];

  nums1Set.forEach((num) => {
    if (nums2Set.has(num)) intersection.push(num);
  });

  return intersection;
};
