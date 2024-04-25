// https://leetcode.com/problems/longest-ideal-subsequence/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
  // Time Complexity  : O(n*26) => O(n)
  // Space Complexity : O(26) => O(1)

  const n = s.length;
  
  const hashmap = {};
  hashmap[s.charCodeAt(n-1)] = 1;

  for (let i = n - 2; i >= 0; i -= 1) {
    let max = 1;
    for (let val = Math.max(97, s.charCodeAt(i) - k); val <= Math.min(122, s.charCodeAt(i) + k); val += 1) {
      if (Object.hasOwn(hashmap, val)) max = Math.max(max, (1 + hashmap[val]));
    }
    hashmap[s.charCodeAt(i)] = max;
  }

  return Math.max(...Object.values(hashmap));

};
