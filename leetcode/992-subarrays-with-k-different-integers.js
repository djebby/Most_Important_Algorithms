// https://leetcode.com/problems/subarrays-with-k-different-integers/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
  let result = 0;

  const window = new Map(); // window element frequencies 
  let fl = 0; // far left pointer
  let nl = 0; // near left pointer
  for (let r = 0; r < nums.length; r += 1) {
    window.set(nums[r], (window.get(nums[r]) || 0) + 1);

    while (window.size > k) {
      window.set(nums[nl], window.get(nums[nl]) - 1);

      if (window.get(nums[nl]) === 0)
        window.delete(nums[nl]);

      nl += 1;
      fl = nl;
    }

    while (window.get(nums[nl]) > 1) {
      window.set(nums[nl], window.get(nums[nl]) - 1);
      nl += 1;
    }

    if (window.size === k)
      result += (nl - fl + 1);
  }

  return result;
};
