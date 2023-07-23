// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/ (top-interview-questions)


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

  // TODO: implement Knuth-Morris-Pratt KMP algorithm => O(n+m) time complexity solution

  // return haystack.indexOf(needle);

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1;
      while (j < needle.length && haystack[i+j] === needle[j]) j += 1;
      if (j === needle.length) return i;
    }
  }

  return -1;
};


strStr("sadbutsad", "sad");