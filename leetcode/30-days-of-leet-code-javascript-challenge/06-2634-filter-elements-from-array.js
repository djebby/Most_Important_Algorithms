// https://leetcode.com/problems/filter-elements-from-array/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let filtered = [];

  for(let i = 0; i < arr.length; i += 1) {
    if(fn(arr[i], i)) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
};
