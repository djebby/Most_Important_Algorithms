// https://leetcode.com/problems/counter/ (30-day-javascript-challenge)

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
  this.number = n;
  return function() {
    return this.number++;
  };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */