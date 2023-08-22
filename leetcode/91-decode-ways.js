// https://leetcode.com/problems/decode-ways/ (top-interview-questions)

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const cache = {};

  const dfs = (i) => {
    if (i === s.length) {
      return 1;
    }

    // string that start with 0 is invalid - so we return 0 ( 0 decode way )
    if (s.charAt(i) === '0') {
      return 0;
    }

    if (cache.hasOwnProperty(i)) {
      return cache[i];
    }

    let result = dfs(i+1);

    if (i+1 < s.length && Number(s.slice(i, i+2)) < 27) { // if ( s[i..i+1] between 9 and 27 )
      result += dfs(i+2);
    }

    cache[i] = result;
    return result;
  }

  return dfs(0);
};
