// https://leetcode.com/problems/function-composition/ (30-day-javascript-challenge)

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
    // return functions.reduceRight((accumulator, currentFunction) => currentFunction(accumulator), x);
    for(let i = functions.length - 1; i >= 0; i -= 1) {
      x = functions[i](x);
    }
    return x;
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
*/
