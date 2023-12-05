// https://leetcode.com/problems/to-be-or-not-to-be/ (30-day-javascript-challenge)

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const value = val;
  return {
    toBe: (val) => {
      if (val === value) return true;
      throw new Error("Not Equal");
    },
    notToBe: (val) => {
      if (val !== value) return true;
      throw new Error("Equal");
    }
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */