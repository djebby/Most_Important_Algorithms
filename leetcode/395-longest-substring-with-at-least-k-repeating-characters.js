// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/ (top-interview-questions)

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (s.length === 0 || s.length < k) return 0;
  if (k === 1) return s.length;

  const freq = {};
  for (const c of s) {
    if(!freq.hasOwnProperty(c)) freq[c] = 0;
    freq[c] += 1;
  }

  const invalidChar = new Set(); // set of invalid charachters (freq. under k)
  for (const c in freq) {
    if (freq[c] < k) {
      invalidChar.add(c);
    }
  }

  if (invalidChar.size === 0) return s.length; // all the string chars frequency are greater than k
  if (invalidChar.size === s.length) return 0; // all the string chars frequency are less than k

  let result = 0;
  let start = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (invalidChar.has(s.charAt(i))) {
      result = Math.max(result, longestSubstring(s.slice(start, i), k));
      start = i + 1;
    }
  }

  return Math.max(result, longestSubstring(s.slice(start), k));
};
