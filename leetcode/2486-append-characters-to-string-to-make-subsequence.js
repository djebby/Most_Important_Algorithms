// https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {

  let j = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (j < t.length && s.charAt(i) === t.charAt(j)) j += 1;
  }

  return t.length - j;
};
