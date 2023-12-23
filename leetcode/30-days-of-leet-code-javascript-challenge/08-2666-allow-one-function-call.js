// https://leetcode.com/problems/allow-one-function-call/ (30-day-javascript-challenge)

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
  let callCount = 0;
  return function(...args) {
    callCount++;
    return callCount == 1 ? fn(...args) : undefined;
  }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
