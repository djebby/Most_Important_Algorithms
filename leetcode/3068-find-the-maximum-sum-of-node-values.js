// https://leetcode.com/problems/find-the-maximum-sum-of-node-values/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {
  const diff = [];
  for (const num of nums) diff.push((num ^ k) - num);
  diff.sort((a, b) => (b - a));

  let maximum = nums.reduce((curr, acc) => (curr + acc), 0);
  for (let i = 0; i < diff.length - 1; i += 2) {
    if (diff[i] + diff[i+1] <= 0) break;
    maximum += (diff[i] + diff[i+1]);
  }

  return maximum;
};
