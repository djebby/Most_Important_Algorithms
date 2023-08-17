// https://leetcode.com/problems/subsets/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const subsetList = [];
  const subset = [];

  const backtrack = (i = 0) => {
    if (i === nums.length) {
      subsetList.push([...subset]);
      return;
    }

    backtrack(i+1);
    subset.push(nums[i]);
    backtrack(i+1);
    subset.pop();
  }

  backtrack();

  return subsetList;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const subSets = [];
  const subSetCount = (2 ** nums.length) - 1;

  for (let bin = 0; bin <= subSetCount; bin++) {
    const subSet = [];
    for (let i = 0; i < nums.length; i++) {
      if ((bin & (1 << i)) !== 0) {
        subSet.push(nums[i]);
      }
    }
    subSets.push(subSet);
  }

  return subSets;
};
