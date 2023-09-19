// https://leetcode.com/problems/maximum-product-subarray/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let largestProd = Math.max(...nums);

  let currMax = 1;
  let currMin = 1;

  for (const num of nums) {

    if (num === 0) {
      currMax = 1;
      currMin = 1;
      continue;
    }

    const tmp = currMin;
    currMin = Math.min(num, (currMin * num), (currMax * num));
    currMax = Math.max(num, (tmp * num), (currMax * num));
    
    largestProd = Math.max(largestProd, currMax);
  }

  return largestProd;
};
