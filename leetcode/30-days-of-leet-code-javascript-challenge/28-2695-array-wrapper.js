// https://leetcode.com/problems/array-wrapper/

/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
  let sum = 0;
  for(const num of nums) sum += num;
  this.sum = sum;
  // this.sum = nums.reduce((sum, acc) => (sum + acc), 0);
  
  this.string = `[${nums.toString()}]`;
};

ArrayWrapper.prototype.valueOf = function() {
  return this.sum;
}

ArrayWrapper.prototype.toString = function() {
  return this.string;
}


const obj1 = new ArrayWrapper([1,2]);
const obj2 = new ArrayWrapper([3,4]);
console.log(obj1 + obj2); // 10
console.log(String(obj1)); // "[1,2]"
console.log(String(obj2)); // "[3,4]"
