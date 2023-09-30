// https://leetcode.com/problems/happy-number/ (top-interview-questions)

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  
  // helper function...
  const sumOfDigitSquares = (num) => {
    let result = 0;
    
    while(num > 0) {
      result += Math.pow(num % 10, 2);
      num = Math.floor(num / 10);
    }

    return result;
  }

  const visitedNumbers = new Set();

  while (!visitedNumbers.has(n)) {
    visitedNumbers.add(n);
    n = sumOfDigitSquares(n);
    if (n === 1) {
      return true;
    }
  }

  return false;
};