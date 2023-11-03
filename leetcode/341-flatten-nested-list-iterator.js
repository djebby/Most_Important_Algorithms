// https://leetcode.com/problems/flatten-nested-list-iterator/ (top-interview-questions)

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *  Return true if this NestedInteger holds a single integer, rather than a nested list.
 *   @return {boolean}
 *   this.isInteger = function() {
 *     ...
 *   };
 *
 *   Return the single integer that this NestedInteger holds, if it holds a single integer
 *   Return null if this NestedInteger holds a nested list
 *   @return {integer}
 *   this.getInteger = function() {
 *     ...
 *   };
 *
 *   Return the nested list that this NestedInteger holds, if it holds a nested list
 *   Return null if this NestedInteger holds a single integer
 *   @return {NestedInteger[]}
 *   this.getList = function() {
 *     ...
 *   };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
  this.i = 0;
  this.integers = [];
  
  // remember that nestedList is just an array full of objects of type NestedInteger
  for (const nestedInteger of nestedList) {
    flatNestedInteger.bind(this)(nestedInteger);
  }
  

  // a helper function to flat an object of type NestedInteger it push all the integers in the global this.integers property
  const flatNestedInteger = (item) => {
    if (item.isInteger()) {
      this.integers.push(item.getInteger());
      return;
    }

    for (const nestedInteger of item.getList()) {
      flatNestedInteger.bind(this)(nestedInteger);
    }
  }
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
  return this.i < this.integers.length;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
  return this.integers[this.i++];
};


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
