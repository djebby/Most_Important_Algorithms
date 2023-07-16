// https://leetcode.com/problems/roman-to-integer/ (top-interview-questions)


/****************************************************************************SOLUTION-1
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symValMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

  let result = 0;

  for (let i = 0; i < s.length - 1; i++) {

    if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) result -= 1;
    else if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) result -= 10;
    else if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) result -= 100;
    else result += symValMap[s[i]];

  }

  return result + symValMap[s[s.length-1]];
};



/****************************************************************************SOLUTION-2
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function(s) {
  
  let result = 0;

  const symValMap = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && symValMap[s[i]] < symValMap[s[i+1]]) {
      result -= symValMap[s[i]];
    } else {
      result += symValMap[s[i]];
    }
  }

  return result;
};