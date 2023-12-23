// https://leetcode.com/problems/curry/ (30-day-javascript-challenge)
// https://blog.csdn.net/navicheung/article/details/130673672

/**
 * @param {Function} fn
 * @return {Function}
 */
var curry = function(fn) {
  // arguments accumulator (accumulate the arguments in an array until they reach the required number - the number of fn arguments )
  let accumulator = new Array();

  return function curried(...args) {
  
    accumulator.push(...args);

    if(fn.length === accumulator.length) {
      const result = fn(...accumulator);
      accumulator = new Array(); // clean up
      return result;
    } else {
      return curried;
    }
  };
};

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
