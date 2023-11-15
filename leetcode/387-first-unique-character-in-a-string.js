// https://leetcode.com/problems/first-unique-character-in-a-string/ (top-interview-questions)

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const charFreq = {};
  for (const c of s) {
    if (!charFreq.hasOwnProperty(c)) charFreq[c] = 0;
    charFreq[c] += 1;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (charFreq[s.charAt(i)] === 1) return i;
  }
  return -1;
};
