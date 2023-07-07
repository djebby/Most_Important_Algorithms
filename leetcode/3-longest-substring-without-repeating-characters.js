// https://leetcode.com/problems/longest-substring-without-repeating-characters/ (top-interview-questions)

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const charSet = new Set();
  let length = 0; // length of the longest substring

  let i = 0;
  for (let j = 0; j < s.length; j++) {
    while(charSet.has(s[j])) charSet.delete(s[i++]);

    charSet.add(s[j]);
    if (charSet.size > length) length = charSet.size;
  }

  return length;
};