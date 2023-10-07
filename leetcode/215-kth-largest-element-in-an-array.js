// https://leetcode.com/problems/kth-largest-element-in-an-array/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

  const quickSelect = (l, r) => {

    const pivot = nums[r];
    let p = l;

    for (let i = l; i < r; i += 1) {
      if (nums[i] <= pivot) {
        [nums[p], nums[i]] = [nums[i], nums[p]];
        p += 1;
      }
    }
    [nums[p], nums[r]] = [nums[r], nums[p]];


    if (p < (nums.length - k)) {
      quickSelect(p+1, r);
    } else if (p > (nums.length - k)) {
      quickSelect(l, p-1);
    } else {
      return nums[p];
    }

  }

  return quickSelect(0, nums.length - 1);
};
