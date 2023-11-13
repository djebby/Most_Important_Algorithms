// https://leetcode.com/problems/insert-delete-getrandom-o1/ (top-interview-questions)

var RandomizedSet = function() {
  this.values = [];
  this.valIndex = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valIndex.hasOwnProperty(val)) {
    return false;
  }
  this.values.push(val);
  this.valIndex[val] = this.values.length-1;
  return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.valIndex.hasOwnProperty(val)) {
    return false;
  }
  const lastVal = this.values[this.values.length - 1];
  this.values[this.valIndex[val]] = lastVal;
  this.valIndex[lastVal] = this.valIndex[val];
  this.values.pop();
  delete this.valIndex[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.values[Math.floor(Math.random() * this.values.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */