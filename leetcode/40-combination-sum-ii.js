// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const combinations = [];
  const combination = [];

  candidates.sort((a, b) => (a - b));

  const backtracking = (idx = 0, sum = 0) => {

    if (sum > target) {
      return;
    }

    if (sum === target) {
      combinations.push([...combination]);
      return;
    }

    for (let i = idx; i < candidates.length; i++) {
      // the trick is that at with in the same lavel the values should be unique...
      if (i > idx && candidates[i-1] === candidates[i]) continue;
      
      combination.push(candidates[i]);
      backtracking(i+1, sum + candidates[i]);
      combination.pop();
    }
  }

  backtracking();
  return combinations;
};