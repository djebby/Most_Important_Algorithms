// https://leetcode.com/problems/shuffle-an-array/ (top-interview-questions)

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = nums;
  this.shuffled = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  this.shuffled.sort( _ => Math.random() - 0.5);
  return this.shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
