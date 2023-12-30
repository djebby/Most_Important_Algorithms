// https://leetcode.com/problems/differences-between-two-objects/ (30-day-javascript-challenge)

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */

function objDiff(obj1, obj2) {

  // if both primitive  (base case 1)
  if(!isObject(obj1) && !isObject(obj2)) {
    return obj1 === obj2 ? {} : [obj1, obj2];
  }

  // one is object and other not  (base case 2)
  if(!isObject(obj1) || !isObject(obj2)) {
    return [obj1, obj2];
  }

  // one array and the other object (base case 3)
  if(Array.isArray(obj1) !== Array.isArray(obj2)) {
    return [obj1, obj2];
  }

  // both objects (including: both arrays)
  const diff = {};
  for(const key in obj1) {
    if(!obj2.hasOwnProperty(key)) continue;
    const result = objDiff(obj1[key], obj2[key]);
    if(Object.keys(result).length > 0) {
      diff[key] = result;
    }
  }

  return diff;
};

function isObject(o) {
  return o !== null && typeof o === "object";
}

console.log(objDiff({ "a": 5, "v": 6, "z": [1, 2, 4, [2, 5, 7]] }, { "a": 5, "v": 7, "z": [1, 2, 3, [1]] }));

/**
 * Write a functin that accepts two deeply nested objects or arrays obj1 and obj2 and returns
 * a new object representing their differences.
 * 
 * The function should compare the properties of the two objects and identify any changes.
 * The returned object should only contains keys where the value is different from obj1 to obj2.
 * For each changed key, the value should be represented as an array [obj1 value, obj2 value].
 * keys that exist in one objects but not in the other should not be included in the returned object.
 * When comparing two arrays, the indices of the arays are considered to be their keys.
 * The end result should be a deeply nested object where each leaf value is a difference array.
 * 
 * You may assume that both objects are the output of JSON.parse.
 * 
 * Example 1:-------------------------------------------------------------------------------
 * Input:
 * obj1 = {}
 * obj2 = { "a": 1, "b": 2 }
 * Output: {}
 * Explanation: There were no modifications made to obj1. New keys "a" and "b" appear in obj2,
 * but keys that are added or removed should be ignored
 * 
 * Example 2:-------------------------------------------------------------------------------
 * Input:
 * obj1 = {
 *  "a": 1,
 *  "v": 3,
 *  "x": [],
 *  "z": { "a": null }
 * }
 * 
 * obj2 = {
 *    "a": 2,
 *    "v": 4,
 *    "x": [],
 *    "z": { "a": 2 }
 * }
 * 
 * Output:
 * {
 *  "a": [1, 2],
 *  "v": [3, 4],
 *  "z": { "a": [null, 2] }
 * }
 * 
 * Example 3:-------------------------------------------------------------------------------
 * Input: obj1 = { "a": 5, "v": 6, "z": [1, 2, 4, [2, 5, 7]] }
 *        obj2 = { "a": 5, "v": 7, "z": [1, 2, 3, [1]] }
 * Output: { "v": [6, 7], "z": { "2": [4, 3], "3": { "0": [2, 1] } } }
 * Explanation: In obj1 and obj2, the keys "v"
 */
