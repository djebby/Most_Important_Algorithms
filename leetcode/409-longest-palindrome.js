// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  
  const freqs = {};
  for (let i = 0; i < s.length; i += 1) {
    freqs[s.charAt(i)] = (freqs[s.charAt(i)] || 0) + 1;
  }

  let oddFlag = 0;
  let length = 0;
  for (const freq of Object.values(freqs)) {
    length += (freq % 2 === 0 ? freq : freq - 1);
    oddFlag = oddFlag || (freq % 2);
  }

  return length + oddFlag;
};
