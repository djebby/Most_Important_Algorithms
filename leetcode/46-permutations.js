// https://leetcode.com/problems/permutations/ (top-interview-questions)


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  
  const backtracking = (idx = 0) => {
    if (idx === nums.length - 1) {
      return [ [nums[idx]] ];
    }

    const subPermutations = backtracking(idx+1);
    
    const permutations = [];

    for (const subPermutation of subPermutations) {
      for (let i = 0; i <= subPermutation.length; i++) {
        permutations.push([...subPermutation.slice(0, i), nums[idx], ...subPermutation.slice(i)]);
      }
    }
    
    return permutations;
  }

  return backtracking();

};




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute02 = function(nums) {
  if (nums.length === 1) return [[nums[0]]];
  
  const permutations = [];
  const permutation = permute(nums.slice(1));

  for (const perm of permutation) {
    for (let i = 0; i <= perm.length; i++) {
      permutations.push([...perm.slice(0, i), nums[0], ...perm.slice(i)]);
    }
  }

  return permutations;
};



const result = permute02([1, 2, 3]);

console.log(result);