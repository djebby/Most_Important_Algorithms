// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const combinations = [];
  const levels = {}; // tree levels
  function backtracking(index, sum, combination, level) {
    if (!(level in levels)) levels[level] = [];
    levels[level].push([...combination]);
    if (sum > target) return;
    if (sum === target) {
      combinations.push([...combination]);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtracking(i, sum + candidates[i], combination, level+1);
      combination.pop();
    }

  }

  backtracking(0, 0, [], 0);
  console.log(levels);
  return combinations;
};



console.log(combinationSum([7, 6, 3, 2], 7));