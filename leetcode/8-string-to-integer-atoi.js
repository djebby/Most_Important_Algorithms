// https://leetcode.com/problems/string-to-integer-atoi/ (top-interview-questions) (disliked)

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!/^[0-9+\-\s]$/.test(s[i]) && result.length === 0) { // if the first char is not digit or space or + or -
      return 0;
    }
    if (s[i] === " " && result.length === 0) {
      continue;
    }

    if ((s[i] === "-" || s[i] === "+") && result.length === 0) {
      result += s[i];
      continue;
    }

    if (/^\d$/.test(s[i])) {
      result += s[i];
    } else {
      break;
    }
  }

  const int = String(Number(result)) === "NaN" ?  0 : Number(result);
  
  if (int > (2**31) - 1) return (2**31) - 1;
  if (int < -(2**31)) return -(2**31);
  return int;

};
