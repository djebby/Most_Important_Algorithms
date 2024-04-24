// https://leetcode.com/problems/range-sum-query-mutable/

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.n = nums.length;

  this.segmentTree = new Array(this.n * 2);
  this.segmentTree[0] = null;

  for (let i = 0; i < this.n; i += 1) {
    this.segmentTree[this.n+i] = nums[i];
  }

  for (let i = this.n - 1; i > 0; i -= 1) {
    this.segmentTree[i] = this.segmentTree[i << 1] + this.segmentTree[i << 1 | 1];
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
  index += this.n;
  this.segmentTree[index] = val;

  while (index > 1) {
    this.segmentTree[index >> 1] = this.segmentTree[index] + this.segmentTree[index ^ 1];
    index >>= 1;
  }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  let sum = 0;
  
  for (left += this.n, right += (this.n + 1); left < right; left >>= 1, right >>= 1) {
    if ((left & 1) === 1) sum += this.segmentTree[left++];
    if ((right & 1) === 1) sum += this.segmentTree[--right];
  }

  return sum;
};
