// https://leetcode.com/problems/custom-sort-string/

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
  const sFreq = {};

  for (const c of s) {
    if (sFreq[c] === undefined)  sFreq[c] = 1;
    else sFreq[c] += 1;
  }


  const sortedS = [];
  for (const c of order) {
    if (sFreq[c] !== undefined) {
      sortedS.push(c.repeat(sFreq[c]));
      delete sFreq[c];
    }
  }


  for (const c in sFreq) {
    sortedS.push(c.repeat(sFreq[c]));
  }


  return sortedS.join('');
};
