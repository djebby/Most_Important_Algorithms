// https://leetcode.com/problems/throttle/ (30-day-javascript-challenge)
// https://github.com/doocs/leetcode/blob/main/solution/2600-2699/2676.Throttle/README_EN.md

/**
 * @param {Function} fn
 * @param {number} t
 * @param {Function}
 */
var throttle = function(fn, t) {
  let recentArgs = undefined;
  let pending = false;

  return function(...args) {
    if(pending) {
      recentArgs = args; // the pending flag still true so override the arguments to be executed in the future...
    } else {
      fn(...args); // execute fn immediately
      pending = true; // turn the pending flag to true (means do not execute fn() until the flag is changed)
      setTimeout(helper, t); // schedule a POSSIBLE fn execution after t ms
    }

    function helper() {
      if(recentArgs) {
        // if there is some scheduled fn execution
        fn(...recentArgs);
        pending = true;
        recentArgs = undefined;
        setTimeout(helper, t); // schedule a POSSIBLE fn execution after t ms
      } else {
        pending = false;
      }
    }
  }
};
