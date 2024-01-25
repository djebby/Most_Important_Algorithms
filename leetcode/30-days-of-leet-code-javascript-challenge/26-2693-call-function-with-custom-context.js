// https://leetcode.com/problems/call-function-with-custom-context/

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
  return this.bind(context, ...args)(); // solution 1
  return this.apply(context, args); // solution 2
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
