// https://leetcode.com/problems/apply-transform-over-each-element-in-array (30-day-javascript-challenge)

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  let array = [];
  for(const i in arr) {
    array.push(fn(arr[+i], +i));
  }
  
  return array;
};
