// https://leetcode.com/problems/sqrtx/ (top-interview-questions)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  
  let l = 1;
  let r = Math.floor(x / 2);

  let nearestIntSquareRoot = x === 1 ? 1 : 0;

  while (l <= r) {
    
    const m = l + Math.floor((r - l) / 2);

    if ( m*m === x ) {
      return m;
    }
    else if ( m*m < x ) {
      nearestIntSquareRoot = m;
      l = m + 1;
    } else {
      r = m - 1;
    }

  }

  return nearestIntSquareRoot;
};
