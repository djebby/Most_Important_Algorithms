// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let r = s.length - 1;
  while (r > 0 && s[r] === ' ') r -= 1;
  let l = r;
  while (l >= 0 && s[l] !== ' ') l -= 1;

  return r - l;
};
