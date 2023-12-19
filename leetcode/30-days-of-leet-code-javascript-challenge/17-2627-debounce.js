// https://leetcode.com/problems/debounce/ (30-day-javascript-challenge)

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let calledTimerId;
  return function(...args) {
    // clear the old called timer id if it exist
    clearTimeout(calledTimerId);
    calledTimerId = setTimeout(fn.bind(null, ...args), t);
  }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
