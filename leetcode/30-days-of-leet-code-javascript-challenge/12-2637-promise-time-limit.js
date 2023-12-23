// https://leetcode.com/problems/promise-time-limit/ (30-day-javascript-challenge)

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
  return async function(...args) {
    
    /*the idea is to return a new Promise,
      inside this promise we set some kind of
      race between a function that will reject
      the promoise after t milliseconds : 
      setTimeout(reject.bind(null, "Time Limit Exceeded"), t);
      and a function that will resolve the returned promise
      after the fn inputed function is resolved : 
      (res) => resolve(res)
      in case that fn itself is rejected the returned promise also.
      finally as a clean up we cancel the delayed rejection function:
      clearTimeout.bind(null, id)
     */

    return new Promise((resolve, reject) => {
      const id = setTimeout(reject.bind(null, "Time Limit Exceeded"), t);
      fn(...args)
      .then((res) => resolve(res))
      .catch((err) => reject(err))
      .finally(clearTimeout.bind(null, id));
    });
  }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
