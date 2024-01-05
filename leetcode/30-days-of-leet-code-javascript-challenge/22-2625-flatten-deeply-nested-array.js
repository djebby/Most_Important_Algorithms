// https://leetcode.com/problems/flatten-deeply-nested-array/ (30-day-javascript-challenge)

/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
  if (n === 0) return arr; // base case

  const flattenedArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      flattenedArr.push(...flat(element, n-1));
    } else {
      flattenedArr.push(element);
    }
  }

  return flattenedArr;
};
