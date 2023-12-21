// https://leetcode.com/problems/is-object-empty/ (30-day-javascript-challenge)

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
  return Object.keys(obj).length === 0;
};
