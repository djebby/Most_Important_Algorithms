// https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const n = s.length;
  const charMap = {};
  const tMapedChars = new Set();

  for (let i = 0; i < n; i += 1) {
    if (charMap[s[i]] === undefined && !tMapedChars.has(t[i])) {
      charMap[s[i]] = t[i];
      tMapedChars.add(t[i]);
    }
    if (charMap[s[i]] !== t[i]) {
      return false;
    }
  }

  return true;
};
