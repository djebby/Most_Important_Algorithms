// https://leetcode.com/problems/maximum-odd-binary-number/

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
  let onesCount = 0;
  for (const bit of s) {
    if (bit === '1') onesCount += 1;
  }

  const result = new Array(s.length).fill('0');

  if (onesCount > 0) {
    result[s.length - 1] = '1';
    onesCount -= 1;
  }

  for (let i = 0; i < s.length; i += 1) {
    if (onesCount-- > 0)
      result[i] = '1';
  }

  return result.join('');
};
