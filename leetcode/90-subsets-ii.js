// https://leetcode.com/problems/subsets-ii/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  
  nums.sort((n1, n2) => (n1 - n2));

  const subSets = [];
  const subSet = [];

  const backtracking = (i) => {
    if (i === nums.length) {
      subSets.push([...subSet]);
      return;
    }

    // first decision: include num @ i
    subSet.push(nums[i]);
    backtracking(i+1);
    subSet.pop();

    // second decision: not include num @ i
    i += 1;
    while(i < nums.length && nums[i-1] === nums[i]) i += 1;
    backtracking(i);

  };
  
  backtracking(0);
  return subSets;

};
