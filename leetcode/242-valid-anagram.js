// https://leetcode.com/problems/valid-anagram/ (top-interview-questions)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const sMap = new Map();
  const tMap = new Map();

  for (const c of s) {
    if (!sMap.has(c)) sMap.set(c, 1);
    else sMap.set(c, sMap.get(c) + 1);
  }

  for (const c of t) {
    if (!tMap.has(c)) tMap.set(c, 1);
    else tMap.set(c, tMap.get(c) + 1);
  }

  if (sMap.size !== tMap.size) {
    return false;
  }

  for (const k of sMap.keys()) {
    if (sMap.get(k) !== tMap.get(k)) {
      return false;
    }
  }

  return true;
};
