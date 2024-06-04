// https://leetcode.com/problems/get-equal-substrings-within-budget/

/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {

  let length = 0;

  let j = 0;
  for (let i = 0; i < s.length; i += 1) {
    while (j < i && maxCost < 0) {
      maxCost += iCost(j);
      j += 1;
    }

    maxCost -= iCost(i);
    
    length = Math.max(length, maxCost >= 0 ? (i - j + 1) : -Infinity);
  }

  const iCost = (i) => Math.abs(s.charCodeAt(i) - t.charCodeAt(i));


  return length;
};
