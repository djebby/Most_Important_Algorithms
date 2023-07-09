// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const TOTAL = nums1.length + nums2.length;
  let half = Math.floor(TOTAL / 2);

  let l = 0;
  let r = nums1.length - 1;

  while (true) {
    let i = Math.floor((l+r) / 2);
    let j = half - i - 2;
  
    nums1Left = i >= 0 ? nums1[i] : -Infinity;
    nums1Right = (i+1) < nums1.length ? nums1[i+1] : Infinity;
    nums2Left = j >= 0 ? nums2[j] : -Infinity;
    nums2Right = (j+1) < nums2.length ? nums2[j+1] : Infinity;
    

    if (nums1Left <= nums2Right && nums2Left <= nums1Right) {
      if (TOTAL % 2 === 1) {
        return Math.min(nums1Right, nums2Right);
      } else {
        return (Math.max(nums1Left, nums2Left) + Math.min(nums1Right, nums2Right)) / 2;
      }
    } else if (nums1Left > nums2Right) {
      r = i - 1;
    } else {
      l = i + 1;
    }

  }

};