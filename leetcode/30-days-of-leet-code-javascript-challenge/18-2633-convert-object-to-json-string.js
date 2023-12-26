// https://leetcode.com/problems/convert-object-to-json-string/ (30-day-javascript-challenge)

/**
 * Given an object, return a valid JSON string of that object.
 * You may assume the object only includes strings, integers, arrays, objects, booleans, and null.
 * The returned string should not include extra spaces.
 * The order of keys should be the same as the order returned by Object.keys().
 * Please solve it without using the built-in JSON.stringify method.
 */

/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {

  if (object === null || object === undefined) {
    return String(object);
  }

  // Arrays []
  if(Array.isArray(object)) {
    const values = object.map(obj => jsonStringify(obj));
    return `[${values.join(',')}]`
  }

  // Objects {}
  if(typeof object == 'object') {
    const keys = Object.keys(object);
    const pairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`);
    return `{${pairs.join(',')}}`;
  }

  // Strings ""
  if(typeof object === 'string') {
    return '"' + String(object) + '"';
  }

  // booleans or numbers
  return String(object);
};

/** 
 * Example 1:
 *  Input: object = {"y":1,"x":2}
 *  Output: {"y":1,"x":2}
 *  Explanation: Return the JSON representation.
 *  Note that the order of keys should be the same as the order returned by Object.keys().
 * 
 * Example 2:
 *  Input: object = {"a":"str","b":-12,"c":true,"d":null}
 *  Output: {"a":"str","b":-12,"c":true,"d":null}
 *  Explanation: The primitives of JSON are strings, numbers, booleans, and null.
 * 
 * Example 3:
 *  Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
 *  Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
 *  Explanation: Objects and arrays can include other objects and arrays.
 * 
 * Example 4:
 *  Input: object = true
 *  Output: true
 *  Explanation: Primitive types are valid inputs.
 */
