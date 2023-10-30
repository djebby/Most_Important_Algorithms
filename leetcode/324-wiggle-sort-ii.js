// https://leetcode.com/problems/wiggle-sort-ii/ (top-interview-questions)

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
  const n = nums.length;
  const ans = new Array(n);

  nums.sort((a, b) => (a - b));

  for (let i = 1; i < n; i += 2) {
    ans[i] = nums.pop();
  }
  
  let i = 0;
  while (nums.length > 0) {
    ans[i] = nums.pop();
    i += 2;
  }

  for (const num of ans) {
    nums.push(num);
  }

};


var wiggleSortLinearTimeComplexity = function(nums) {

  // counting sort... O(n) Time Complexity
  const count = new Array(Math.max(...nums)+1).fill(0);
  for (const num of nums) {
    count[num] += 1;
  }
  const sortedNums = [];
  for (let i = 0; i < count.length; i += 1) {
    for (let j = 0; j < count[i]; j += 1) {
      sortedNums.push(i);
    }
  }

  const n = nums.length;
  const ans = new Array(n);

  for (let i = 1; i < n; i += 2) {
    ans[i] = sortedNums.pop();
  }

  for (let i = 0; sortedNums.length > 0; i += 2) {
    ans[i] = sortedNums.pop();
  }

  for (let i = 0; i < n; i += 1) {
    nums[i] = ans[i];
  }

}
