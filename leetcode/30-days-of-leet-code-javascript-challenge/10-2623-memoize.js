// https://leetcode.com/problems/memoize/ (30-day-javascript-challenge)

/**
 * @param {Function} fn
 */
function memoize(fn) {

  const cache = new Map();

  return function(...args) {
    const hash = args.join();

    if(cache.has(hash)) return cache.get(hash);
    
    const fnCallOutput = fn(...args);
    cache.set(hash, fnCallOutput);

    return fnCallOutput;
  }
}
 
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *  callCount += 1;
 *  return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
