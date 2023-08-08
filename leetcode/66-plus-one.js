// https://leetcode.com/problems/plus-one/ (top-interview-questions)

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  let i = digits.length - 1;

  while (i >= 0) {
    if (digits[i] < 9) {
      digits[i] += 1;
      // we do our work of incrementing by one... so we can return the result
      return digits;
    } else {
      // digits[i] === 9 we can't increment this digit, we should set it to zero and try the next digit...
      digits[i] = 0;
      i -= 1;
    }
  }
  
  // if we reach this point that's mean that all digits[i] === 9 (originaly) 
  // and they become all digits[i] === 0 so we must add the one
  digits.splice(0, 0, 1);
  return digits;
};
