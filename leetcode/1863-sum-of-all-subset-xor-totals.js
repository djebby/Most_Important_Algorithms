// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
  
  const subsetsXORSum = 0;
  const getSubsetsXOR = (i, xorAccumulator) => {
    if (i === nums.length) {
      subsetsXORSum += xorAccumulator;
      return;
    }
    getSubsetsXOR(i+1, xorAccumulator);
    getSubsetsXOR(i+1, xorAccumulator ^ nums[i]);
  }

  getSubsetsXOR(0, 0);
  return subsetsXORSum;
};
